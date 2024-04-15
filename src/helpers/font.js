import {Roboto, Montserrat_Subrayada} from "next/font/google" //import fontları ayarlanıyor

//import edilen sontların ayarlamalarını yapıyoruz

const roboto= Roboto({
    weight: ["400", "500"], 
    subsets: ["latin"],//dil ailesi desteği
    variable: "--font-roboto",//css dosyalarından erişilebilir olması için variable oluşturduk
}) 


const montserrat= Montserrat_Subrayada({
    weight: ["700"], 
    subsets: ["latin"],
    variable: "--font-montserrat-subrayada",
}) 


//fontları export ediyoruz

export {roboto, montserrat}