import AboutMe from '@/pages/About/components/AboutMe'
import Experience from '@/pages/About/components/Experience'
import Education from '@/pages/About/components/Education'
import Project from '@/pages/About/components/Project'
import Skills from '@/pages/About/components/Skills'
import { useInView } from '@/hooks/useInView'

function About() {
    const { ref: aboutRef, isInView: aboutIsInView } = useInView({
        threshold: 0.1,
    })
    const { ref: expRef, isInView: expIsInView } = useInView({ threshold: 0.1 })
    const { ref: eduRef, isInView: eduIsInView } = useInView({ threshold: 0.1 })
    const { ref: projRef, isInView: projIsInView } = useInView({
        threshold: 0.1,
    })
    const { ref: skillsRef, isInView: skillsIsInView } = useInView({
        threshold: 0.1,
    })

    return (
        <>
            <section
                ref={aboutRef}
                className={`relative transition-all duration-700 ${
                    aboutIsInView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                }`}
            >
                <AboutMe />
            </section>
            <section
                ref={expRef}
                className={`relative transition-all duration-700 delay-100 ${
                    expIsInView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                }`}
            >
                <Experience />
            </section>
            <section
                ref={eduRef}
                className={`relative transition-all duration-700 delay-200 ${
                    eduIsInView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                }`}
            >
                <Education />
            </section>
            <section
                ref={projRef}
                className={`relative transition-all duration-700 delay-300 ${
                    projIsInView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                }`}
            >
                <Project />
            </section>
            <section
                ref={skillsRef}
                className={`relative transition-all duration-700 delay-400 ${
                    skillsIsInView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                }`}
            >
                <Skills />
            </section>
        </>
    )
}

export default About
