import { blogData } from '@/data/blog'
import Headline from './components/Headline'
import { Link } from 'react-router-dom'

function Blogs() {
    return (
        <div className='flex flex-col min-h-[70vh] p-8 gap-4'>
            {blogData
                .sort((blogA, blogB) => (blogA.date > blogB.date ? -1 : 1))
                .map((blog, index) => (
                    <Link to={`/blogs/${blog.name}`} key={index}>
                        <Headline blogData={blog} />
                    </Link>
                ))}
        </div>
    )
}

export default Blogs
