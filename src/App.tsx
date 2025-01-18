import Navigation from '@/components/Navigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { blogData } from '@/data/blog'
import About from '@/pages/About'
import Blogs from '@/pages/Blogs'
import Footer from '@/components/Footer'
import BackTop from '@/components/BackTop'
import MouseEffect from '@/components/MouseEffect'
import BlogDetails from './pages/Blogs/components/BlogDetails'

function App() {
    return (
        <BrowserRouter>
            <MouseEffect />
            <div className='container mx-auto flex justify-center gap-8 pt-8 min-h-screen'>
                <div className='flex-1 max-w-4xl flex flex-col items-center gap-8'>
                    <Navigation />
                    <Routes>
                        <Route path='/' element={<About />} />
                        <Route path='/blogs' element={<Blogs />} />
                        {blogData.map((blog, index) => (
                            <Route
                                key={index}
                                path={blog.path}
                                element={<BlogDetails blogData={blog} />}
                            />
                        ))}
                    </Routes>
                    <Footer />
                </div>
                <BackTop />
            </div>
        </BrowserRouter>
    )
}

export default App
