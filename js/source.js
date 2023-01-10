const navbarItemsArray = [
  {
    id: 2,
    nameId: "health",
    category: "بهداشت و سلامت",
    container: [
      {
        id: 2.1,
        name: "عنوان دسته",
        content: [
          "زیرمنو هفت",
          "زیرمنو شش",
          "زیرمنو پنج",
          "زیرمنو چهار",
          "زیرمنو سه",
          "زیرمنو دو",
          "زیرمنو یک",
        ],
      },
      {
        id: 2.2,
        name: "دو عنوان دسته",
        content: [
          "زیرمنو هشت",
          "زیرمنو هفت",
          "زیرمنو شش",
          "زیرمنو پنج",
          "زیرمنو چهار",
          "زیرمنو سه",
          "زیرمنو دو",
          "زیرمنو یک",
        ],
      },
    ],
  },

  {
    id: 3,
    nameId: "tools",
    category: "ابزار و اداری",
    container: [
      {
        id: 3.1,
        name: "عنوان دسته",
        content: [
          "زیرمنو هفت",
          "زیرمنو شش",
          "زیرمنو پنج",
          "زیرمنو چهار",
          "زیرمنو سه",
          "زیرمنو دو",
          "زیرمنو یک",
        ],
      },
      {
        id: 3.2,
        name: "دو عنوان دسته",
        content: [
          "زیرمنو هشت",
          "زیرمنو هفت",
          "زیرمنو شش",
          "زیرمنو پنج",
          "زیرمنو چهار",
          "زیرمنو سه",
          "زیرمنو دو",
          "زیرمنو یک",
        ],
      },
      {
        id: 3.3,
        name: "سه عنوان دسته",
        content: [
          "زیرمنو هشت",
          "زیرمنو هفت",
          "زیرمنو شش",
          "زیرمنو پنج",
          "زیرمنو چهار",
          "زیرمنو سه",
          "زیرمنو دو",
          "زیرمنو یک",
        ],
      },
    ],
  },
];

const palletColorArray = [
  { id: 1, color: "rgb(247, 121, 142)" },
  { id: 2, color: " #f7b53b" },
  { id: 3, color: " #3bf7d8" },
  { id: 4, color: " #3bf754" },
  { id: 5, color: " #d5f73b" },
  { id: 6, color: " #f7e43b" },
  { id: 7, color: " #3bb2f7" },
  { id: 8, color: " #d082e7" },
  { id: 9, color: " #ee1d9e" },
  { id: 10, color: " #ee1d1df6" },
  { id: 11, color: " #924905ce" },
  { id: 12, color: " #927805ce" },
  { id: 13, color: " #16aa47ce" },
  { id: 14, color: " rgba(248, 73, 73, 0.808)" },
];

const carouselImages = [
  { id: 1, src: "image/1.jpg", name: "imag1" },
  { id: 2, src: "image/2.jpg", name: "imag2" },
  { id: 3, src: "image/3.jpg", name: "imag3" },
  { id: 4, src: "image/4.jpg", name: "imag4" },
  { id: 5, src: "image/5.jpg", name: "imag5" },
  { id: 6, src: "image/6.jpg", name: "imag6" },
  { id: 7, src: "image/7.jpg", name: "imag7" },
];

const section1OwlCarouselArray = [
  {
    id: 1,
    image: "image/section1/012.jpg",
    title: "کت مردانه",
    type: "لباس مردانه",
    price: "199,000",
    star: 5,
  },
  {
    id: 2,
    image: "image/section1/013.jpg",
    title: "مانتو زنانه مدل هودی تیک تین",
    type: "لباس زنانه",
    price: "135,000",
    star: 4,
  },
  {
    id: 3,
    image: "image/section1/015.jpg",
    title: "مانتو زنانه",
    type: "لباس زنانه",
    price: "145,000",
    star: 4,
  },
  {
    id: 4,
    image: "image/section1/010.jpg",
    title: "مانتو زنانه",
    type: "لباس زنانه",
    price: "170,000",
    star: 3,
  },
  {
    id: 5,
    image: "image/section1/011.jpg",
    title: "مانتو زنانه",
    type: "لباس زنانه",
    price: "185,000",
    star: 5,
  },
  {
    id: 6,
    image: "image/section1/014.jpg",
    title: "تیشرت مردانه",
    type: "لباس مردانه",
    price: "54,000",
    star: 2,
  },
];

