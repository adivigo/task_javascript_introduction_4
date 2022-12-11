let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }
    

const dataArr = { hoby: 'futsal'}

const datacopy = {...data, ...dataArr}

datacopy.name = 'Adivigo Khalishtama'
datacopy.email = 'adivigo@gmail.com'

console.log(datacopy);

const alamat = data.address

const {street, city}= alamat

console.log(street, city);