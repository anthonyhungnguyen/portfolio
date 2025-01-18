import { blogData } from '@/data/blog'
import Headline from './components/Headline'
import { Link } from 'react-router-dom'

function Blogs() {
    return (
        <div className='flex flex-col items-start justify-start min-h-[60vh] p-8 max-w-2xl mx-auto space-y-2'>
            {blogData
                .sort((blogA, blogB) => (blogA.date > blogB.date ? -1 : 1))
                .map((blog, index) => (
                    <Link to={blog.path} key={index} className='w-full'>
                        <Headline blogData={blog} />
                    </Link>
                ))}
        </div>
    )
}

export default Blogs