const section5OwlCarousel = [
  {
    id: 1,
    iconImage: "image/section5/row2/notebook-computer.png",
    type: "کالای دیجیتال",
    number: "156000",
  },
  {
    id: 2,
    iconImage: "image/section5/row2/lifeline-in-a-heart-outline.png",
    type: "آرایشی، بهداشتی و سلامت",
    number: "48000",
  },
  {
    id: 3,
    iconImage: "image/section5/row2/repair-tools.png",
    type: "خودرو، ابزار و اداری",
    number: "56000",
  },
  {
    id: 4,
    iconImage: "image/section5/row2/hanbok.png",
    type: "مد و پوشاک",
    number: "217000",
  },
  {
    id: 5,
    iconImage: "image/section5/row2/sofa.png",
    type: "خانه و آشپزخانه",
    number: "229000",
  },
  {
    id: 6,
    iconImage: "image/section5/row2/school-material.png",
    type: "لوازم تحریر و هنر",
    number: "86000",
  },
  {
    id: 7,
    iconImage: "image/section5/row2/baby-girl.png",
    type: "کودک و نوزاد",
    number: "32000",
  },
  {
    id: 8,
    iconImage: "image/section5/row2/adventurer.png",
    type: "ورزش و سفر",
    number: "15000",
  },
  {
    id: 9,
    iconImage: "image/section5/row2/restaurant.png",
    type: "خوردنی و آشامیدنی",
    number: "22000",
  },
];

const section7ProductsInfo = [
  {
    id: 1,
    src: "image/section7/014.jpg",
    name: "کت مردانه مجلسی مدل k-m-5110",
    price: "199,000",
    star: 2,
  },
  {
    id: 2,
    src: "image/section7/015.jpg",
    name: "کت مردانه مجلسی مدل k-m-5111",
    price: "205,000",
    star: 4,
  },
  {
    id: 3,
    src: "image/section7/016.jpg",
    name: "کت مردانه مجلسی مدل k-m-5112",
    price: "300,000",
    star: 3,
  },
  {
    id: 4,
    src: "image/section7/017.jpg",
    name: "کت مردانه مجلسی مدل k-m-5113",
    price: "150,000",
    star: 1,
  },
  {
    id: 5,
    src: "image/section7/018.jpg",
    name: "کت مردانه مجلسی مدل k-m-5114",
    price: "199,000",
    star: 5,
  },
  {
    id: 6,
    src: "image/section7/019.jpg",
    name: "کت مردانه مجلسی مدل k-m-5115",
    price: "140,000",
    star: 3,
  },
  {
    id: 7,
    src: "image/section7/014.jpg",
    name: "کت مردانه مجلسی مدل k-m-5116",
    price: "165,000",
    star: 1,
  },
  {
    id: 8,
    src: "image/section7/015.jpg",
    name: "کت مردانه مجلسی مدل k-m-5117",
    price: "405,000",
    star: 0,
  },
  {
    id: 9,
    src: "image/section7/016.jpg",
    name: "کت مردانه مجلسی مدل k-m-5118",
    price: "131,000",
    star: 4,
  },
  {
    id: 10,
    src: "image/section7/017.jpg",
    name: "کت مردانه مجلسی مدل k-m-5119",
    price: "212,000",
    star: 5,
  },
];

section7CarouselImage = [
  { id: 1, src: "image/section7/brand-part2/1076.png" },
  { id: 2, src: "image/section7/brand-part2/1077.png" },
  { id: 3, src: "image/section7/brand-part2/1078.png" },
  { id: 4, src: "image/section7/brand-part2/1079.png" },
  { id: 5, src: "image/section7/brand-part2/1080.png" },
  { id: 6, src: "image/section7/brand-part2/1081.png" },
  { id: 7, src: "image/section7/brand-part2/1082.png" },
  { id: 8, src: "image/section7/brand-part2/1083.jpg" },
];

const footerContacts = [
  { id: 1, src: "image/footer/1.png", text: " تحویل اکسپرس" },
  { id: 2, src: "image/footer/2.png", text: " پشتیبانی 24 ساعته" },
  { id: 3, src: "image/footer/3.png", text: " پرداخت در محل" },
  { id: 4, src: "image/footer/4.png", text: " 7 روز ضمانت بازگشت" },
  { id: 5, src: "image/footer/5.png", text: " ضمانت اصل بودن کالا" },
];

