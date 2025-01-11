function AboutMe() {
    const highlight = (text: string) => (
        <span className='text-white font-medium'>{text}</span>
    )

    return (
        <div className='max-w-4xl w-full p-8 rounded-xl backdrop-blur-sm border-zinc-800'>
            <h1 className='text-4xl font-bold mb-8 text-white text-left bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent'>
                About Me
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='prose prose-invert max-w-none text-zinc-400 text-left space-y-6'>
                    <p className='text-sm leading-relaxed'>
                        I'm Phuc Hung Nguyen, a {highlight('software')} and{' '}
                        {highlight('data engineer')} based in Ontario, Canada. I
                        specialize in {highlight('full-stack development')},{' '}
                        {highlight('cloud computing')}, and{' '}
                        {highlight('data pipelines')}. I'm passionate about
                        building {highlight('scalable')},{' '}
                        {highlight('efficient systems')} and enjoy tackling
                        complex technical challenges that demand innovative
                        solutions.
                    </p>
                    <p className='text-sm leading-relaxed'>
                        My experience includes developing{' '}
                        {highlight('high-throughput APIs')} and architecting{' '}
                        {highlight('robust data platforms')}. I'm particularly
                        focused on delivering tangible results, such as{' '}
                        {highlight('optimizing performance')}, reducing{' '}
                        {highlight('operational costs')}, and increasing
                        accuracy through {highlight('data-driven')}{' '}
                        applications.
                    </p>
                    <p className='text-sm leading-relaxed'>
                        {highlight('Collaboration')} is central to my work
                        style. I thrive in team environments where I can
                        contribute to shared goals and learn from others. I
                        believe that a collaborative spirit is essential for
                        building great products, and I'm always driven by the
                        positive impact that technology can have.
                    </p>
                </div>
                <div className='rounded-xl p-4 ring-zinc-700/50 overflow-hidden'>
                    <img
                        src='/images/me.JPG'
                        alt='Profile'
                        className='w-full h-full object-cover rounded-lg transition-transform duration-100'
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
