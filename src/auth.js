import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"


const config = {
    //hangi sağlayıcılar ile auth olsun (google,github,cridential,facebook...)
    providers: [
        GitHub,
        Google,
        Credentials({
            credentials: {
                username: { label: "Username"},
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {//kullancı bilgileri nerde saklanıyorsa kontrol bu aşamada olacak
               const res= await fetch('https://dummyjson.com/auth/login', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(credentials)
                });

                if(!res.ok) return null;
                const user = await res.json();
                return user;

            }
        })
    ],
    //burada roller ve rollerin kullanabileceği kısımlar tanımlanır
    callbacks: { 
        authorized({ request, auth }) {
            console.log("request", request);
            console.log("auth", auth);
            const { pathname } = request.nextUrl;
            
            if (pathname.startsWith("/dashboard")) return !!auth;
            return true;
        },
    },
};
export const { handlers, signIn, signOut, auth } = NextAuth(config);






 //request gitmek istediği sayfa bilgileri
 //auth gideceği sayfaya izninin olup olmadığı bilgisi return true olursa izin var return false olursa izin yok