////////////////////////////// Select Doc element //////////////
const $$ = document;
const containerCog = $$.querySelector(".container-cog");
const palletColor = $$.querySelector(".pallet-color");

const header = $$.querySelector(".header");
const headerTab = $$.querySelector(".header-tab");
const headerNavbar = $$.querySelector(".header-navbar");

const navItems = $$.querySelectorAll(".my-nav-item");
const navLinkContainers = $$.querySelectorAll(".nav-link-container");
const classificationItems = $$.querySelectorAll(".classification-item ");

const kalaCartContainer = $$.querySelector(".kala-container");
const kalaScrollable = $$.querySelector(".kala-scrollable");
const cartBasketSeeTrashs = $$.querySelectorAll(".cart-basket-see .trash");
const sumCartBasket = $$.querySelector(".cart-basket-sum");
const cartBasketBtn = $$.querySelector(".cart-basket-see-footer button");
const numberProductsInBasket = $$.querySelectorAll(".number-product");

const collapseButton = $$.querySelector(".collapse-button");
const collapseMenu = $$.querySelector(".collapse-menu");
const layoutMenu = $$.querySelector(".layout-menu");
const sideMenu = $$.querySelector(".side-menu");
const sideMenuItemTitles = $$.querySelectorAll(".side-menu .item-title");
const subtitle1Items = $$.querySelectorAll(".subtitle-1-item");

const imageSlide = $$.querySelector(".image-slide");
const numberSlideParent = $$.querySelector(".number-slide");
const preSlide = $$.querySelector(".pre-slide");
const nextSlide = $$.querySelector(".next-slide");

const section1OwlStage = $$.querySelectorAll(
  ".section1-owl-carousel .owl-stage"
);
const section2OwlStageRight = $$.querySelector(
  ".section2-right-group .section2-owl-carousel .owl-stage"
);
const section2OwlStageLeft = $$.querySelector(
  ".section2-left-single .section2-owl-carousel .owl-stage"
);
const lineDynamicChild = $$.querySelector(".line-dynamic-child");

const section5OwlStage = $$.querySelector(".section5-owl-carousel .owl-stage");
const section7Product = $$.querySelector(".section7 .row");
const section7OwlStage = $$.querySelector(".section7-owl-carousel .owl-stage");
const footerBelieveContainer = $$.querySelector(".footer-believe-container");

///////////////////////////// design doc with js///////////

palletColorArray.forEach(function (item) {
  palletColor.insertAdjacentHTML(
    "beforeend",
    '<div class="color ml-2 mt-2 d-flex justify-content-center align-items-center"  style="background-color: ' +
      item.color +
      ';" onclick= "changeColorFunc(event)"><i class="fa pallet-check"></i></div>'
  );
});

let divElem;
carouselImages.forEach(function (carouselImage) {
  divElem = $$.createElement("div");
  divElem.classList = "mx-2 single-number-slide";
  if (carouselImage.id == 1) {
    divElem.classList = "mx-2 number-slide-active";
  }
  divElem.setAttribute("name-image", carouselImage.name);
  divElem.addEventListener("click", selectSameSlide);

  numberSlideParent.append(divElem);
});

section1OwlCarouselArray.forEach(function (owlCarouselImage) {
  section1OwlStage.forEach(function (item) {
    item.insertAdjacentHTML(
      "beforeend",
      '<div class="owl-item text-right px-3 pb-4"><div>' +
        goldStar(owlCarouselImage.star) +
        '</div><div class="text-center mt-2 pr-0">  <img src="' +
        owlCarouselImage.image +
        '" alt=""></div><h5 class="pb-5 pt-4">' +
        owlCarouselImage.title +
        '</h5> <h6 class="text-secondary mb-3">' +
        owlCarouselImage.type +
        '</h6> <p class="mb-2" >' +
        owlCarouselImage.price +
        " تومان</p> </div>"
    );
  });
});

section1OwlCarouselArray.forEach(function (owlCarouselItem) {
  section2OwlStageRight.insertAdjacentHTML(
    "beforeend",
    '<div class="owl-item text-right pb-3"><div>' +
      goldStar(owlCarouselItem.star) +
      '</div><div class="text-center mt-2 pr-0">  <img src="' +
      owlCarouselItem.image +
      '" alt=""></div><h5 class="pb-5 pt-4">' +
      owlCarouselItem.title +
      '</h5> <h6 class="text-secondary mb-3">' +
      owlCarouselItem.type +
      '</h6> <p class="mb-2" >' +
      owlCarouselItem.price +
      " تومان</p> </div>"
  );
});

