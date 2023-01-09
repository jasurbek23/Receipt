// Obyektlar

// const - ozgaruvchan yaratish uchun mahsus kalit, const orqali yaratilgan ozgaruvhan ichidagi malumotni ozgartirib bolmaydi, yaniy const ga String malumot turi joylashtirilsa uni number yoki boshqa malumot turiga ozgartirib bolmaydi

// const num = 2
// console.log(num);
// num = 3
// console.log(num);

// Literal Obyekt ishlatgan holatda biz uni ichiga {kalit: qiymat} joylashtira olamiz
// Obyekt quydagi belgi bilan yaratiladi - {}
// typeof - malumot turini tekshirish uchun

// const obj = {}


// const user = {
//     name: 'AbdulMalik',
//     age: 23,
//     job: 'Web-Dev',
//     total_sum: 1000,
//     'total sum': 2000, // bunaka kalit nomini iloji boricha ishlatmimiz
// } 

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user['total sum']);


// const user = {
//     name: 'AbdulMalik',
//     age: 23,
//     job: 'Web-Dev',
// }

// Obyektga yangi kalit qoshish uchun (obeykt-ismi.kalit-nomi = qiymat)
// Obyekt ichidagi kalit mavjudligini tekshirish: 'kalit' in obyekt

// user.from = 'Tashkent'

// console.log(user);
// console.log('id' in user);


// for in tsikli obyekt ichidan yugirib chiqish uchun kerak: for (kalit in obyekt)

// const user = {
//     name: 'AbdulMalik',
//     age: 23,
//     job: 'Web-Dev',
// }

// for in sintaksisi 

// obratnaya kovichka - teskari qoshtirnoq, konketonatsiyani olib tashlaydi va malumotlarni chiqarishni osonlashtiradi
// ozgaruvchan yoki boshqa malumotlar ${} ichiga qoyiladi

// for (const key in user) {
//     console.log(`Kalit: (${key}), Kalitning Qiymati: (${user[key]})`);
// }

// Obyekt metodlari
// Obyekt ichida yaratilgan functsiya bu metod deb ataladi
// const user = {
//     name: 'AbdulMalik',
//     age: 23,
//     job: 'Web-Dev',
//     ageAdd: function() {
//         //  this kaliti shu obyekt ekanligini anglatadi
//         return ++this.age
//     }
// }

// console.log(user.ageAdd());

// // Kalit ichidagi qiymatni ozgartirish yana bir usuli
// // obyekt.kalit = yangi qiymat
// user.job = 'Frontend Dev'
// console.log(user.job);


// Kalitlar matin yoki son korinishida ham bolishi mumkin


// const users = {
//     '1': {
//         name: 'AbdulMalik',
//         age: 23,
//     },
//     '2': {
//         name: 'Abdulbory',
//         age: 16,
//     },
//     '3': {
//         name: 'Shahrizoda',
//         age: 18,
//     }
// }

// Obyekt ichidagi obyekt (Dvumerniy obyekt) yaniy obyekt kalitiga yana bir obyekt birikrtirish

// const user = {
//     name: 'AbdulMalik',
//     age: 23,
//     job: 'Web-Dev',
//     address: {
//         city: 'Tashkent',
//         district: '12 kv',
//     }
// }

// console.log(user.address.district);

// // Obyekt ichidagi obyektni obchiqish uchun tsikl ichida tsikl ishlatiladi

// for (const keyOne in user) {
//     for (const keyTwo in user[keyOne]) {
//         console.log(user[keyOne][keyTwo]);
//     }
// }


// const productList = {
//     meat: {
//         info: 'Qoy Goshti',
//         weight: 2,
//         price: 100000
//     },
//     rice: {
//         info: 'Lazer',
//         weight: 2,
//         price: 15000
//     },
//     carrot: {
//         info: 'Saru Sabzi',
//         weight: 2,
//         price: 7000,
//     },
//     oil: {
//         info: 'Pista Yogi 3L',
//         amount: 1,
//         price: 70000,
//     },
//     onion: {
//         info: 'Piyoz',
//         weight: 1,
//         price: 5000
//     },
//     spice: {
//         info: 'Ziravorlar',
//         weight: 0.5,
//         price: 25000,
//     },
//     cola: {
//         info: 'Coca-Cola 1.5L',
//         amount: 6,
//         price: 12000,
//     },
//     choyhona: {
//         info: 'Mevazor',
//         amount: 1,
//         price: 150000
//     }
// }


// let totalPrice = 0

// for (const key in productList) {
//     totalPrice += productList[key].price * (productList[key].weight ? productList[key].weight : productList[key].amount)
// }

// console.log(`Umumiy Choyhona harajati: ${totalPrice} so'm
// Har bir kishidan: ${Math.ceil(totalPrice / 8)} so'm dan
// `);

function receipt() {
    const arrayReceipt = [{
        'Lavash': {
            info: 'Big Cheese',
            price: 15000
        },
        'Hot-dog': {
            info: 'mini',
            price: 8500
        },
        'Cola': {
            info: '1.5 L',
            price: 9000
        }
    }, {
        'Milk': {
            info: '1 L',
            price: 8500
        },
        'Sugar': {
            info: '1 kg',
            price: 7000
        }
    }, {
        'Cola': {
            info: '1 L',
            price: 6500
        },
        'Fanta': {
            info: '1.5 L',
            price: 9000
        },
        'Lipton': {
            info: '1.2 L',
            price: 5000
        },
        'Nestle': {
            info: '10 L',
            price: 8500
        }
    }]


    const count = Math.floor(Math.random() * arrayReceipt.length)
    return arrayReceipt[count]
}

total_sum = 0
products = []
for (const [key, value] of Object.entries(receipt())) {
    total_sum += value.price
    products.push(key)
}

products = products.join(', ')
total_sum += 9000

console.log(`Siz zakaz qildingiz ${products}. | Sizdan jami ${total_sum} som dastavka blan (9000)`)
  
  






// Вы заказали Lavash Big Cheese, Hot-dog mini, Cola 1.5L, | Общая стоимость 41500 сум с доставкой (9000)