/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
            {
        protocol: 'https',
        hostname: 'loremflickr.com',
      }
    ],
  },
};

export default nextConfig;

//https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-[…]-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

//bu siteden harici bir foto yükleyeceğimiz için bu dosyada config ayarı yaptık
//bu ayarlar yapılmazsa hata veriyor
