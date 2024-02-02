import { useState } from 'react'

import { MatrixBackground } from './matrix-bg'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export const SecretPanel = () => {
    const [password, setPassword] = useState('')

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value)

    return (
        <Dialog>
            <DialogTrigger>secret panel</DialogTrigger>
            <DialogContent className='overflow-hidden border-8 border-light p-10 !rounded-[40px] text-black max-w-[900px] max-[540px]:h- h-[400px] w-11/12 max-md:p-6'>
                <MatrixBackground key='matrix' timeout={30} />

                <form
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-md:w-11/12 '
                    autoComplete='off'>
                    <input
                        onChange={handlePasswordChange}
                        value={password}
                        className='bg-black p-5 outline-none text-light text-6xl border-light border-2 w-full max-md:text-4xl max-[540px]:text-2xl max-[540px]:p-2 max-md:p-4 rounded-2xl≈ placeholder:text-light/50'
                        type='password'
                        placeholder='Enter password'
                    />
                </form>
            </DialogContent>
        </Dialog>
    )
}
