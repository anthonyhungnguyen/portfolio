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
        axios.get(blogData.content).then((response) => {
            setMarkdown(response.data)
        })
    }, [blogData.content])

    return (
        <div className='max-w-full overflow-x-auto px-8'>
            <Markdown
                className='prose prose-invert flex flex-col max-w-full'
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
