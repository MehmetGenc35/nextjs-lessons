"use client";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu.json";
import { usePathname, useSearchParams } from "next/navigation";
import logo from "../../public/img/logo.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
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



    //!SESSİON A ULAŞMA
    const { data: session } = useSession();
    //userın login olup olmadığı bilgisine ulasmak için kullanılır
    //data içindeki keywordun ismi biz onu session ismiyle kullanmak için data:session şeklinde kullandık

    return (
        <Navbar
            expand="lg"
            className="bg-dark"
            data-bs-theme="dark"
            collapseOnSelect
        >
            <Container>
                <Navbar.Brand href="/" as={Link}>
                    <Image 
                    src={logo} 
                    alt="logo" 
                    className="img-fluid"
                    style={{height:"30px",width:"auto"}} />
                </Navbar.Brand>


                {session ? (
                    <Link
                        href="/dashboard"
                        className="order-lg-2 nav-link text-light"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <Link
                        href="/api/auth/signin"
                        className="order-lg-2 nav-link text-light"
                    >
                        Login
                    </Link>
                )}


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

            </Container>
        </Navbar>
    );
};
export default Header;
