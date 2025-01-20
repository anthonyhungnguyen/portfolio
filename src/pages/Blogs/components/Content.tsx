import { BlogType } from '@/types/blog'
import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import axios from 'axios'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

function Content({ blogData }: { blogData: BlogType }) {
    const [markdown, setMarkdown] = useState('')
    useEffect(() => {
        axios.get(`/blogs/${blogData.name}.md`).then((response) => {
            setMarkdown(response.data)
        })
    }, [blogData.name])

    return (
        <div className='w-full max-w-4xl overflow-x-auto mx-auto p-8 flex flex-col items-center'>
            <Markdown
                className='prose prose-invert w-full max-w-none flex flex-col'
                remarkPlugins={[[remarkGfm], [remarkToc]]}
                components={{
                    code(props) {
                        const { children, className, ...rest } = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                            <SyntaxHighlighter
                                PreTag='div'
                                children={String(children).replace(/\n$/, '')}
                                language={match[1]}
                                style={dark}
                            />
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        )
                    },
                }}
            >
                {markdown}
            </Markdown>
        </div>
    )
}

export default Content
