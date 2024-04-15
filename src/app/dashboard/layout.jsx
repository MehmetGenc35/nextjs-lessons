
import DashboardHeader from "@/components/dashboard-header"
import { Col, Container, Nav, Row } from "react-bootstrap"

export const metadata = {//sayfaya özel başlık ve açıklama yazılabilir
  title: "Dashboard",
  description: "Dashboard page",
}


const DashboardLayout = ({children}) => {
  return (
    <>
    <DashboardHeader/>
    <Container  className="flex-grow-1">       
        {children}
    </Container>
    </>
  )
}

export default DashboardLayout