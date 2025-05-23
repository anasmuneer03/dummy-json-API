async function geCategories(){
    try{
    const {data}= await axios.get("https://dummyjson.com/products/category-list");
    console.log(data)
    const html= data.map((ele)=>
    `<div>
    <a href="category-products.html?category=${ele}">${ele}</a>
    </div>`
    ).join('');
    document.querySelector(".categories").innerHTML=html;}
    catch(e){
        document.querySelector(".text-danger").textContent=e.message;
    }
    finally{
    document.querySelector(".loader-parent").classList.add("d-none");
}
}
geCategories();