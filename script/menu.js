
let appetisers =  [
    {
      "img_url" : "https://i.ibb.co/qpshHSZ/Antipasto-Platter.jpg",
      "name": "Caprese Salad",
      "description": "Fresh mozzarella cheese, ripe tomatoes, and basil leaves drizzled with balsamic reduction and olive oil."
    },
    {
     "img_url":"https://i.ibb.co/Gxs1ptF/Bruschetta.jpg",
      "name": "Coconut Shrimp",
      "description": "Large shrimp coated in coconut flakes and fried until golden brown, served with a sweet and tangy dipping sauce."
    },
    {
      "img_url":"https://i.ibb.co/JvY9QGV/Chicken-Satay.jpg",
      "name": "Ceviche",
      "description": "Fresh seafood (typically shrimp or fish) marinated in citrus juices, mixed with onions, cilantro, and peppers."
    },
    {
        "img_url":"https://i.ibb.co/170QByh/Shrimp-Cocktail.jpg",
      "name": "Gyoza",
      "description": "Japanese dumplings filled with seasoned ground meat or vegetables, pan-fried and served with soy dipping sauce."
    },
    {
        "img_url":" https://i.ibb.co/tcqTy5g/potato-skin.jpg",
      "name": "Bacon-Wrapped Dates",
      "description": "Dates stuffed with almonds or cheese, wrapped in bacon, and baked until crispy."
    },
    {
        "img_url":"https://i.ibb.co/rGMkMxL/pinach-and-Artichoke-Dip.jpg",
      "name": "Deviled Eggs",
      "description": "Halved hard-boiled eggs filled with a creamy yolk and mayonnaise mixture, often garnished with paprika or herbs."
    },
    {
        "img_url":"https://i.ibb.co/JvY9QGV/Chicken-Satay.jpg",
      "name": "Tuna Tartare",
      "description": "Fresh raw tuna diced and mixed with sesame oil, soy sauce, and various toppings like green onions, sesame seeds, and avocado."
    },
    {
        "img_url":"https://i.ibb.co/qpshHSZ/Antipasto-Platter.jpg",
      "name": "Fried Pickles",
      "description": "Sliced dill pickles coated in a crispy batter, deep-fried, and served with a dipping sauce."
    },
    {
        "img_url":"https://i.ibb.co/k8rFpfb/Calamari.jpg",
      "name": "Ahi Poke",
      "description": "Cubes of raw tuna seasoned with soy sauce, sesame oil, and various toppings like green onions, sesame seeds, and avocado."
    },
    {
      "img_url":"https://i.ibb.co/Gxs1ptF/Bruschetta.jpg",
      "name": "Escargot",
      "description": "Snails cooked in garlic and herb butter, served in their shells with crusty bread for dipping."
    }
  ]


  let menuList = document.getElementById('appetisersList');
  let desserts = document.getElementById('desserts');
  let mainCourse = document.getElementById('mainCourse');

//   let menuList = document.querySelector('.menuList')


  for(let data of appetisers){
    // console.log(data)
    let divContaner = `
        <div>
            <img src="${data.img_url}" alt="pic1"/>
            <span class="dishName">${data.name}</span>
            <span class="dishDesc">${data.description}</span>
        </div>
    `   
    menuList.innerHTML += divContaner;
  }



 
  
  
 
  
  
