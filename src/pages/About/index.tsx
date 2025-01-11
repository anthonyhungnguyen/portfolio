import AboutMe from '@/pages/About/components/AboutMe'
import Experience from '@/pages/About/components/Experience'
import Education from '@/pages/About/components/Education'
import Project from '@/pages/About/components/Project'

function About() {
    return (
        <div>
            <section id='about'>
                <AboutMe />
            </section>
            <section id='experience'>
                <Experience />
            </section>
            <section id='education'>
                <Education />
            </section>
            <section id='projects'>
                <Project />
            </section>
        </div>
    )
}

export default About
