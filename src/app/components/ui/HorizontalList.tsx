import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sneaker } from '@/types'
import styles from '@/styles/HorizontalList.module.scss'

interface HorizontalListProps {
  heading: string
  items: Sneaker[]
}

const HorizontalList: FC<HorizontalListProps> = ({ heading, items }) => {
  return (
    <div className={'mt-5 mb-5 mx-auto max-w-screen-xl'}>
      <h3 className={'font-medium text-lg m-3'}>{heading}</h3>
      <div className={styles.container}>
        {items.map((item: Sneaker, index: number) => {
          return (
            <div key={index} className={styles.item}>
              <Image
                src={item.image}
                alt={item.name}
                className={styles.image}
                width={140}
                height={80}
              />
              <Link href={item.name} className={styles.link}>
                {item.name}
              </Link>
              <span className={styles.price}>${item.price}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HorizontalList
