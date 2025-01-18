import { BlogType } from '@/types/blog'
import { CardContent } from '@/components/ui/card'

function BlogOverview({ blogData }: { blogData: BlogType }) {
    return (
        <div className='flex items-center hover:bg-zinc-600 hover:bg-opacity-10 rounded-md w-full'>
            <CardContent className='py-2 px-4 w-full flex items-center'>
                <span className='text-zinc-400 mr-2'>•</span>
                <span className='text-sm text-zinc-500 min-w-[80px]'>
                    {blogData.date}
                </span>
                <span className='text-zinc-600 mx-2'>|</span>
                <h2 className='text-base font-medium text-white tracking-tight truncate'>
                    {blogData.title}
                </h2>
            </CardContent>
        </div>
    )
}

export default BlogOverview
