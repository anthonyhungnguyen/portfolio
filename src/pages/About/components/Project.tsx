type ProjectProps = {
    name: string
    link: string
    image: string
    achievement: string
    skill: string[]
}

function Project() {
    const data = [
        {
            name: 'Text2Diagram',
            link: 'https://github.com/anthonyhungnguyen/Text2Diagram',
            image: '/images/projects/text2diagram.png',
            achievement:
                'Created "Text2Diagram," a React.js and Spring Boot application that converts text-based UML diagrams into visual diagrams, saving developers 50% of time spent on manual diagram creation. Deployed on AWS ECS and Amplify with CI/CD pipeline.',
            skill: [
                'React',
                'Spring Boot',
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
            skill: [
                'React',
                'Spring Boot',
                'Docker',
                'Mongodb',
                'MySQL',
                'Redis',
            ],
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

    return (
        <div className='max-w-4xl w-full p-8 rounded-xl backdrop-blur-sm border-zinc-800'>
            <h1 className='text-4xl font-bold mb-8 text-white text-left bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent'>
                Projects
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {data.map((project, index) => (
                    // Update the project card container
                    <a
                        key={index}
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-700'
                    >
                        <div className='aspect-video overflow-hidden'>
                            <img
                                src={project.image}
                                alt={project.name}
                                className='object-fit w-full h-full transition-transform duration-300 group-hover:scale-105'
                            />
                        </div>
                        <div className='p-6 space-y-4'>
                            <h3 className='text-xl font-bold text-white group-hover:text-zinc-300 transition-colors'>
                                {project.name}
                            </h3>
                            <p className='text-sm text-zinc-400 leading-relaxed'>
                                {project.achievement}
                            </p>
                            <div className='flex flex-wrap gap-2'>
                                {project.skill.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className='px-3 py-1 bg-zinc-800/50 text-zinc-400 text-xs rounded-full border border-zinc-700/50'
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Project
