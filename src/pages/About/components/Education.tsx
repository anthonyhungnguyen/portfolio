import React from 'react'
import { educationData } from '@/data/about'
function Education() {
    return (
        <div className='max-w-4xl w-full p-8 rounded-xl backdrop-blur-sm border-zinc-800'>
            <h1 className='text-4xl font-bold mb-8 text-white text-left bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent'>
                Education
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 text-left'>
                {educationData.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className='text-zinc-500 text-sm tracking-wider font-medium'>
                            {item.timeline}
                        </div>
                        <div className='col-span-3 text-zinc-300 space-y-4'>
                            <div>
                                <div className='text-xl font-bold text-white mb-1'>
                                    {item.schoolName}
                                </div>
                                <div className='text-zinc-400 font-medium'>
                                    {item.degree}
                                </div>
                                <div className='text-zinc-500 text-sm mt-1'>
                                    GPA: {item.gpa}
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Education
