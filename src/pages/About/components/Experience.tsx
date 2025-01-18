import React from 'react'
import { experienceData } from '@/data/about'

function Experience() {
    return (
        <div className='max-w-4xl w-full p-8 rounded-xl backdrop-blur-sm border-zinc-800'>
            <h1 className='text-4xl font-bold mb-8 text-white text-left bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent'>
                Experience
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 text-left'>
                {experienceData.map((item, index) => (
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
