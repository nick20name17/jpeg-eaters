import { createElement } from 'react'

import { ReactComponent as HomeIcon } from '@/assets/images/home.svg'
import { ReactComponent as HourglassIcon } from '@/assets/images/hourglass.svg'
import pic from '@/assets/images/jee.jpg'
import { ReactComponent as NftIcon } from '@/assets/images/nft.svg'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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

const tabs = [
    {
        name: 'home',
        icon: <HomeIcon />,
        disabled: false
    },
    {
        name: 'nfts',
        icon: <NftIcon />,
        disabled: false
    },
    {
        name: 'some',
        icon: <HourglassIcon />,
        disabled: true
    },
    {
        name: 'some2',
        icon: <HourglassIcon />,
        disabled: true
    }
]

export const Wallet = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>eater-wallet</DropdownMenuTrigger>
            <DropdownMenuContent className='overflow-visible relative mr-5 w-[390px] shadow-[8px_8px_0px_0px_#eeeed1] h-[520px]  bg-black border-light border p-4 rounded-3xl text-black max-md:p-6'>
                <Tabs defaultValue='home'>
                    <TabsList className='px-2 flex items-center justify-between gap-x-2 absolute -bottom-8 z-10 left-1/2 -translate-x-1/2 rounded-full border-4 border-black bg-light h-16'>
                        {tabs.map((tab) => (
                            <TabsTrigger
                                className={cn(
                                    'flex items-center justify-center bg-black/10  text-black data-[state=active]:bg-black data-[state=active]:text-light border border-black rounded-full w-11 h-11',
                                    tab.disabled && '!opacity-30'
                                )}
                                key={tab.name}
                                disabled={tab.disabled}
                                value={tab.name}>
                                {createElement(tab.icon.type, {
                                    className: cn('w-6 h-6 [&path]:fill-currentt')
                                })}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <TabsContent value='home'>
                        <div className='flex items-end justify-center gap-x-8 text-light text-3xl  text-center '>
                            /home
                        </div>
                        <h1 className='text-center text-light text-8xl mt-2 leading-none'>
                            42
                        </h1>
                        <div className='flex items-center justify-between text-accent w-48 mx-auto text-3xl -mt-4'>
                            <span>+4.20 </span>
                            <span>+4.2%</span>
                        </div>
                        <div className='flex flex-col gap-y-4 mt-3'>
                            {cardData.map((card) => (
                                <WalletCard key={card.name} {...card} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value='nfts'>
                        <div className='flex items-end justify-center gap-x-8 text-light text-3xl text-center '>
                            /my nfts
                        </div>

                        <div className='mt-4 grid gap-2 grid-cols-[repeat(3,110px)] justify-between'>
                            {Array.from({ length: 9 }).map((_, i) => (
                                <div
                                    key={i}
                                    style={{ backgroundImage: `url(${pic})` }}
                                    className='relative bg-center bg-cover border-light border-2 h-28 rounded-lg'>
                                    <div className='absolute bottom-1 left-1 uppercase leading-none shadow-[2.5px_2.5px_0px_0px_black] h-[18px] text-light text-xs p-1 bg-black border border-light rounded-sm '>
                                        Jee
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </DropdownMenuContent>
        </DropdownMenu>
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