section1OwlCarouselArray.forEach(function (owlCarouselItem) {
  section2OwlStageLeft.insertAdjacentHTML(
    "beforeend",
    '<div class="owl-item text-center"><div class="text-right pr-2 mb-3">' +
      goldStar(owlCarouselItem.star) +
      '</div><div class="d-flex justify-content-center">  <img src="' +
      owlCarouselItem.image +
      '" alt=""></div><h5 class=" pt-4">' +
      owlCarouselItem.title +
      '</h5> <h6 class="text-secondary mb-3">' +
      owlCarouselItem.type +
      '</h6> <p class="mb-0" >' +
      owlCarouselItem.price +
      " تومان</p> </div>"
  );
});

function goldStar(numberGold) {
  //
  let iElem;
  let iElems = "";
  for (let i = 1; i <= 5; i++) {
    iElem = '<i class="fa fa-star"></i>';

    if (i <= numberGold) {
      iElem = '<i class="fa fa-star gold"></i>';
    }
    iElems += iElem;
  }
  return iElems;
}

section5OwlCarousel.forEach(function (product) {
  section5OwlStage.insertAdjacentHTML(
    "beforeend",
    '<div class="owl-item text-center">  <div class="mb-3"><img class="mx-auto" src="' +
      product.iconImage +
      '"></div><p class="category mb-1">' +
      product.type +
      '</p><p class="count">+ ' +
      product.number +
      "<span> کالا </span></p></div>"
  );
});

section7ProductsInfo.forEach(function (product) {
  section7Product.insertAdjacentHTML(
    "beforeend",
    '<div class=" col-md-6 col-lg-4 pl-0"> <div class="section7-product d-flex justify-content-center  m-1 py-3"> <div>  <img src="' +
      product.src +
      '" alt=""></div><div class="text-right mr-3 "><p>' +
      product.name +
      '</p> <div class= "mb-2"> ' +
      goldStar(product.star) +
      '</div><p><span class= "">' +
      product.price +
      '</span> تومان</p>  <div class="text-left">   <button class="btn btn-outline-info text-info ">جزئیات محصول</button> <button class="btn btn-outline-info text-info" onclick = "addProductToCart(event)" data-id = " ' +
      product.id +
      ' ">اضافه به سبد خرید</button>  </div></div> </div></div>'
  );
});

section7CarouselImage.forEach(function (image) {
  section7OwlStage.insertAdjacentHTML(
    "beforeend",
    ' <div class="owl-item d-flex justify-content-center align-items-center">  <img src="' +
      image.src +
      '" alt=""></div>'
  );
});

footerContacts.forEach(function (footerContact) {
  footerBelieveContainer.insertAdjacentHTML(
    "beforeend",
    ' <div class="footer-believe text-center"><a href=""><img src="' +
      footerContact.src +
      '" alt=""></a>  <p class="text-secondary mt-1">' +
      footerContact.text +
      "</p></div>"
  );
});

