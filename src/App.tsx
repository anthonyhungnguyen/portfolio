import Navigation from '@/components/Navigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { blogData } from '@/data/blog'
import About from '@/pages/About'
import Blogs from '@/pages/Blogs'
import Footer from '@/components/Footer'
import BackTop from '@/components/BackTop'
import MouseEffect from '@/components/MouseEffect'
import Content from './pages/Blogs/components/Content'

function App() {
    return (
        <BrowserRouter>
            <MouseEffect />
            <div className='container mx-auto flex justify-center gap-8 pt-8 min-h-[70vh] flex-col items-center'>
                <Navigation />
                <Routes>
                    <Route path='/' element={<About />} />
                    <Route path='/blogs' element={<Blogs />} />
                    {blogData.map((blog, index) => (
                        <Route
                            key={index}
                            path={blog.path}
                            element={<Content blogData={blog} />}
                        />
                    ))}
                </Routes>
                <Footer />
                <BackTop />
            </div>
        </BrowserRouter>
    )
}

export default App
