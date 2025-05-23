async function geCategories(){
    try{
    const {data}= await axios.get("https://dummyjson.com/products/category-list");
    const html= data.map((ele)=>
    `<div>
    <a href="category-products.html?category=${ele}"">${ele}</a>
    </div>`
    ).join('');
    console.log(html);
    document.querySelector(".categories").innerHTML=html;}
    catch(e){
       document.querySelector(".text-danger").textContent=e.message;
    }
    finally{document.querySelector(".loader-parent").classList.add("d-none");}
}

async function getFiveProducts() {
    try{
    const {data}= await axios.get("https://dummyjson.com/products?limit=5");
    console.log(data);
    const html=data.products.map((ele)=>
        `<div>
        <p>product id: ${ele.id}</p>
        <p>product title: ${ele.title}</p>
        <p>product category: ${ele.category}</p>
        <p>product price: ${ele.price}</p>
        <p>product rating: ${ele.rating}</p>
        </div>
        `
).join("");

    document.querySelector(".five-products").innerHTML=html;}
    catch(e){
        document.querySelector(".text-danger").textContent=e.message;
    }
    finally{document.querySelector(".loader-parent").classList.add("d-none");
}}

geCategories();
getFiveProducts();
