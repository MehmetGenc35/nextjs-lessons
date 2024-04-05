"use client";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu.json";
import { usePathname, useSearchParams } from "next/navigation";
const Header = () => {
    //mevcut sayfanın URL'sindeki yol bilgisini döndürür. Bu sayede, sayfa içerisinde hangi 
    //yolun aktif olduğunu anlamak ve buna göre belirli işlemler yapmak için kullanılabilir.
    //!!!const pathName=usePathname();
    //browser tarafında url i sürekli takip eder
    //server tarafında ise sadece ilk render da gözüküür

    //url deki query stringlere ulaşmak için kullanılır
    //!!!const searchParams= useSearchParams(); /contact?id=1&name=ahmet&surname=yılmaz
    //searchParams.get('id') ==> 1
    //searchParams.get('name') ==> ahmet
    //searchParams.get('surname') ==> yılmaz

    const pathName=usePathname();
    //active={pathName===item.url} ==> tıklanan sayfayı aktif etmek için kullanılır
    //active={true} yapmış olsak hepsi aktif olur


    //className="order-2"==> öğelerin gösterim sırasını belirlemek için kullanılır


    return (
        <Navbar
            expand="lg"
            className="bg-dark"
            data-bs-theme="dark"
            collapseOnSelect
        >
            <Container>
                <Navbar.Brand href="/" as={Link}>TechnoShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {menuItems.map((item) => (
                            <Nav.Link href={item.url} as={Link} key={item.id}
                            active={pathName===item.url}>
                                {item.title}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
                <Link href="/dashboard">Dashboard</Link>
            </Container>
        </Navbar>
    );
};
export default Header;
