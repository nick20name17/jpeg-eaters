import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import { MatrixBackground } from './matrix-bg'
import { cn } from '@/utils/cn'

export const SecretPanel = () => {
    const modalRef = useRef(null)
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useOnClickOutside(modalRef, handleClose)

    const [password, setPassword] = useState('')

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value)

    return (
        <>
            <span onClick={handleOpen}>secret panel</span>
            <div
                className={cn(
                    'fixed bg-black/60 inset-0 pointer-events-none invisible transition-opacity opacity-0',
                    open && 'pointer-events-auto visible opacity-100'
                )}>
                <div
                    ref={modalRef}
                    className={cn(
                        'absolute overflow-hidden opacity-0 transition-opacity border-light border-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 rounded-3xl text-black max-w-[900px] max-[540px]:h- h-[400px] w-11/12 max-md:p-6',
                        open && 'opacity-100'
                    )}>
                    <MatrixBackground key='matrix' timeout={30} />

                    <form
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-md:w-11/12 '
                        autoComplete='off'>
                        <input
                            onChange={handlePasswordChange}
                            value={password}
                            className='bg-black p-5 outline-none text-light text-6xl border-light border-2 w-full max-md:text-4xl max-[540px]:text-2xl max-[540px]:p-2 max-md:p-4 rounded-lg placeholder:text-light/50'
                            type='password'
                            placeholder='Enter password'
                        />
                    </form>
                </div>
            </div>
        </>
    )
}
