import React from 'react'

type ExperienceProps = {
    timeline: string
    companyName: string
    title: string
    achievements: string[]
    skill: string[]
}

function Experience() {
    const data = [
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

    return (
        <div className='max-w-4xl w-full p-8 rounded-xl backdrop-blur-sm border-zinc-800'>
            <h1 className='text-4xl font-bold mb-8 text-white text-left bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent'>
                Experience
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 text-left'>
                {data.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className='text-zinc-500 text-sm tracking-wider font-medium'>
                            {item.timeline}
                        </div>
                        <div className='col-span-3 text-zinc-300 space-y-4'>
                            <div>
                                <div className='text-xl font-bold text-white mb-1'>
                                    {item.companyName}
                                </div>
                                <div className='text-zinc-400 font-medium'>
                                    {item.title}
                                </div>
                            </div>
                            <ul className='list-disc pl-4 space-y-2 text-sm text-zinc-400'>
                                {item.achievements.map((achievement, index) => (
                                    <li key={index} className='leading-relaxed'>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                            <div className='flex flex-wrap gap-2 pt-2'>
                                {item.skill.map((skill, index) => (
                                    <span
                                        key={index}
                                        className='px-3 py-1 bg-zinc-800/50 text-zinc-400 text-xs rounded-full border border-zinc-700/50 hover:border-zinc-600 transition-colors'
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Experience
