import { blogData } from '@/data/blog'
import BlogOverview from './components/BlogOverview'
import { Link } from 'react-router-dom'

function Blogs() {
    return (
        <div className='flex flex-col items-center justify-center min-h-[60vh] text-center p-8'>
            {blogData.map((blog, index) => (
                <Link to={blog.path} key={index}>
                    <BlogOverview blogData={blog} />
                </Link>
            ))}
        </div>
    )
}

export default Blogs
