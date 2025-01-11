import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import dayjs from 'dayjs'

function Footer() {
    return (
        <footer className='max-w-4xl w-full p-8 flex items-center justify-between border-t border-zinc-800'>
            <div className='text-sm text-zinc-400'>
                © {dayjs().year()} Phuc Hung Nguyen. All rights reserved.
            </div>
            <div className='flex gap-4'>
                <Button
                    variant='ghost'
                    size='icon'
                    className='text-zinc-400 hover:text-white rounded-full'
                    asChild
                >
                    <a
                        href='mailto:anthonyhungnguyen276@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Mail className='h-5 w-5' />
                    </a>
                </Button>
                <Button
                    variant='ghost'
                    size='icon'
                    className='text-zinc-400 hover:text-white rounded-full'
                    asChild
                >
                    <a
                        href='https://github.com/anthonyhungnguyen'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Github className='h-5 w-5' />
                    </a>
                </Button>
                <Button
                    variant='ghost'
                    size='icon'
                    className='text-zinc-400 hover:text-white rounded-full'
                    asChild
                >
                    <a
                        href='https://www.linkedin.com/in/anthonynguyen276/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Linkedin className='h-5 w-5' />
                    </a>
                </Button>
            </div>
        </footer>
    )
}

export default Footer