//////////////// jQuery code /////////////
$(document).ready(function () {
  $(".section1-owl-carousel .owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 15,
    nav: true,
    // responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  $(".section2-right-group .section2-owl-carousel .owl-carousel").owlCarousel({
    rtl: true,
    margin: 15,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  $(".section2-left-single .section2-owl-carousel .owl-carousel").owlCarousel({
    rtl: true,
    margin: 15,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    dots: true,
    // dotsData: true,
    // dotsContainer: '#container-dots',
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // const owl_dots = $(".section2-left-single .owl-carousel .owl-dots");
  // console.log(owl_dots);

  var section2Owldots = $$.querySelectorAll(
    ".section2-left-single .owl-carousel .owl-dot"
  );
  // console.log(section2Owldots);
  section2Owldots.forEach(function (owldot) {
    //
    // owldot.addEventListener("click", function(){
    //   // lineDynamicChild.classList.remove("addAnimation");
    //   lineDynamicChild.classList.add("addAnimation");

    // })
    // console.log(owldot);
    if (owldot.classList.contains("active")) {
      //
      lineDynamicChild.classList.add("addAnimation");

      lineDynamicChild.addEventListener("animationiteration", function (event) {
        // console.log(event);
        // lineDynamicChild.classList.remove("addAnimation");
      });
    }
  });

  $(".section5 .owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 5,
    // nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 8,
      },
    },
  });

  $(".section7 .owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 5,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });
});

///////////// Functions /////////////////////

let localStorageCartBasket;
let listOfCartProdutsArray = [];

function getLocalStorageFuncForCart(){
  localStorageCartBasket = JSON.parse(localStorage.getItem("localCartBasket"));
  
  if(localStorageCartBasket){
    listOfCartProdutsArray = localStorageCartBasket;
  }
  else{
    listOfCartProdutsArray = [];
  }
  createNewCartFunc(listOfCartProdutsArray);
  scrollbarCustom(listOfCartProdutsArray);
  sumCartFunc(listOfCartProdutsArray);
  // console.log("localStorageCartBasket:  ", localStorageCartBasket);
};

function changeColorFunc(event) {
  // console.log(event);
  let newColor = event.target.style.backgroundColor;
  // console.log(newColor);
  $$.documentElement.style.setProperty("--color-red", newColor);

  removeCheckPallet();
  event.target.firstChild.classList.add("fa-check");
}

function removeCheckPallet() {
  const checks = $$.querySelectorAll(".pallet-check");
  checks.forEach(function (checkOne) {
    checkOne.classList.remove("fa-check");
  });
}

let flag = false;
function showPalletColorFunc(event) {
  if (flag) {
    palletColor.style.left = "-160px";
    flag = false;
  } else {
    palletColor.style.left = "0";
    flag = true;
  }
}

function removeProductFromCart(event) {
  // let parent = event.target.parentElement.parentElement.parentElement;
  // parent.remove();

  let btnDataId = event.target.getAttribute("trash-id");

  listOfCartProdutsArray.forEach(function(product){
    if(product.id == btnDataId){
      let index = listOfCartProdutsArray.indexOf(product);
      listOfCartProdutsArray.splice(index,1);
    }
  })

  createNewCartFunc(listOfCartProdutsArray);
  // setLocalStorageFuncForCart(listOfCartProdutsArray);

  // scrollbarCustom(listOfCartProdutsArray);
  // sumCartFunc(listOfCartProdutsArray);
}

function addProductToCart(event) {
  let btnDataId = event.target.getAttribute("data-id");

  section7ProductsInfo.forEach(function (product) {

    if (product.id == btnDataId) {
     listOfCartProdutsArray.push(product);
    }
  });

  createNewCartFunc(listOfCartProdutsArray);

}

function createNewCartFunc(listProductsArray) {
 //
  kalaScrollable.innerHTML = "";

  listProductsArray.forEach(function(product){
    kalaScrollable.insertAdjacentHTML(
      "beforeend",
      ' <div class="py-3 pl-2 d-flex align-items-center justify-content-between select-product"> <img src="' +
        product.src +
        '" alt=""><div><p class="text-right kala-title">' +
        product.name +
        '</p><div class="d-flex justify-content-between align-items-center">  <div class="text-secondary d-flex justify-content-center justify-content-center">    <p class="ml-2 mb-0"> 1 <i class="fa fa-close"></i> <span>|</span></p>    <div class="kala-color ml-1 "></div>    <p class="mb-0">آبی</p>  </div>  <i class="fa fa-trash trash mb-1 text-secondary" onclick = "removeProductFromCart(event)" trash-id = " ' +
        product.id +
        ' "></i>  </div><p class="text-right mb-0 mt-1"><span class="ml-1 price-product">' +
        product.price +
        "</span>تومان</p> </div></div>"
    );
  })

  scrollbarCustom(listProductsArray);
  sumCartFunc(listProductsArray);
  setLocalStorageFuncForCart(listProductsArray)
}

function sumCartFunc(listProductsArray) {
  let sum = 0;
  let price;
  let correctPrice;

  listProductsArray.forEach(function(product){
    price = product.price;
    correctPrice = price.split(",").join("");
    sum += Number(correctPrice);
  })

  let dotDigitInSum = sum.toString().split(".");
  dotDigitInSum[0] = dotDigitInSum[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  sumCartBasket.innerHTML = dotDigitInSum[0];

  numberProductsInBasket.forEach(function (element) {
    element.innerHTML = listProductsArray.length;
  });

  if (sum == 0) {
    cartBasketBtn.style.display = "none";
  } else {
    cartBasketBtn.style.display = "block";
  }
}

//////// create custom scroolbar
function scrollbarCustom(listProductsArray) {
  //
  let count = listProductsArray.length;
  console.log("count: ", count);
  if (count == 1) {
    $(".kala-container").css("height", "100px");
  } else if (count == 0) {
    $(".kala-container").css("height", "auto");
  } else {
    $(".kala-container").css("height", "255px");
  }

  let scrollable = $(".kala-scrollable");
  // let scrollable = $$.querySelector(".kala-scrollable");

  let scrollbar = $(".kala-scrollbar");
  // let scrollbar = $$.querySelector(".kala-scrollbar");

  let height = scrollable.outerHeight(true); // visible height

  let scrollHeight = scrollable.prop("scrollHeight"); // total height
  // let scrollHeight = scrollable.scrollHeight;

  let barHeight = (height * height) / scrollHeight; // Scrollbar height!

  console.log("height of scrollable:", height);
  console.log("scrollHeight of scrollable: ", scrollHeight);
  console.log("scrollHeight of barHeight: ", barHeight);

  // Scrollbar drag:
  scrollbar.height(barHeight).draggable({
    axis: "y",
    containment: "parent",
    drag: function (e, ui) {
      scrollable.scrollTop((scrollHeight / height) * ui.position.top);
    },
  });

  // Element scroll:
  $(".kala-scrollable").on("scroll", function () {
    $(".kala-scrollbar").css({
      top: (scrollable.scrollTop() / height) * barHeight,
    });
  });
}

function setLocalStorageFuncForCart(listOfCartProdutsArray){
  localStorage.setItem("localCartBasket", JSON.stringify(listOfCartProdutsArray));
}

let headerTabTop = headerTab.getBoundingClientRect().top;
// console.log( "headerTabTop = ",headerTabTop);
function stickyForNavbarFunc(event) {
  //sticky Position With Scroll For Navbar  create custom scroolbar for cart basket
  //
  let scorllTop = $$.documentElement.scrollTop;
  let scorlly = window.scrollY;
  // console.log(scorllTop);
  if (scorlly > headerTabTop) {
    header.classList.add("stickyNav");
    headerNavbar.classList.add("show-nav");
  } else {
    header.classList.remove("stickyNav");
    headerNavbar.classList.remove("show-nav");
  }
}

// function for main carosel image
var sliderInterval = null;
mySetInterval();
function mySetInterval(indexShow) {
  //
  clearInterval(sliderInterval);

  if (!indexShow) {
    indexShow = 0;
  }
  sliderInterval = setInterval(function () {
    // console.log(indexShow);
    indexShow++;

    indexShow = alignIndexSlideSHow(indexShow);
    imageSliderFunc(indexShow);
  }, 5000);
}

function alignIndexSlideSHow(indexShow) {
  if (indexShow >= carouselImages.length) {
    indexShow = 0;
  } else if (indexShow < 0) {
    indexShow = carouselImages.length - 1;
  }
  return indexShow;
}

function imageSliderFunc(index) {
  //
  imageSlide.src = carouselImages[index].src;
  imageSlide.classList.add("image-animation");

  imageSlide.addEventListener("animationiteration", function () {
    imageSlide.classList.remove("image-animation");
  });
  removeClassFromNumberSlide();
  numberSlideParent.children[index].classList.add("number-slide-active");
}

function removeClassFromNumberSlide() {
  let children = $$.querySelectorAll(".number-slide div");
  children.forEach(function (child) {
    child.classList.remove("number-slide-active");
  });
}
// function for selec image caruosel with click on bottom dots
function selectSameSlide(event) {
  console.log(event);
  let nameImage = event.target.getAttribute("name-image");

  carouselImages.forEach(function (carouselImage) {
    if (carouselImage.name == nameImage) {
      let indexCarouselImage = carouselImages.indexOf(carouselImage);
      imageSliderFunc(indexCarouselImage);
      mySetInterval(indexCarouselImage);
    }
  });
}

function previousSlideFunc() {
  previousAndNextSlide(-1);
}

function nextSlideFunc() {
  previousAndNextSlide(+1);
}

function previousAndNextSlide(newIndex) {
  let imageSrc = imageSlide.getAttribute("src");

  carouselImages.forEach(function (carouselImage) {
    if (carouselImage.src == imageSrc) {
      let indexCarouselImage = carouselImages.indexOf(carouselImage);
      indexCarouselImage = alignIndexSlideSHow(indexCarouselImage + newIndex);
      imageSliderFunc(indexCarouselImage);
      mySetInterval(indexCarouselImage);
    }
  });
}

let navItemChild;
function showContentNavbarItem(event) {
  //
  // $(event.target.children[1]).show();
  navItemChild = event.target.children[1];
  console.log(navItemChild);
  if (navItemChild) {
    navItemChild.classList.add("active");
  }
}

function hideContentNavbarItem(event) {
  //
  // $(event.target.children[1]).hide();
  navItemChild = event.target.children[1];
  if (navItemChild) {
    navItemChild.classList.remove("active");
  }
}

let activeContainer;
function showContainerChild(event) {
  // console.log(event.target.children[1].firstElementChild);

  let myClassifications = $$.querySelectorAll(".my-classification");
  myClassifications.forEach(function (myClassification) {
    myClassification.classList.remove("my-classification-active");
  });

  $(".classification-item").removeClass("classification-item-active");

  activeContainer = event.target.children[1];

  activeContainer.classList.add("my-classification-active");
  event.target.classList.add("classification-item-active");
}

function showSubtitleINSideMenu(showSubtitle, subClass, event) {
  if (showSubtitle) {
    if (flag) {
      //
      let value = showSubtitle.classList.contains("show-subtitle");
      if (value) {
        showSubtitle.classList.remove("show-subtitle");
        event.target.classList.remove("after-angle-up");
        flag = false;
      } else {
        $("." + subClass + "").removeClass("show-subtitle");
        showSubtitle.classList.add("show-subtitle");

        removeAngleUpFunc();
        event.target.classList.add("after-angle-up");

        flag = true;
      }
    } else {
      $("." + subClass + "").removeClass("show-subtitle");
      showSubtitle.classList.add("show-subtitle");

      removeAngleUpFunc();
      event.target.classList.add("after-angle-up");

      flag = true;
    }
  }

  // console.log(sideMenuItemTitle.textContent, " : ", flag);
}

function removeAngleUpFunc() {
  let angleDowns = $$.querySelectorAll(".after-angle-down");
  angleDowns.forEach(function (angleDown) {
    if (angleDown.nextElementSibling) {
      let showSubtitle =
        angleDown.nextElementSibling.classList.contains("show-subtitle");
      if (!showSubtitle) {
        angleDown.classList.remove("after-angle-up");
      }
    }
  });
}

function showNavbarVirtical() {
  collapseMenu.classList.add("show-menu");
  sideMenu.classList.add("show-side-menu");
  layoutMenu.classList.add("show-layout-menu");
}

function hideNavbarVertical() {
  sideMenu.classList.remove("show-side-menu");
  layoutMenu.classList.remove("show-layout-menu");

  setTimeout(function () {
    collapseMenu.classList.remove("show-menu");
  }, 700);
}

//////////////////////////// Event for Tag //////////////////

window.addEventListener("scroll", stickyForNavbarFunc);
window.addEventListener("load", getLocalStorageFuncForCart);

containerCog.addEventListener("click", showPalletColorFunc);

navItems.forEach(function (navItem) {
  navItem.addEventListener("mouseenter", showContentNavbarItem);
  navItem.addEventListener("mouseleave", hideContentNavbarItem);
});

classificationItems.forEach(function (classificationItem) {
  classificationItem.addEventListener("mouseenter", showContainerChild);
});

collapseButton.addEventListener("click", showNavbarVirtical);
layoutMenu.addEventListener("click", hideNavbarVertical);

cartBasketSeeTrashs.forEach(function (trash) {
  trash.addEventListener("click", removeProductFromCart);
});

sideMenuItemTitles.forEach(function (sideMenuItemTitle) {
  //
  sideMenuItemTitle.children[0].addEventListener("click", function (event) {
    // event.target.classList.remove("after-angle-down");
    console.log(event.target.classList);

    let showSubtitle = sideMenuItemTitle.children[1];

    showSubtitleINSideMenu(showSubtitle, "subtitle-1", event);
  });
});

subtitle1Items.forEach(function (subtitle1Item) {
  subtitle1Item.children[0].addEventListener("click", function (event) {
    let showSubtitle = subtitle1Item.children[1];

    showSubtitleINSideMenu(showSubtitle, "subtitle-2", event);
  });
});

preSlide.addEventListener("click", previousSlideFunc);
nextSlide.addEventListener("click", nextSlideFunc);
