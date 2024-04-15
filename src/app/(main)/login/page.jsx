import PageHeader from '@/components/page-header'

export const metadata = {//sayfaya özel başlık ve açıklama yazılabilir
  title: "Login",
  description: "About our services",
}

const LoginPage = () => {
  return (
    <div>
      <PageHeader title="Login Page"/>
    </div>
  )
}

export default LoginPage