document.getElementById("OrderNow").addEventListener("click",function()
{
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
})

const espresso = {
    name: "Espresso",
    price: 20,
    category: "Hot"
};
const latte = {
    name: "Latte",
    price: 30,
    category: "Hot"
};
const cappuccino = {
    name: "Cappuccino",
    price: 40,
    category: "Hot"
};
const mocha = {
    name: "Mocha",
    price: 35,
    category: "Hot"
};
const customer={
    name:"Martina Farah",
    Age :20
}
let items=[espresso,latte,cappuccino,mocha];
let cards = document.querySelectorAll("#menu > section");

for(let i = 0; i < cards.length; i++)
{
    cards[i].querySelector(".price").innerHTML =
        "Price : " + items[i].price;

    cards[i].querySelector(".category").innerHTML =
        "Category : " + items[i].category;
}

let choose=document.getElementsByClassName("Choose");
let item;
for(let i=0;i<choose.length;i++)
{
    choose[i].addEventListener("click",function(){
        item=items[i];
        document.getElementById("selectedName").innerHTML="Coffee: "+item.name;
        document.getElementById("selectedPrice").innerHTML="Price: "+item.price;
        document.getElementById("selectedCategory").innerHTML="Category: "+item.category;
        
        document.getElementById("Order").scrollIntoView({ behavior: "smooth" });
    })
}


/*----------size-----------*/

let orderForm=document.getElementById("orderForm");

orderForm.addEventListener("submit",function(event)
{
    event.preventDefault();
    let size = document.querySelector('input[name="size"]:checked').value;
    let additionalprice=0;
    switch(size)
    {
        case "small":
            additionalprice=0;
            break;
        case "medium":
            additionalprice=10;
            break;
        case "large":
            additionalprice=20;
            break;
    }

let numOfCups;
let attempts = 0;

do 
{
    numOfCups = Number(document.getElementById("cups").value);
    attempts++;

    if(numOfCups < 1)
    {
        alert("Please enter a valid number of cups.");
        document.getElementById("cups").focus();
    }

} while(numOfCups < 1 && attempts < 3);

if(numOfCups < 1)
{
    alert("You used all 3 attempts.");
    return;
}
    let cup = 1;
    while(cup <= numOfCups)
    {
        console.log("Preparing cup " + cup);
        cup++;
    }


    function calculatePrice(price,addition)
    {
        return price+addition;
    }

    let priceForcup=calculatePrice(item.price,additionalprice);

    function totalPrice(onecup,num)
    {
        return onecup*num;
    }

    let total=totalPrice(priceForcup,numOfCups);
    
    if(numOfCups>=5)
    {
        total = total * 0.9;
    }

    let priceCategory="";
    if(total<70)
    {
        priceCategory="Budget";
    }
    else if(total>=70&&total<=100)
    {
        priceCategory="Regular";
    }
    else{
        priceCategory="Premium";
    }

    function showOrderSummary(){
    document.getElementById("customerName").innerHTML="Customer : "+customer.name;
    document.getElementById("summaryCoffee").innerHTML="Coffee : " +item.name;
    document.getElementById("summarySize").innerHTML="Size : "+size;
    document.getElementById("summaryQuantity").innerHTML="Quantity : "+numOfCups;
    document.getElementById("pricePerCup").innerHTML="Price Per Cup : "+priceForcup;
    document.getElementById("totalPrice").innerHTML="Total Price : "+total;
    document.getElementById("priceCategory").innerHTML="Price Category : "+priceCategory;
    }
    showOrderSummary();
})
