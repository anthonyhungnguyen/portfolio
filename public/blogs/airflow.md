## Intro

Over the years, Airflow has been one of the tools I’ve used the most. Hours of writing DAGs, operating, debugging, and deploying pipelines have made working with Airflow feel like second nature—almost like autopilot mode.

However, this comfort made me realize that I’d drifted away from understanding its core principles and fundamentals. So, I decided it was time to revisit Airflow—one of the most popular orchestration tools in modern data engineering.

# The Original Story
Data pipelines were messy. Airbnb felt the pain, neediang to orchestrate increasingly complex workflows. In **2014**, engineer **Maxime Beauchemin** built **Airflow** to solve this: workflows as Python code (DAGs), dynamic, and monitorable.

Airbnb open-sourced it in **2015**, contributing to the **Apache Software Foundation**. The community exploded. Airflow became incredibly extensible, integrating with everything.

**Key moments:**

- **2019: Apache Top-Level Project:** Solidified as a trusted, mature tool.
- **Kubernetes Executor:** Scalability boosted by containerization.
- **Cloud Services:** Easy adoption via managed services (AWS, Google, Azure).

**Today, Airflow is the standard for data workflow orchestration.** From simple tasks to complex ML pipelines, it's used everywhere. Its success? Code-driven workflows, flexibility, and a strong community.

## Overview
Orchestration becomes overwhelming when:
- **Cron Jobs Chaos:** Relying heavily on cron jobs meant **brittle, unmanageable schedules**. Dependencies were implicit and easily broken. Debugging was a nightmare – no centralized logging or monitoring. Scaling was virtually non-existent.
- **Scripting Spaghetti:** Complex workflows often devolved into **sprawling shell scripts or custom code**. These were hard to maintain, debug, and understand, becoming **technical debt factories**. Version control was often an afterthought.
- **Proprietary ETL Tools (Vendor Lock-in):** While some ETL tools offered scheduling, they were often **expensive, inflexible, and UI-heavy**. Customization was limited, integrations were rigid, and you were locked into a vendor's ecosystem. Code was often hidden or abstracted away, hindering transparency and control.
- **Manual Intervention Madness:** For complex dependencies or error handling, teams often resorted to **manual intervention**. This was **error-prone, time-consuming, and completely unsustainable** as data volumes grew. "Firefighting" became the norm.

Airflow design:

At core, Airflow operates on the concept of Directed Acyclic Graph (DAGs) to model workflows.

