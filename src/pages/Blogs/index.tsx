import { blogData } from '@/data/blog'
import Headline from './components/Headline'
import { Link } from 'react-router-dom'

function Blogs() {
    return (
        <div className='flex flex-col min-h-[70vh] px-4'>
            {blogData
                .sort((blogA, blogB) => (blogA.date > blogB.date ? -1 : 1))
                .map((blog, index) => (
                    <Link to={blog.path} key={index}>
                        <Headline blogData={blog} />
                    </Link>
                ))}
        </div>
    )
}

export default Blogs
