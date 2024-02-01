import heroBg from '@/assets/images/hero-pattern.png'
import { Header } from '@/components/header'
import { Table } from '@/components/table'
import { Total } from '@/components/total'

const StatsPage = () => (
    <>
        <img className='w-screen h-screen fixed -z-10 top-0' src={heroBg} alt='bg' />
        <Header />
        <Total />
        <Table />
    </>
)

export default StatsPage
