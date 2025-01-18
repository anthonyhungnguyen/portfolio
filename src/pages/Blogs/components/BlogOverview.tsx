import { BlogType } from '@/types/blog'
import { Card, CardContent } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'

function BlogOverview({ blogData }: { blogData: BlogType }) {
    return (
        <Card className='overflow-hidden border-zinc-800 bg-zinc-950/50 hover:bg-zinc-900/50 transition-all duration-300 hover:border-zinc-700'>
            <div className='flex flex-col sm:flex-row'>
                <div className='w-full sm:w-1/3 relative overflow-hidden'>
                    <AspectRatio ratio={4 / 3} className='h-full'>
                        <img
                            src={blogData.image}
                            alt={blogData.title}
                            className='object-cover h-full w-full transition-transform duration-300 hover:scale-105'
                        />
                    </AspectRatio>
                </div>
                <CardContent className='p-6 w-full sm:w-2/3 flex flex-col justify-center'>
                    <h2 className='text-xl font-semibold mb-3 text-white tracking-tight'>
                        {blogData.title}
                    </h2>
                    <p className='text-zinc-300 text-sm leading-relaxed'>
                        {blogData.summary}
                    </p>
                </CardContent>
            </div>
        </Card>
    )
}

export default BlogOverview
