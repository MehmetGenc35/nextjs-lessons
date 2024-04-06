import { wait } from '@/helpers/misc';
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import natureImg from '../../../public/img/nature.jpg'
import PageHeader from '@/components/page-header';
const AboutPage = async() => {

  //bu sayfa yüklenirken  3sn gecikecek
  await wait(3000);

  //<Image scr="/img/landscape.jpg" alt="image" width={400} height={300} />
  //nextjs image tag de height ve width vermek zorunlu
  //optimizaysonlarını otomatik yapıyor

  //<Image src={natureImg} alt="image"/>
  //import ile resmi aldığımızda width ve heigth vermemize gerek yok
  //remin orjinal boyutu ile gelir bunu engllemek için bootstrap in "image-fluid" kullanılabilir bulunudğu yere oturur

  return (
    <div>
      <PageHeader title="About Us"/>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <Image scr="/img/landscape.jpg" alt="landscape" width={400} height={300} />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <Image scr="/img/iwatch.png" alt="iwatch" width={400} height={300} />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <Image src={natureImg} alt="nature"/>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <Image src="https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-[…]-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='pexels-photo-16039120' width={400} height={300} />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
       <div style={{ position: "relative", width: "100%", height: "200px" }}>
                <Image
                    src="/images/nature.jpg"
                    alt="..."
                    fill
                    style={{ objectFit: "cover" }}
                />
        </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quia obcaecati omnis quasi. In officiis eligendi pariatur velit, culpa quaerat, optio ad animi deserunt odit repellendus, deleniti explicabo mollitia quo.</p>
      <Link href="/contact" scroll={false}>Go to contact page</Link>
    </div>
  )
}
export default AboutPage