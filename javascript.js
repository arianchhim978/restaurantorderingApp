const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushroom", "mozarella"],
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
];
let b = document.getElementById("container")
function renderMenu(){
    for (let i = 0 ; i<menuArray.length; i++){
        const a = menuArray[i];
        b.innerHTML += `<span class='capital'>${a.emoji} ${a.name}
        </span> <span class='price'><div class='dolla'>$${a.price}</div></span>
        <span class='ingred '> <div class='line'>${a.ingredients}</span><button><img class='button'src='add-btn.png'></button><br>`
    }
} 
renderMenu();
var buttonArray = document.querySelectorAll(".button");
buttonArray.forEach(function(button,index){
    button.addEventListener("click",function(){
       d(index);
       
    })
}) 
let i = 0;
let s = document.getElementById("order")
let t = document.getElementById("total")
function d (index){
    if(index === 0){ 
        console.log("Pizza was picked")
        s.innerHTML += "Pizza  $14<br>"
        i+= 14;
        t.innerHTML = "Total:$"+i;
    }
    else if(index===1){
        console.log("Hamburger was picked")
        s.innerHTML += "Hamburger $12 <br>" 
        i+= 12;
        t.innerHTML = "Total:$"+i;

    }else if(index === 2){
        console.log("beer was picked")
        s.innerHTML += "Beer $12<br>"
        i+=12
        t.innerHTML = "Total:$"+i;
    }
}
