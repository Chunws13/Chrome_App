const images = [
    "baduck.png"
];

const chose_img = images[Math.floor(Math.random() * images.length)];
const background_img = document.createElement("img");
background_img.src = `${chose_img}`;
background_img.classList.add("backimg");

document.body.appendChild(background_img);
// document.body.style.backgroundImage = `url(${chose_img})`;
