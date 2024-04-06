"use client"
import { Carousel } from 'react-bootstrap'
import slider from '@/helpers/data/slider.json'
import styles from "./slider.scss"

const Slider = () => {
  return (
    <Carousel>
    
      {slider.map((item) => (
      <Carousel.Item key={item.id}>
        <div className={styles.slide}>
            <Image src={`/img/${item.fileName}`} alt="slider" fill
            style={{objectFit:"cover"}} />
        </div>
      </Carousel.Item>          
      ))}  


    </Carousel>
  )
}

export default Slider