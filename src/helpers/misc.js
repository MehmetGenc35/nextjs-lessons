//dosya yapmaya değmeyecek funksiyonlar için oluşturulur

export const wait = (time) =>
    new Promise((resolve) => setTimeout(resolve, time));