import {
    EducationProps,
    ExperienceProps,
    ProjectProps,
    SkillProps,
} from '@/types/about'

const projectData = [
    {
        name: 'Text2Diagram',
        link: 'https://github.com/anthonyhungnguyen/Text2Diagram',
        image: '/images/projects/text2diagram.png',
        achievement:
            'Developed Text2Diagram, a React.js/FastAPI application that automates diagram generation from text, improving developer productivity by 50% in diagram creation tasks. Deployed using AWS ECS (backend) and Amplify (frontend) with a CI/CD pipeline.',
        skill: ['React', 'FastAPI', 'Docker', 'AWS'],
    },
    {
        name: 'Food Price Tracker',
        link: 'https://github.com/anthonyhungnguyen/applied-computing-concepts',
        image: '/images/projects/foodpricetracker.png',
        achievement:
            'Created "Windsor Food Price Tracker," a React.js and Spring Boot application that tracks 1000+ products across 5 stores, helping users find the lowest food prices and save 10-20% on groceries.',
        skill: ['React', 'Spring Boot', 'Docker', 'Scrapy', 'MySQL'],
    },
    {
        name: 'Bus Radar',
        link: 'https://github.com/anthonyhungnguyen/bus_radar',
        image: '/images/projects/bus_radar.jpeg',
        achievement:
            'Developed BusRadar (Java, ReactJS, Docker), a real-time bus tracking platform achieving 95% accuracy in arrival time predictions, enhancing commuter satisfaction.',
        skill: ['React', 'Spring Boot', 'Docker', 'Mongodb', 'MySQL', 'Redis'],
    },
    {
        name: 'Biometric-based Attendance Tracking System with One/Fewshot Learning',
        link: 'https://github.com/anthonyhungnguyen/capstone-project',
        image: '/images/projects/biometric.png',
        achievement:
            'Engineered a scalable backend using Spring Boot for an AI-powered student authentication system, integrating facial recognition capabilities with Python, TensorFlow, and OpenCV. This solution improved attendance tracking efficiency by 40% and provided real-time data for informed policy decisions.',
        skill: [
            'Spring Boot',
            'Python',
            'TensorFlow',
            'OpenCV',
            'MySQL',
            'React',
            'Kafka',
        ],
    },
] as ProjectProps[]

const skillData = {
    'Programming Languages': ['Java', 'Python', 'JavaScript', 'TypeScript'],
    'Cloud & DevOps': ['GCP', 'Docker', 'Kubernetes'],
    Frameworks: ['React', 'Spring Boot', 'FastAPI', 'Tailwind CSS'],
    'Testing & Monitoring': ['JUnit', 'PyTest', 'Grafana'],
    'Big Data': ['Kafka', 'PySpark', 'Airflow', 'Hadoop', 'Spark'],
    Databases: ['Redis', 'MySQL', 'ArangoDB', 'BigQuery', 'Prometheus', 'Hive'],
} as SkillProps

const educationData = [
    {
        timeline: 'May 2024 - Nov 2025',
        schoolName: 'University of Windsor',
        degree: 'Master of Applied Computing',
        gpa: '9.2/10',
    },
    {
        timeline: 'Sep 2017 - Nov 2021',
        schoolName: 'Ho Chi Minh University of Technology',
        degree: 'Bachelor of Engineering (Computer Science)',
        gpa: '8.48/10',
    },
] as EducationProps[]

const experienceData = [
    {
        timeline: 'May 2024 - Present',
        companyName: 'Giao Hang Nhanh',
        title: 'Data Engineer',
        achievements: [
            'Architected GCP-based data platform (GCS, Airflow) to replace legacy systems, reducing infrastructure costs by 30% via Spark optimization and auto-scaling policies.',
            'Built FastAPI service with Kafka integration to process 2K+ parcel scans/sec, enabling real-time logistics tracking and reducing ETL latency by 45%.',
            'Engineered a robust Change Data Capture (CDC) pipeline using Kafka Connect and Debezium to stream data from MongoDB to a data lake, leveraging Apache Iceberg for efficient and scalable storage and management.',
            'Implemented Great Expectations validation framework in Airflow pipelines, achieving 95% data consistency and eliminating 15+ hours/month of manual QA.',
        ],
        skill: [
            'Python',
            'FastAPI',
            'Kafka',
            'MongoDB',
            'Apache Iceberg',
            'Docker',
            'Kubernetes',
            'Airflow',
            'Spark',
        ],
    },
    {
        timeline: 'Dec 2020 - April 2024',
        companyName: 'VNG Corporation',
        title: 'Software Engineer',
        achievements: [
            'Designed centralized data infrastructure using Apache Airflow, Spark, and JupyterHub, designing modular ETL pipelines that reduced data retrieval latency by 60% and accelerated team productivity by 80% via reusable templates.',
            'Engineered ArangoDB-based integration layer unifying Payment, Billing, and Telco systems, leveraging graph traversal algorithms to boost fraudulent pattern detection accuracy by 50%.',
            'Built async FastAPI service with horizontal scaling (Kubernetes), achieving sub 100ms latency at 10K+ RPS and 70% faster inference via model quantization and multi-worker parallel processing.',
        ],
        skill: [
            'Airflow',
            'Spark',
            'JupyterHub',
            'ArangoDB',
            'Kubernetes',
            'Spring Boot',
            'React',
            'Docker',
            'Spark',
            'FastAPI',
            'Python',
        ],
    },
    {
        timeline: 'Jul 2020 - Nov 2020',
        companyName: 'VNG Corporation',
        title: 'Junior Software Engineer',
        achievements: [
            'Architected and deployed a scalable data portal using React (TypeScript) with Redux state management and Spring Boot backend featuring RESTful APIs and Hibernate ORM, resulting in 30% improvement in data retrieval time.',
        ],
        skill: ['React', 'Spring Boot', 'Docker'],
    },
] as ExperienceProps[]

export { educationData, experienceData, projectData, skillData }
