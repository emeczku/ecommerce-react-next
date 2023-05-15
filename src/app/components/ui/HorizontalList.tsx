import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sneaker } from '@/types'

interface HorizontalListProps {
  heading: string
  items: Sneaker[]
}

const HorizontalList: FC<HorizontalListProps> = ({ heading, items }) => {
  return (
    <div className={'m-4'}>
      <h3 className={'font-medium text-lg mb-5'}>{heading}</h3>
      <div className={'grid grid-cols-6 gap-6'}>
        {items.map((item: Sneaker, index: number) => {
          return (
            <div
              key={index}
              className={'pl-4 pr-4 pt-10 pb-10 border border-gray-200'}>
              <Image src={item.image} alt={item.name} width={140} height={75} />
              <Link
                href={item.name}
                className={'text-sm text-truncate max-h-3'}>
                {item.name}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HorizontalList
