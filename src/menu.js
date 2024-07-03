export {menuPageLoad};

function menuPageLoad(){    
    function newProduct(product,productImg,productText,productPrice){
        this.product = product;
        this.productText = productText;
        this.productPrice = productPrice;

        const productDiv = document.createElement("div");
        productDiv.classList.add("productDiv");
        content.appendChild(productDiv);

        const item = document.createElement("h3");
        item.textContent = product;
        productDiv.appendChild(item);
    
        const image = document.createElement("img");
        image.setAttribute("src",productImg);
        productDiv.appendChild(image);

        const description = document.createElement("div");
        description.classList.add("text");
        description.textContent = productText;
        productDiv.appendChild(description);
        
        const price = document.createElement("div");
        price.classList.add("text");
        price.textContent = productPrice;
        price.style.fontWeight = "bold";
        productDiv.appendChild(price);
    };

    const menu = document.createElement("h1");
    menu.textContent = "MENU"
    content.appendChild(menu);


    const beverages = document.createElement("h2");
    beverages.textContent = "Beverages"
    content.appendChild(beverages);

    const product1 = new newProduct("Puppy Milk","../src/img/bottle-fed-feat.webp","A warm and sweet milk that little cute puppies enjoy a lot!","10$");
    const product2 = new newProduct("Watermelon Juice","../src/img/watermelon.webp","A cold and delicious watermelon juice, great option for the summer!","5$");

    const food = document.createElement("h2");
    food.textContent = "Food"
    content.appendChild(food);

    const product3 = new newProduct("Steak","../src/img/steak.jpg","A hot and juicy steak, you know I love it!","30$");
};



