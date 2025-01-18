type ProjectProps = {
    name: string
    link: string
    image: string
    achievement: string
    skill: string[]
}

type SkillProps = {
    [key: string]: string[]
}

type EducationProps = {
    timeline: string
    schoolName: string
    degree: string
    gpa: string
}

type ExperienceProps = {
    timeline: string
    companyName: string
    title: string
    achievements: string[]
    skill: string[]
}

export type { ProjectProps, SkillProps, EducationProps, ExperienceProps }
