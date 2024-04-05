import Footer from '@/components/footer'
import Header from '@/components/header'
import { Container } from 'react-bootstrap'
//header ve footer dashboard layout da gözükmesin diye burada yeni bir klasör yapısı oluşturduk
//artık endpoinler değişecek ve "/main/about" şeklinde olacak bu da istemediğimiz bir durum
//bu durumun önüne geçmek için main in url de gözükmemesi için "route grouping" kullanılır
//grubun tepesindeki klasöre "()" koyulur bu da onun url i etkilememesini sağlar

const MainLayout = ({children}) => {

  return (
    <>
    <Header/>
    <Container className="flex-grow-1">{children}</Container>
    <Footer/>
    </>
  )
}

export default MainLayout