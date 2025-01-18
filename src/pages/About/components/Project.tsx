import { projectData } from '@/data/about'

function Project() {
    return (
        <div className='max-w-4xl w-full p-8 rounded-xl backdrop-blur-sm border-zinc-800'>
            <h1 className='text-4xl font-bold mb-8 text-white text-left bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent'>
                Projects
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {projectData.map((project, index) => (
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
