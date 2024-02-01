import { ReactComponent as PackmanIcon } from '@/assets/images/packman.svg'

interface Props {
    collection: string
    wallet: string
    qty: number
}

export const TableRow: React.FC<Props> = ({ collection, qty, wallet }) => {
    return (
        <tr className='even:bg-light/15 grid grid-cols-[2.5fr_1.5fr_1fr_1fr] gap-x-2 items-center uppercase text-light px-4 h-[66px] border-light border-2 rounded-xl w-full'>
            <td>{collection}</td>
            <td>{wallet}</td>
            <td className='ml-3'>{qty}</td>
            <td className='flex items-center gap-x-2 justify-end'>
                <PackmanIcon className='h-7 w-7' />
                <PackmanIcon className='h-7 w-7' />
                <PackmanIcon className='h-7 w-7' />
            </td>
        </tr>
    )
}