![DAGs](https://media.geeksforgeeks.org/wp-content/uploads/20231106151507/4-(1).jpg)
- **Tasks (Nodes)** are individual units, such as running query, copying data or executing scripts
- **Edge (dependencies)** are order of execution of tasks
Airflow ensures tasks are executed sequentially or in parallel and when tasks failed, they are retried automatically (based on retry configuration). Also, Airflow also supports logging and monitoring and debugging purposes.

## The Internals
![AIrflow Internals](https://airflow.apache.org/docs/apache-airflow/2.0.1/_images/arch-diag-basic.png)
- **Scheduler**: monitor all tasks and DAGs and triggers dependencies when their tasks complete. Behind the scenes, the scheduler spins up a subprocess, which monitors and stays in sync with all DAGs in the specified DAG directory. Once per minute, by default, the scheduler collects DAG parsing results and checks whether any active tasks can be triggered.
- **Web Server**: host Airflow UI, visualize workflows, monitor task execution, inspect logs and trigger DAGs run.
- **Metadata Database**: stores metadata, including DAGs definition, task states, execution logs, and schedule.
- **Workers**: Execute tasks assigned by executors. Depending on the executor (Celery or Kubernetes), tasks are distributed across one or more worker nodes.

### Workflows
![Workflows](https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7b745116-28f2-4184-a98c-7ac4ef3bc313_1274x874.png)

1. **DAG defining**: The users define the DAG with desired tasks and logic, including when to begin running it and the scheduled interval.
2. **DAG Parsing**: The Scheduler scans the DAG directory, parses the DAG file, and loads them into the Metadata Database.
3. **Scheduling**: Based on the DAG definitions and schedule intervals, the Scheduler determines which tasks are ready for execution and queues them.
4. **Task Execution**: The Executor fetches the queued tasks and assigns them to available Workers. The Workers execute the tasks, and task states are updated in the Metadata Database.
5. **Monitoring**: The Web Server queries the Metadata Database and visualizes DAG runs, task statuses, and logs in real-time. Users can monitor task progress, inspect logs, or trigger manual DAG runs from the UI.
6. **Retries and State Updates**: If a task fails, the Scheduler ensures retries are handled according to the task configuration. The Executor updates task states in the database until all tasks are completed successfully or fail beyond retry limits.

## DAGs and Tasks
```python
from airflow import DAG
from airflow.operators.bash import BashOperator
from airflow.operators.python import PythonOperator # Import PythonOperator
from datetime import datetime

def transform_data_python():
    """
    Simulates data transformation in Python.
    Reads data from raw_data.csv, processes it, and prints to console.
    In a real scenario, this would involve more complex Python logic.
    """
    try:
        with open('/tmp/data/raw_data.csv', 'r') as f:
            lines = f.readlines()
            for line in lines:
                parts = line.strip().split(',')
                if len(parts) >= 3:  # Ensure enough columns
                    value1 = parts[1]
                    value2 = parts[2]
                    processed_data = f"Processed in Python: {value1}, {value2}"
                    print(processed_data) # In Airflow logs, not console
                    return processed_data # Optionally return data for XCom
                else:
                    print(f"Skipping line: '{line.strip()}' - not enough columns")
    except FileNotFoundError:
        print("Error: raw_data.csv not found. Ensure extract_data task ran successfully.")
        return None # Indicate failure if file not found


with DAG(
    dag_id='simple_data_pipeline_python_operator',
    start_date=datetime(2023, 1, 1),
    schedule_interval=None,  # Run manually
    catchup=False,
    tags=['example', 'python', 'basic'],
) as dag:
    """
    ### Simple Data Pipeline DAG with PythonOperator
    This DAG demonstrates a basic data pipeline with three tasks, now using a PythonOperator
    for the transformation step:

    1. **extract_data:** Extracts data (simulated by creating a file).
    2. **transform_data_python:** Transforms the extracted data using a Python function.
    3. **load_data:** Loads the transformed data (simulated by echoing to a file).

    It's a linear pipeline where tasks run sequentially.
    """

    extract_data = BashOperator(
        task_id='extract_data',
        bash_command='mkdir -p /tmp/data && echo "Raw data,value1,value2" > /tmp/data/raw_data.csv',
        doc_md="""
        #### Extract Data Task (BashOperator)
        Simulates extracting data by creating a directory and a simple CSV file.
        Uses a `BashOperator` to execute shell commands.
        """,
    )

    transform_data_python_task = PythonOperator( # Renamed task_id to be more descriptive
        task_id='transform_data_python',
        python_callable=transform_data_python, # Point to the Python function
        doc_md="""
        #### Transform Data Task (PythonOperator)
        Simulates transforming data using a Python function.
        Reads `raw_data.csv`, extracts and processes columns using Python code.
        Uses a `PythonOperator` to execute the Python function.
        """,
    )

    load_data = BashOperator(
        task_id='load_data',
        bash_command='mkdir -p /tmp/output && cat /tmp/data/raw_data.csv | awk -F "," \'{print "Loaded:", $2, $3}\' > /tmp/output/processed_data.txt',
        doc_md="""
        #### Load Data Task (BashOperator)
        Simulates loading data. Uses a `BashOperator` to execute shell commands.
        """,
    )

    # Task dependencies - define the order of execution
    extract_data >> transform_data_python_task >> load_data # Updated dependency to PythonOperator task
```

### Exchanging data between tasks

Airflow offers a mechanism for sharing data between tasks called **XCom (Cross-Communication)** when one task needs to consume data from another.

![Xcom](https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0c619758-5420-4579-8aca-d4c807809e0a_1334x836.png)

XCom allows tasks to push and pull small amounts of data during execution. For example, one task can push a result using `xcom_push` (or achieve by simply returning in the execute method ) and another task can retrieve that result using `xcom_pull`.

The way the data in XCom is stored, written, and retrieved can be controlled by the XCom backend. The default one will store the XCom data in the metadata database. In addition, we can configure Xcom to be stored in [Object Storage or desired custom backend](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/xcoms.html).

### **Task Concurrency and Resource Management**

Airflow allows fine-grained control over task concurrency and resource management to optimize pipeline execution:

- **DAG-Level Concurrency**: We can configure the `max_active_runs` parameter to limit the number of active DAG runs for a single DAG.
    
- **Task-Level Concurrency**: The `max_active_tasks` parameter controls how many tasks in a DAG can run concurrently.
    
- **Pools**: Resource pools allow you to limit the number of parallel tasks that share specific resources (e.g., database connections).
    
- **Queue Management**: Tasks can be assigned to specific queues to prioritize execution based on resource availability or criticality.

## **Operators and Hooks**

Airflow provides a robust system of **operators** and **hooks** that effectively interact with external systems and define task functionality. These components are essential building blocks for creating modular and reusable workflows.

### **Operators**

We use operators to define the tasks. They encapsulate the logic for what a task should accomplish. An operator is simply a Python class that contains needed logic and implements a required method called `execute` , which act as the entry point for the worker to execute the task; operators can be categorized as:

- **Action Operators**: Perform specific actions such as running a Python function, executing a Bash command, or triggering an API call. Examples include `PythonOperator`, `BashOperator`, and `SimpleHttpOperator`.
    
- **Transfer Operators**: Facilitate moving data between systems, such as `S3ToGCSOperator` or `MySqlToPostgresOperator`.
    
- **Sensor Operators**: Wait for an external condition to be met before proceeding. Examples include `FileSensor` (waiting for a file) and `ExternalTaskSensor` (waiting for another DAG to complete).
    

Operators are designed to be highly configurable and composable, making it easy to build tasks tailored to your specific needs; providers or Airflow itself offers many existing operators to make our life easier (most cloud vendors like Google or AWS have supported operators to work with their service); also, we can write custom operators based on our need (e.g., existed dbt operators only work with Cloud version, so a local-dbt operator is needed here). The custom operators are expected to be seamless here; we only need to inherit the BaseOpertor class and add the required logic.

### **Hooks**

We use Hooks to define interfaces that manage connections to external systems. They handle authentication, session management, and other connection-related functions. Hooks are often used within Operators to simplify integration with services like databases or APIs. Examples include:

- **Database Hooks**: `PostgresHook`, `MySqlHook`, and `MongoHook` for interacting with different database systems.
    
- **Cloud Service Hooks**: `S3Hook`, `GCSHook`, and `AzureBlobStorageHook` for connecting to cloud storage.
    
- **API Hooks**: `HttpHook`: For making HTTP requests or interacting with REST APIs.
    

Like operators, we can use existing hooks or create custom ones if needed.

---

## **Executors**

Executors in Airflow are responsible for determining how tasks are executed. Different executors offer varying levels of scalability, concurrency, and complexity, allowing you to choose the right one for your specific workload:

- **SequentialExecutor**: Ideal for testing and development, this executor runs tasks sequentially in a single process. It's simple but unsuitable for production due to its lack of parallelism.
    
- **LocalExecutor** supports parallel execution on a single machine using multiple processes. It is suitable for small—to medium-sized workflows that require concurrency but don't need distributed execution.
    
- **CeleryExecutor**: A distributed task execution framework that uses a message broker (e.g., RabbitMQ or Redis) to distribute tasks across multiple worker nodes. It is highly scalable and a common choice for production environments.
    
- **KubernetesExecutor**: Designed for cloud-native and containerized environments, this executor dynamically creates Kubernetes pods for each task. It provides excellent resource isolation, scalability, and fault tolerance, making it ideal for large-scale workflows.
    
- **DebugExecutor**: This executor is primarily used for debugging. It runs tasks locally using the same process as the Airflow Scheduler, simplifying troubleshooting during DAG development.

## Deployment

Deploying Airflow ranges from running a lightweight local instance for testing and development to setting up a robust, scalable, and production-ready environment. Here's an overview of the deployment process:

### On a single machine

Airflow can be deployed directly on a single machine (airflow standalone) for testing and development. This setup will initiate all the required components (scheduler, web server, database) as a separate process on our machine.

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2492e68e-a0ae-4dbe-af59-4b5225b13e35_486x558.png)


Another way to deploy Airflow on a single machine is by separting each process into a separate container (via Docker or on a local Kubernetes cluster such as Minikube)

However, a single-machine deployment is insufficient when operating Airflow in production, which requires scalability, availability, and fault tolerance.

### **Distributed Deployment**

Airflow can be deployed in a distributed architecture; components are deployed independently and redundantly; each element is live on a separate machine and can be optionally deployed in multiple instances on different machines. (e.g., scheduler and webserver are on two other machines, the scheduler can have three instances deployed on three machines)

This setup allows for better load distribution, making it suitable for handling large-scale workflows.

The most common approach for Airflow distributed-architecture deployment I observed is using Kubernetes.

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd526074d-d31c-46ca-9469-806f1c73e557_1106x786.png)

If you use Airflow managed by a cloud vendor like AWS or Google, your Airflow environment is deployed on a Kubernetes cluster, and all the DAGs files are stored in the object storage (S3 for AWS and GCS for Google Cloud)

## **Outro**

Throughout this article, we have explored Apache Airflow’s origins, core concepts, and internal architecture. We have seen how Airflow uses Directed Acyclic Graphs (DAGs) to orchestrate workflows and manage dependencies. We have discussed its core components, such as the Scheduler, Web Server, and Metadata Database.

We also covered Airflow’s abstractions, such as Operators and Hooks, the different executor options, and the deployment approaches, which range from single-machine setups to distributed and Kubernetes-based environments.

Thank you for reading this far.

Please give feedback or correct me in the comments if you see I missed anything.

Now, it's time to say goodbye. See you on my next pieces.

---

## **References**

_[1] [Apache Airflow Official Documentation](https://airflow.apache.org/docs/apache-airflow/stable/index.html)_

_[2] [Apache Airflow from Wikipedia](https://en.wikipedia.org/wiki/Apache_Airflow)_

_[3] Airbnb Engineer, [Airflow: a workflow management platform](https://medium.com/airbnb-engineering/airflow-a-workflow-management-platform-46318b977fd8) (2015)_