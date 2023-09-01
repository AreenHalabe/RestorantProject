const restorantItem=[
    {
        name:"Burger",
        price:6,
        image:"stuff/burger.png"
    },
    {
        name:"Pizza",
        price:15,
        image:"stuff/pizza.png"
    },
    {
        name:"Shawarma",
        price:4,
        image:"stuff/shawarma.png"
    },
    {
        name:"KFC",
        price:18,
        image:"stuff/crispy-fried.png"
    },
    {
        name:"Tacos",
        price:7,
        image:"stuff/Taco.png"
    }
];

const order=[];

const OnClick = (itemName)=>{
   const itemInOrder = order.find((item) => item.name ===itemName);

   let item;
   if(itemInOrder){
        itemInOrder.counter += 1;
        item=itemInOrder;
   }

   else{
     item = restorantItem.find((ele) => ele.name===itemName);
    item.counter=1;
    order.push(item);

   }
    renderItemName(order);
    TotalPrice(order);

    const CartItemDev=document.getElementById("cart-item");
    const Totalprices= document.getElementById("Total-items");
    CartItemDev.innerHTML =``;
    
    for(const iteminorder of order){
    
    CartItemDev.innerHTML +=`<div class="items">
    <div class="burger" >
        <div class="item-title-photo">
            <div class="item-title"><h2>${iteminorder.name}</h2></div>
            <div class="item-photo"><img src=${iteminorder.image} alt="burger"></div>
        </div>
            <div class="item-title"><h2>${iteminorder.counter}</h2></div>
            <div class="item-price"><h2>$${iteminorder.price * iteminorder.counter}</h2></div>
        </div>
    </div>`
    ;
    }

   
   
};
const renderItemName=(order)=>{

    
        const Name = order.map((item)=> `${item.name}(${item.counter})`);

        document.getElementById("your-item").value=Name;

   
}

const TotalPrice=(order)=>{

    const Price = order.map((item)=> item.price * item.counter)
    document.getElementById("Total-Price").value=Price.reduce((prev , current) => prev + current);
    document.getElementById("T-Price").innerHTML= `<h2>${Price.reduce((prev , current) => prev + current)}</h2>`;

};

const creaditCart=[{
    nameHolder:"faraj",
    cardNumber:"01234",
    cvv:"999",
    balance:"50",
    },
  
    {
    nameHolder:"ahmad",
    cardNumber:"02468",
    cvv:"888",
    balance:"400",

    },

    {
        nameHolder:"wael",
        cardNumber:"01357",
        cvv:"444",
        balance:"2_000",
    },
]




const OnClickPay=()=>{
    const name= document.getElementById("cardHolderName").value;
    const CardNumber = document.getElementById("cardNumber").value;
    const Cvv = document.getElementById("cvvNumber").value;
    const TotalPrice = +document.getElementById("Total-Price").value;
    
    const card = creaditCart.find((ele)=>
    ele.nameHolder ===name &&
    ele.cardNumber===CardNumber&&
    ele.cvv===Cvv);

    if(!TotalPrice && !card){
        document.getElementById("result").value="Please chose Order first and then enter the card";
        return;
    }
    else if(!TotalPrice ){
        document.getElementById("result").value="Please chose an Order first ";
        return;
    }
    
    if(card){
        if(card.balance<TotalPrice){
            document.getElementById("result").value="Not enough balance";
            return;
        }
        else{
            document.getElementById("result").value="Get Order";
            return;

        }
    }
    else{
        document.getElementById("result").value="Not Valid Card";
        return;

    }

};

