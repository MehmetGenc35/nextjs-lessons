
import DashboardMenu from "@/components/dashboard-menu"
import { Col, Container, Nav, Row } from "react-bootstrap"


const DashboardLayout = ({children}) => {
  return (
    <Container>
        <Row>
            <Col md={3}>
                <DashboardMenu/>
            </Col>
            <Col md={9}>
                {children}
            </Col>
        </Row>
    </Container>
  )
}

export default DashboardLayout