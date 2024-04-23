//import { Inter } from "next/font/google"; yüklü gelen font
import { roboto, montserrat } from "@/helpers/font";
import "../global.scss";
import { SessionProvider } from "next-auth/react";


//const inter = Inter({ subsets: ["latin"] }); ==> fontun ayarı

export const metadata = {
  title: {
    default: "Cosmo Shop", //metadata sı olmayan sayfalarda bu başlık gözüksün
    template: "%s | Cosmo Shop",//her sayfa için başlıkları ekleyerek göstermiş olacak
  },
  description: "High quality products",
};
//html içinde font variable tanımlayarak uygulamada ulaşılabilir olmasını sağlıyoruz ve scs içerisinde kullancacağız

export default function RootLayout({ children }) {
      return (
        <html lang="en" className={`${roboto.variable} ${montserrat.variable} h-100`}>
            <body
                className={`d-flex flex-column justify-content-between h-100`}>
                <SessionProvider>
                  {children}
                </SessionProvider>
                
                
            </body>
        </html>
        
    );
}

/*
<SessionProvider>
  {children}
</SessionProvider>

uygulamamızda "use client" componentlerde "useSession" hookunu kullanabilmek için bu şeklide sarmallanmalı


*/
