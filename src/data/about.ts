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
        skill: [
            'React',
            'FastAPI',
            'Docker',
            'AWS',
            'AWS Amplify',
            'AWS ECS',
            'AWS Load Balancer',
        ],
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
    'Testing & Monitoring': ['JUnit', 'PyTest', 'Prometheus', 'Grafana'],
    'Big Data': ['Kafka', 'PySpark', 'Airflow', 'Hadoop', 'Spark'],
    Databases: ['Redis', 'MySQL', 'ArangoDB', 'BigQuery'],
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
            'Architected and implemented a big data platform, migrating from legacy systems and achieving a 30% cost reduction through optimized resource utilization.',
            'Developed a high-throughput API service using FastAPI to process real-time parcel scan data, capable of handling thousands of requests per second.',
            'Engineered a robust Change Data Capture (CDC) pipeline using Kafka Connect and Debezium to stream data from MongoDB to a data lake, leveraging Apache Iceberg for efficient and scalable storage and management.',
            'Achieved 95% data consistency in the data lake by designing and implementing a multi-stage data quality validation process integrated into the ingestion pipeline.',
        ],
        skill: [
            'Python',
            'FastAPI',
            'Kafka',
            'Debezium',
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
            'Developed a centralized data integration platform using Airflow, Spark, and JupyterHub that simplified data access and improved cross- team collaboration by creating reusable ETL pipelines, resulting in a 60% reduction in data retrieval time and an 80% increase in development efficiency.',
            'Developed a data-driven application that significantly improved bad actor identification by integrating multiple data sources from different businesses, such as Payment, Billing, and Telco, into ArangoDB, enabling users to visualize and query complex relationships and patterns using graph traversal queries, resulting in a 50% increase in identification accuracy.',
            'Designed and deployed a real-time machine learning service optimized for low latency and high throughput. Achieved less than 100ms latency per batch at peak load and a 70% processing speed improvement through the use of multi-worker and asynchronous processing.',
        ],
        skill: [
            'Airflow',
            'Spark',
            'JupyterHub',
            'ArangoDB',
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
        title: 'Fresher',
        achievements: [
            'Developed a comprehensive data portal with a user-friendly frontend React and a robust backend Spring Boot, resulting in a 30% improvement in data retrieval time for internal teams.',
        ],
        skill: ['React', 'Spring Boot', 'Docker'],
    },
] as ExperienceProps[]

export { projectData, skillData, educationData, experienceData }
