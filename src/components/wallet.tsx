import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import { cn } from '@/utils/cn'

interface CardProps {
    price: number
    title: string
    name: string
}

const cardData = [
    {
        price: 42,
        title: 'wallet',
        name: 'wallet1'
    },
    {
        price: 42,
        title: 'wallet',
        name: 'wallet2'
    },
    {
        price: 42,
        title: 'wallet',
        name: 'wallet3'
    }
]

export const Wallet = () => {
    const modalRef = useRef(null)
    const [open, setOpen] = useState(false)

    const handleClose = () => setOpen(false)

    const toggleOpen = () => setOpen((prev) => !prev)

    useOnClickOutside(modalRef, handleClose)

    console.log('open', open)

    return (
        <article className='relative'>
            <span onClick={toggleOpen}>eater-wallet</span>
            <div
                ref={modalRef}
                className={cn(
                    'absolute opacity-0 transition-opacity top-10 right-0 w-[420px] shadow-[8px_8px_0px_0px_#eeeed1] min-h-[488px] bg-black border-light border p-5 rounded-3xl text-black max-md:p-6',
                    open && 'opacity-100'
                )}>
                <div className='flex items-end justify-center gap-x-8 text-light text-4xl  text-center '>
                    /home
                </div>
                <h1 className='text-center text-light text-9xl mt-3 leading-none'>42</h1>
                <div className='flex items-center justify-between text-accent w-48 mx-auto text-3xl -mt-4'>
                    <span>+4.20 </span>
                    <span>+4.2%</span>
                </div>
                <div className='flex flex-col gap-y-4 mt-4'>
                    {cardData.map((card) => (
                        <WalletCard key={card.name} {...card} />
                    ))}
                </div>
                <div className='rounded-full border-4 border-black bg-light'></div>
            </div>
        </article>
    )
}

const WalletCard: React.FC<CardProps> = ({ name, price, title }) => (
    <div className='p-4 border-2 border-light rounded-xl bg-neutral-900 text-light'>
        <div className='flex items-center justify-between gap-x-2 text-2xl'>
            <h2>
                <span className='text-accent'>+{price}</span> sol
            </h2>
            <span>{'->'}</span>
            <div className='uppercase'>{name}</div>
        </div>
        <div>{title}</div>
    </div>
)
