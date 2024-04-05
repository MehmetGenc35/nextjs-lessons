
import DashboardHeader from "@/components/dashboard-header"
import DashboardMenu from "@/components/dashboard-menu"
import { Col, Container, Nav, Row } from "react-bootstrap"


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