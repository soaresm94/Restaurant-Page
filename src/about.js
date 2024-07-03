export {aboutPageLoad};

function aboutPageLoad(){
    const h1 = document.createElement("h1");
    h1.textContent = "CONTACT US"
    content.appendChild(h1);


    const contact = document.createElement("h3");
    contact.classList.add("text");
    contact.textContent = "Chef Zeus, the Golden Retriever";
    content.appendChild(contact);

    const profession = document.createElement("div");
    profession.classList.add("text");
    profession.textContent = "The Chef";
    content.appendChild(profession);

    const number = document.createElement("div");
    number.classList.add("text");
    number.textContent = "123-456-6891";
    content.appendChild(number);

    const email = document.createElement("div");
    email.classList.add("text");
    email.textContent = "chefzeus@email.com";
    content.appendChild(email);


};