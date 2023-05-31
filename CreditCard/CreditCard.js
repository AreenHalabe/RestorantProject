const restorantItem=[
    {
        name:"Burger",
        price:6
    },
    {
        name:"Pizza",
        price:15
    },
    {
        name:"Shawarma",
        price:4
    },
    {
        name:"KFC",
        price:18
    },
    {
        name:"Tacos",
        price:7
    }
];

const order=[];
const OnClick = (itemName)=>{
    const itemInOrder=order.find((item)=> item.name===itemName);
    if(itemInOrder){
        itemInOrder.counter +=1;
    }
    else{
        const item=restorantItem.find((elem)    => elem.name === itemName  );
        order.push(item);
        item.counter =1;
    }
    console.log(order);
    renderItemName(order);
    TotalPrice(order);


};
const renderItemName=(order)=>{
    const name=order.map((item)=> item.counter===1  ? item.name :`${item.name}(${item.counter})`);
    document.getElementById("your-item").value=name;
}

const TotalPrice=(order)=>{
    const price=order.map((item)=>item.price * item.counter);
    document.getElementById("Total-Price").value = price.reduce((prev , current) => prev + current);
     

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
    const nameHolder=document.getElementById("cardHolderName").value
    const cardNumber=document.getElementById("cardNumber").value
    const cvv=document.getElementById("cvvNumber").value

    const card=creaditCart.find((elem)=>
    elem.cardNumber===cardNumber&&
    elem.nameHolder===nameHolder&&
    elem.cvv===cvv
    );
    console.log(card);
    if(!card){
        document.getElementById("result").value="invalid card"
        return;
    }
    else{
        const total= +document.getElementById("Total-Price").value;
        if(total    >   card.balance){
            document.getElementById("result").value="valid card but not enogh mony";
        }
        else{
            document.getElementById("result").value="valid card take your order";
        }

    }
};

