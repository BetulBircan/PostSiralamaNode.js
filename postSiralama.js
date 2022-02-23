//Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

//Post eleamları tanımlama-Array içerisinde obje kullanarak
const posts = [
    { postName: "Gönderi 1", subject: "Konu 1", text: "Metin 1" },
    { postName: "Gönderi 2", subject: "Konu 2", text: "Metin 2" },
    { postName: "Gönderi 3", subject: "Konu 3", text: "Metin 3" },
    { postName: "Gönderi 4", subject: "Konu 4", text: "Metin 4" }
]

//Postları listeleme: map fonksiyonu ile listeleme işlemi yapıldı.
const listPosts = () => {
    posts.map((post) =>{
        console.log(`${post.postName} ${post.subject}`)
    })
}

//Yeni bir post ekleme:Promise yapısı kullanıldı eğer eklemede bir gecikme yaşanması halinde işlemin aksamaması için ve geriye yine promise döner.
const addPosts = (newPost) => {
    const promise1 = new Promise((resolve,reject) => {
        posts.push(newPost)
        resolve(posts)
        //reject('POSTLAR ALINAMADI.')
    })
    return promise1
}

