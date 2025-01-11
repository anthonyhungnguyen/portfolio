import Navigation from '@/components/Navigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '@/pages/About'
import Blogs from '@/pages/Blogs'
import Footer from '@/components/Footer'
import BackTop from '@/components/BackTop'
import MouseEffect from '@/components/MouseEffect'

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
                    </Routes>
                    <Footer />
                </div>
                <BackTop />
            </div>
        </BrowserRouter>
    )
}

export default App
