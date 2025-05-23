async function getProductDetails() {
    const params= new URLSearchParams(window.location.search);
    const productId= params.get("id");
    try{
    const {data}= await axios.get(`https://dummyjson.com/products/${productId}`);
    let html="";
        html+= `
    <p>Product Title: ${data.title}</p>
    <p>Product Description: ${data.description}</p>
    <p>Product Category: ${data.category}</p>
    <p>Product Price: ${data.price}</p>
    <p>Product Rating: ${data.rating}</p>
    `;

    document.querySelector(".Product-Details").innerHTML=html;}
    catch(e){
        document.querySelector(".text-danger").textContent=e.message;
    }
}

getProductDetails();