const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2
    }
]
let b = document.getElementById("container")
let d = document.getElementById("#order")
let e = document.getElementById("#button")



 

function a (){
   for (let i = 0; i< menuArray.length;i++){
    const menuItem = menuArray[i];
    
    b.innerHTML += `${menuItem.emoji}${menuItem.name}<img id='button' class='button'src='add-btn.png  '> <span class='ingred'> ${menuItem.ingredients}</span> <span class='price'> ${menuItem.price}</span><div id='line'></div>`
   
} 
}
a();