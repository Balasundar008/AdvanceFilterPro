
const data=[
    {
        id:1,
        name:'VOLTAS',
        img:'./Images/Ac.jpg',
        amt:18000,
        seller:'Voltas Store',
        catagory:'AC'
    },

    {
        id:2,
        name:'Camera',
        img:'./Images/camera.jpg',
        amt:30000,
        seller:'Canon store',
        catagory:'Camera'
    },

    {
        id:3,
        name:'Asus Laptop',
        img:'./Images/lap.jpg',
        amt:20000,
        seller:'Asus Store',
        catagory:'Laptop'
    },

    {
        id:4,
        name:'Lenovo Thinkpad',
        img:'./Images/laptop.jpg',
        amt:45000,
        seller:'Lenovo store',
        catagory:'Laptop'
    },

    {
        id:5,
        name:'Samsung F54',
        img:'./Images/samsung.jpg',
        amt:30000,
        seller:'Samsung store',
        catagory:'Mobile'
    },

    {
        id:6,
        name:'Realme note 10pro',
        img:'./Images/Realme.jpg',
        amt:25000,
        seller:'Realme',
        catagory:'Mobile'
    },

    {
        id:7,
        name:'Sony',
        img:'./Images/t.jpg',
        amt:35000,
        seller:'Sony ',
        catagory:'Television'
    },

    {
        id:8,
        name:'Realme',
        img:'./Images/tv.jpg',
        amt:13000,
        seller:'Realme',
        catagory:'Television'
    },

    {
        id:9,
        name:'Whirlpool',
        img:'./Images/washmachine.png',
        amt:16000,
        seller:'Whirlpool',
        catagory:'Washing Machine'
    },

    {
        id:10,
        name:'Samsung',
        img:'./Images/was.jpg',
        amt:15000,
        seller:'Samsung',
        catagory:'Washing Machine'
    },
]

const productsContainer=document.querySelector('.products')

function displayProducts(datas){
    if (datas.length>0) {
    const product_details=datas.map((data)=>
    `  <div class="product">
    <div class="img">
        <img src=${data.img} alt="">
    </div>
    <div class="product-details">
        <span class="name">${data.name}</span>
        <span class="amt">Rs.${data.amt}</span>
        <span class="seller">${data.seller}</span>
    </div> 
    </div>`
        ) 
        .join('') //adding everey images

        productsContainer.innerHTML=product_details;
    }
    else{
        productsContainer.innerHTML="<h2>No Products Available</h2>";
   
    }
}

const catagoryList=document.querySelector('.catagory-list')

function setCatagories(){
   const allCatagories= data.map((product)=>product.catagory);
    // console.log(allCatagories);


    // add all catagory and filter duplicate catagories 
    const catagories=[
        "All",...allCatagories.filter((product,index)=>{
            return allCatagories.indexOf(product)===index //indexof is given for if multiple product index exists, it takes only the first index of products
        })
    ]
    // console.log(catagories);
    catagoryList.innerHTML=catagories.map((catagory)=>
    `<li>${catagory}</li>`).join('');

    catagoryList.addEventListener('click',(e)=>{
    const selectedCatagory= e.target.textContent;
    // console.log(selectedCatagory);
    
    selectedCatagory==='All'?displayProducts(data)
    :displayProducts(data.filter((product)=>product.catagory==selectedCatagory))

})
}

const priceRange=document.querySelector('#priceRange')
const priceValue=document.querySelector('.priceValue')

function setPrices(){
const priceList=data.map((product)=>product.amt)
// console.log(priceList);
const minPrice=Math.min(...priceList);
const maxPrice=Math.max(...priceList);
// console.log(minPrice);
// console.log(maxPrice);

priceRange.min=minPrice;
priceRange.max=maxPrice;

priceValue.textContent="Rs. "+maxPrice

priceRange.addEventListener('input',(e)=>{
    priceValue.textContent="Rs. "+e.target.value
    displayProducts(data.filter((product)=>product.amt<=e.target.value))
})
}

const txtSearch=document.querySelector('#txtSearch')
txtSearch.addEventListener('keyup',(e)=>{
    const value=e.target.value.toLowerCase().trim();
    if (value) {
        // displayProducts(data.filter((product)=>product.name.toLowerCase().indexOf(value)!==-1));  
        displayProducts(data.filter((product)=>product.name.toLowerCase().includes(value)));  
    }
    else{
        displayProducts(data)
    }

})

displayProducts(data);
setCatagories();
setPrices();