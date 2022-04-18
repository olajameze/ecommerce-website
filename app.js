const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// These are the products
const products = [
    {
      id: 1,
      title: "Beats",
      price: 50,
      colors: [
        {
          img: "./img/beats.png",
        },
        {
        
          img: "./img/beats.png",
        },
      ],
    },
    {
      id: 2,
      title: "Beats 2",
      price: 55,
      colors: [
        {
          img: "./img/beats2.png",
        },
        {
          img: "./img/beats2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Beats 3",
      price: 65,
      colors: [
        {
          img: "./img/beats3.png",
        },
        {
          img: "./img/beats3.png",
        },
      ],
    },
    {
      id: 4,
      title: "Headphones",
      price: 35,
      colors: [
        {
          img: "./img/headphone.png",
        },
        {
          img: "./img/headphone.png",
        },
      ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
//changes the slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
  
//This changes the chosen product
      choosenProduct = products[index];
  
//changes the current products text
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "£" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img;

        choosenProduct = products[index]
    });
});
