import { Link, useLocation } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

function Navigation() {
    // const [isDark, setIsDark] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <div className='flex items-center justify-between gap-4 w-full max-w-4xl p-4'>
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
                    className={`rounded-full transition-colors ${
                        !isHome
                            ? 'text-white bg-zinc-800/50'
                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                    }`}
                    asChild
                >
                    <Link to='/blogs'>Blogs</Link>
                </Button>
            </nav>
            {/* <Button
                variant='ghost'
                size='icon'
                className='text-zinc-400 hover:text-white rounded-full'
                onClick={() => setIsDark(!isDark)}
            >
                {isDark ? (
                    <Sun className='h-5 w-5' />
                ) : (
                    <Moon className='h-5 w-5' />
                )}
            </Button> */}
        </div>
    )
}

export default Navigation
