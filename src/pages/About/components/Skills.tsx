function Skills() {
    const skills = {
        'Programming Languages': ['Java', 'Python', 'JavaScript', 'TypeScript'],
        'Cloud & DevOps': ['GCP', 'Docker', 'Kubernetes'],
        Frameworks: ['React', 'Spring Boot', 'FastAPI', 'Tailwind CSS'],
        'Testing & Monitoring': ['JUnit', 'PyTest', 'Prometheus', 'Grafana'],
        'Big Data': ['Kafka', 'PySpark', 'Airflow', 'Hadoop', 'Spark'],
        Databases: ['Redis', 'MySQL', 'ArangoDB', 'BigQuery'],
    }

    return (
        <div className='max-w-4xl w-full p-8 rounded-xl backdrop-blur-sm border-zinc-800'>
            <h1 className='text-4xl font-bold mb-8 text-white text-left bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent'>
                Skills
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                        <h2 className='text-xl font-bold text-white mb-4'>
                            {category}
                        </h2>
                        <div className='flex flex-wrap gap-2'>
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className='px-3 py-1 bg-zinc-800/50 text-zinc-400 text-sm rounded-full border border-zinc-700/50 hover:border-zinc-600 transition-colors'
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
