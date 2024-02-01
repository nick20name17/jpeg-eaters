import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import { ReactComponent as HeartIcon } from '@/assets/images/heart.svg'
import { ReactComponent as PackmanIcon } from '@/assets/images/packman.svg'
import { cn } from '@/utils/cn'

export const AboutModal = () => {
    const modalRef = useRef(null)
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useOnClickOutside(modalRef, handleClose)
    return (
        <>
            <span onClick={handleOpen}>about</span>
            <div
                className={cn(
                    'fixed bg-black/60 inset-0 pointer-events-none invisible transition-opacity opacity-0',
                    open && 'pointer-events-auto visible opacity-100'
                )}>
                <div
                    ref={modalRef}
                    className={cn(
                        'absolute opacity-0 transition-opacity top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light p-10 rounded-3xl text-black max-w-[900px] w-11/12 max-md:p-6',
                        open && 'opacity-100'
                    )}>
                    <h2 className='flex items-end justify-center gap-x-8 text-7xl text-center max-md:text-5xl'>
                        <PackmanIcon className='rotate-[8deg] w-24 h-24 max-md:w-16 max-md:h-16' />
                        about
                    </h2>

                    <div className='mt-5 flex flex-col gap-y-4 font-secondary text-2xl max-md:text-xl'>
                        <p>
                            we are just a bunch of friends playing around. our goal is to
                            get some attention because we love building stuff, figuring
                            out new stuff
                        </p>
                        <p>
                            in case we see some support from you guys we’ll keep going. in
                            case we won’t we’ll still keep going until we reach that goal.
                        </p>
                        <p>
                            if you guys would want a discord — we’ll be happy to do that.
                            it would be awesome to have great people around
                        </p>
                    </div>
                    <HeartIcon className='mt-6 rotate-[10deg] mx-auto w-28 h-28 max-md:hidden' />
                </div>
            </div>
        </>
    )
}
