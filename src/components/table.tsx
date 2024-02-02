import { TableRow } from './table-row'
import { ReactComponent as PackmanIcon } from '@/assets/images/packman.svg'

const tableDate = [
    {
        collection: 'Bored Ape Yacht Club',
        wallet: '34vd...4fsd',
        qty: 220
    },
    {
        collection: 'Bored Ape Yacht',
        wallet: '34vd...4fsd',
        qty: 330
    },
    {
        collection: 'Yacht Club',
        wallet: '34vd...4fsd',
        qty: 0
    },
    {
        collection: 'Bored Ape Yacht Club',
        wallet: '34vd...4fsd',
        qty: 4440
    },
    {
        collection: 'Bored Ape Yacht Club',
        wallet: '34vd...4fsd',
        qty: 0
    },
    {
        collection: 'Bored Ape Yacht Club',
        wallet: '34vd...4fsd',
        qty: 0
    },
    {
        collection: 'Bored Ape Yacht Club',
        wallet: '34vd...4fsd',
        qty: 0
    },
    {
        collection: 'Bored Ape Yacht Club',
        wallet: '34vd...4fsd',
        qty: 0
    }
]

export const Table = () => {
    return (
        <section className='mt-10'>
            <div className='flex items-center flex-col max-w-[1000px] mx-auto px-4 text-light'>
                <h2 className='flex items-center gap-x-10 text-4xl text-center'>
                    <PackmanIcon className='-rotate-[24deg] -z-[1]' />
                    top jpeg eaters
                </h2>
                <table className='w-full mt-5'>
                    <thead className='grid grid-cols-[2.5fr_1.5fr_1fr_1fr] gap-x-2 items-center uppercase text-left pl-4'>
                        <th>collection</th>
                        <th>wallet</th>
                        <th>qty</th>
                    </thead>
                    <tbody className='flex flex-col gap-y-5 mt-2'>
                        {tableDate.map((item, i) => (
                            <TableRow key={i} {...item} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
