# PostSiralamaNode.js

Bu projenin amacı oluşturduğumuz postlarla birlikte eklediğimiz postları da listelemek ve bunu console ekranında yazdırmak. Bunu da node.js ile geliştirdim.

```
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

//eklenen kitapla birlikte postların sıralı bir şekilde listelenmesi-Pluşturulam promise i karşılayabilmesi için async-await yapısı kullanıldı. Async-await yapısının tercih edilmesinin sebebi bu örnekteki asenkron yapıda olan işlemleri keskin sıralı bir şekilde listeleyebilmesi için hem de yazımı daha kolay olduğu için:

async function showPosts() {
    try {  //Resolve kısmı çalışır yani olumlu olması durumunda
        //await dediğimizde posttaki ekleme işlemi bitmeden listeleme işlemine geçmesini önlemiş oluruz yani işlemin bitmesini bekler.
        await addPosts({ postName: "Gönderi 5", subject: "Konu 4", text: "Metin 5" })
        listPosts()
    }
    //hata oluşması durumunda catch bloğu çalışır.
    catch(error) {
        console.log(error)
    }
} 

showPosts()
```
**Yeni Bir Post Eklemeden Önce **

![nodejsasync1](https://user-images.githubusercontent.com/86554799/155424462-852171eb-f413-4dfc-86a3-a13e32e0b2d2.jpg)

**Yeni Bir Post Ekledikten Sonra **

![nodejsasync2](https://user-images.githubusercontent.com/86554799/155424838-4eea6b39-06ae-418b-9afa-cccfc715bec7.jpg)


