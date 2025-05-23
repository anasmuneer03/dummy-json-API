async function getProducts(){
    try{
    const {data}= await axios.get("https://dummyjson.com/products");
    console.log(data);
    const html=data.products.map((ele)=>
    `<div>
    <a href="product-details.html?id=${ele.id}">Product</a>
    <p>Product Title: ${ele.title}</p>
    <p>Product Category: ${ele.category}</p>
    <p>Product Price: ${ele.price}</p>
    <img src="${ele.thumbnail}"/>
    </div>`
    ).join("");
    document.querySelector(".Products").innerHTML=html;}
    catch(e){
        document.querySelector(".text-danger").textContent=e.message;
    }
    finally{document.querySelector(".loader-parent").classList.add("d-none");
    }
}

getProducts();