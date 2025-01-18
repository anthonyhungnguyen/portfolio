import { Link, useLocation } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

function Navigation() {
    // const [isDark, setIsDark] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'
    const getGreeting = () => {
        const hour = new Date().getHours()
        if (hour < 12) return 'Good morning'
        if (hour < 18) return 'Good afternoon'
        return 'Good evening'
    }

    return (
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-4xl p-4'>
            <div className='flex items-center gap-4'>
                <Avatar className='h-12 w-12 border border-zinc-800'>
                    <AvatarImage
                        src='/images/avatar.jpg'
                        alt='Profile'
                        className='object-cover object-center'
                    />
                    <AvatarFallback className='bg-zinc-900 text-zinc-400'>
                        CN
                    </AvatarFallback>
                </Avatar>
                <span className='text-zinc-400 hidden sm:block'>
                    {getGreeting()}
                </span>
            </div>
            <nav className='flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 p-1 backdrop-blur-sm'>
                <Button
                    variant='ghost'
                    className={`rounded-full transition-colors ${
                        isHome
                            ? 'text-white bg-zinc-800/50'
                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                    }`}
                    asChild
                >
                    <Link to='/'>About</Link>
                </Button>
                <Button
                    variant='ghost'
                    className={`rounded-full transition-colors relative ${
                        !isHome
                            ? 'text-white bg-zinc-800/50'
                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                    }`}
                    asChild
                >
                    <Link to='/blogs'>
                        Blogs
                        <span className='absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full' />
                    </Link>
                </Button>
            </nav>
        </div>
    )
}

export default Navigation
