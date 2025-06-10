const getProducts = async () => {
  try {
    const { data } = await axios.get("https://dummyjson.com/products");
    // console.log(data);
    const html = data.products
      .map(
        (ele) =>
          `<div class="product">
    <img src="${ele.thumbnail}" class="product-img"/>
    <p>Product Title: ${ele.title}</p>
    <p>Product Category: ${ele.category}</p>
    <p>Product Price: ${ele.price}</p>
    <a href="product-details.html?id=${ele.id}">details</a>
    </div>`
      )
      .join("");
    document.querySelector(".Products").innerHTML = html;
    customModel();
  } catch (e) {
    document.querySelector(".text-danger").textContent = e.message;
  } finally {
    document.querySelector(".loader-parent").classList.add("d-none");
  }
};

getProducts();
function customModel() {
  const images = Array.from(document.querySelectorAll(".product-img"));
  const modal = document.querySelector(".my-modal");
  const modalImg = document.querySelector(".modal-img");
  const closeBtn = document.querySelector(".x-btn");
  const rightBtn = document.querySelector(".arrow-right-btn");
  const leftBtn = document.querySelector(".arrow-left-btn");
  let currentIndex = 0;
  images.forEach((img) => {
    img.onclick = function (e) {
      modal.classList.remove("d-none");
      modalImg.setAttribute("src", e.target.getAttribute("src"));
      currentIndex = images.indexOf(e.target);
      console.log(currentIndex);
    };
  });

  function closeModal() {
    modal.classList.add("d-none");
  }
  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    modalImg.setAttribute("src", images[currentIndex].getAttribute("src"));
  }
  function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    modalImg.setAttribute("src", images[currentIndex].getAttribute("src"));
  }
  closeBtn.onclick = () => {
    closeModal();
  };

  rightBtn.onclick = () => {
    nextImage();
  };

  leftBtn.onclick = () => {
    prevImage();
  };

  document.onkeydown = (e) => {
    console.log(e);
    if (e.code == "ArrowRight") {
      nextImage();
    } else if (e.code == "ArrowLeft") {
      prevImage();
    } else if (e.code == "Escape") {
      closeModal();
    }
  };
}
