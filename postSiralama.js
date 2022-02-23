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

//listPosts()

//eklenen kitapla birlikte postların sıralı bir şekilde listelenmesi-Pluşturulam promise i karşılayabilmesi için async-await yapısı kullanıldı. Async-await yapısının tercih edilmesinin sebebi bu örnekteki asenkron yapıda olan işlemleri keskin sıralı bir şekilde listeleyebilmesi için hem de yaımı daha kolay olduğu için:

async function showPosts() {
    try {
        //await dediğimizde posttaki ekleme işlemi bitmeden listeleme işlemine geçmesini önlemiş oluruz yani işlemin bitmesini bekler.
        await addPosts({ postName: "Gönderi 5", subject: "Konu 5", text: "Metin 5" })
        listPosts()
    }
    //hata oluşması durumunda catch bloğu çalışır.
    catch(error) {
        console.log(error)
    }
} 

showPosts()

