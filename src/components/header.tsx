import { AboutModal } from './about-modal'
import { Logo } from './logo'
import { SecretPanel } from './secret-panel'
import { Wallet } from './wallet'

export const Header = () => (
    <header className='flex justify-between flex-wrap gap-5 items-center px-5 py-3'>
        <Logo />
        <nav>
            <ul className='flex items-center gap-y-3 flex-wrap gap-x-14 text-light [&>li]:cursor-pointer justify-center'>
                <li>
                    <a href='/'>stats</a>
                </li>
                <li>
                    <SecretPanel />
                </li>
                <li className='pointer-events-none'>
                    mint <span className='text-accent'>(soon)</span>
                </li>
                <li>
                    <AboutModal />
                </li>
                <li>
                    <Wallet />
                </li>
            </ul>
        </nav>
    </header>
)
