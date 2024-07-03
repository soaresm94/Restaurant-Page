export{homePageLoad};

function homePageLoad(){
        const h1 = document.createElement("h1");
        h1.textContent = "CHEF ZEUS RESTAURANT"
        content.appendChild(h1);

        const img = document.createElement("img");
        img.setAttribute("src","../src/img/golden.png");
        content.appendChild(img);

        const text = document.createElement("div");
        text.classList.add("text");
        text.textContent = "Woof! This is the best restaurant in the world. Woof!";
        content.appendChild(text);
    
};




