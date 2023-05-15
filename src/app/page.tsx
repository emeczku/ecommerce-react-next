import Navbar from '@/components/Navbar'
import { FC } from 'react'
import HorizontalList from '@/components/ui/HorizontalList'
import sneakers from '@/data/sneakers'

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <HorizontalList heading="Trending Sneakers" items={sneakers} />
    </>
  )
}

export default Home
