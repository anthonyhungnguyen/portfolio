import { BlogType } from '@/types/blog'

function BlogOverview({ blogData }: { blogData: BlogType }) {
    return (
        <div className='flex items-center hover:bg-zinc-800 rounded-md'>
            <span className='text-sm text-zinc-500 min-w-[80px]'>
                {blogData.date}
            </span>
            <span className='text-zinc-600 mx-2'>|</span>
            <h2 className='text-white '>{blogData.title}</h2>
        </div>
    )
}

export default BlogOverview
