let products = [
  {
    src: "https://icodethis.com/images/iCodeMas/tree.png",
    name: "Christmas Tree Decoration",
    price: 19.99,
    tag: {
      text: "NEW",
      color: "blue"
    },
    description: "Perfect for adding a festive touch to any space, this miniature tree brings the magic of Christmas right into your home. Crafted with care, it's a delightful...",
  },
  {
    src: "https://icodethis.com/images/iCodeMas/gift.png",
    name: "50 Gift Boxes",
    price: 14.99,
    tag: {
      text: "-24%",
      color: "red"
    },
    description: "The only thing you'll need to wrap your presents this Christmas season.",
  },
  {
    src: "https://icodethis.com/images/iCodeMas/gingerbread_cookie.png",
    name: "Gingerbread Cookie",
    price: 9.99,
    description: "The best thing for adding a little bit of Christmas to your belly.",
  },
];

const smallImages = document.querySelectorAll(".container-small");

const fullDetails = document.querySelector(".full-details-wrapper");


const largeImage = fullDetails.querySelector(".image-large");
const productTag = fullDetails.querySelector(".product-tag");
const productName = fullDetails.querySelector(".product-name");
const productPrice = fullDetails.querySelector(".price");
const productDescription = fullDetails.querySelector(".description");

smallImages.forEach((smallImage) => {
  smallImage.addEventListener("click", (e) => {
    console.log("clicked");
    smallImages.forEach((resetHighlight) => {
      resetHighlight.classList.remove("border-highlighted");
    });
    smallImage.classList.toggle("border-highlighted");

    const clickedId = smallImage.dataset.id;

    largeImage.src = products[clickedId].src;
    productName.innerHTML = products[clickedId].name;
    productPrice.innerHTML = "$" + products[clickedId].price;
    productDescription.innerHTML = products[clickedId].description;

    if (products[clickedId].tag) {
      productTag.classList.remove("tag-invisible");
      productTag.innerHTML = products[clickedId].tag.text;
      productTag.parentElement.dataset.color = products[clickedId].tag.color;
    } else {
      productTag.classList.add("tag-invisible");
    }
  });
});

