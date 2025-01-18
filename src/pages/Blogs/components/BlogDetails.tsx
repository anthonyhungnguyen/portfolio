import { BlogType } from '@/types/blog'
import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import axios from 'axios'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

function BlogDetails({ blogData }: { blogData: BlogType }) {
    const [markdown, setMarkdown] = useState('')
    useEffect(() => {
        axios.get(blogData.content).then((response) => {
            setMarkdown(response.data)
        })
    }, [blogData.content])

    return (
        <div className="px-4 md:px-0">
            <Markdown
                className='prose prose-invert prose-pre:overflow-x-auto max-w-none md:max-w-full prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800 prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-a:text-blue-400 prose-strong:text-zinc-200 prose-code:text-zinc-200 prose-ul:text-zinc-300 prose-li:marker:text-zinc-500'
                remarkPlugins={[[remarkGfm], [remarkToc, { tight: true }]]}
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
                                customStyle={{
                                    background: 'transparent',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    margin: '1.5rem 0',
                                }}
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

export default BlogDetails
