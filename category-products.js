async function getCategoryProducts(){
    const params= new URLSearchParams(window.location.search);
    const category=params.get("category");
    try{
    const {data}= await axios.get(`https://dummyjson.com/products/category/${category}`);
    console.log(data);
    const html= data.products.map((ele)=>
    `<div>
    <p>Product ID: ${ele.id}</p>
    <p>Product Title: ${ele.title}</p>
    <p>Product Description: ${ele.description}</p>
    <p>Product Price: ${ele.price}</p>
    </div>`
).join("");

    document.querySelector(".Category-Products").innerHTML=html;}
    catch(e){
        document.querySelector(".text-danger").textContent=e.message;
    }
}

getCategoryProducts();