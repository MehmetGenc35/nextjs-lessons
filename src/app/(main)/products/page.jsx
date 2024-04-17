import PageHeader from '@/components/page-header'
import ProductList from '@/components/product-list';
import { config } from '@/helpers/config';

//!fetch işlemleri server side componentlerde yapılmalı
//!use client ile işaretlenmiş componentlerde fetch yapılırsa bu işi browser yapar ve tavsiye edilmez
//!server da fetch yaptığımızda uygulmaa build edildiğinde veri bende mevcut hale geliyor
//!genelde fetch işlemi page seviyesinde yapılıyor

export const metadata = {//sayfaya özel başlık ve açıklama yazılabilir
  title: "Products",
  description: "About our services",
}

const ProductsPage = async() => {//react da async yapamıyorduk nextjs ile component asysnc olabiliyor

  const resp= await fetch(`${config.apiURL}/products`);
  const products = await resp.json();
  //react da useEffect kullanmak gerekiyordu
  //nextjs server side component olduğu için tekrar rerender olmak gibi bir durum söz konusu değil
  

  return (
    <div>
          <PageHeader title="Products"/>
          <ProductList products={products}/>
    </div>

    
  )
}

export default ProductsPage