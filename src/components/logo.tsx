import { ReactComponent as LogoIcon } from '@/assets/images/logo.svg'

export const Logo = () => (
    <a className='flex items-center gap-x-2 text-4xl text-light' href='/'>
        <LogoIcon />
        <span>jpeg</span>{' '}
        <span>
            <span className='text-blue-500'>e</span>
            <span className='text-purple-500'>a</span>
            <span className='text-red-500'>t</span>
            <span className='text-green-500'>e</span>
            <span>r</span>
            <span className='text-yellow-500'>s</span>
        </span>
    </a>
)
