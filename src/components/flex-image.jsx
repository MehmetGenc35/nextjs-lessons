import Image from 'next/image'
import React from 'react'

const FlexImage = ({src, alt,width="100%",height="100%"}) => {
  return (
            <div style={{position:"relative", width, height}}>
            <Image src={src} alt={alt} fill style={{objectFit:"cover"}}/>
            </div>
  )
}

export default FlexImage