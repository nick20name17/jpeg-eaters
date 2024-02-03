import { ReactComponent as HeartIcon } from '@/assets/images/heart.svg'
import { ReactComponent as PackmanIcon } from '@/assets/images/packman.svg'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export const AboutModal = () => (
    <Dialog>
        <DialogTrigger>about</DialogTrigger>
        <DialogContent className='bg-light p-10 !rounded-3xl text-black max-w-[900px] w-11/12 max-md:p-6'>
            <h2 className='flex items-end justify-center gap-x-8 text-7xl text-center max-md:text-5xl'>
                <PackmanIcon className='rotate-[8deg] w-24 h-24 max-md:w-16 max-md:h-16' />
                about
            </h2>

            <div className='mt-5 flex flex-col gap-y-4 font-secondary text-2xl max-md:text-xl'>
                <p>
                    we are just a bunch of friends playing around. our goal is to get some
                    attention because we love building stuff, figuring out new stuff
                </p>
                <p>
                    in case we see some support from you guys we’ll keep going. in case we
                    won’t we’ll still keep going until we reach that goal.
                </p>
                <p>
                    if you guys would want a discord — we’ll be happy to do that. it would
                    be awesome to have great people around
                </p>
                <HeartIcon className='mt-6 rotate-[10deg] mx-auto w-28 h-28 max-md:hidden' />
            </div>
        </DialogContent>
    </Dialog>
)
