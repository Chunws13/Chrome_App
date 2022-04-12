const images = [
    "baduck.jpg"
];

const chose_img = images[Math.floor(Math.random() * images.length)];
const background_img = document.createElement("img");
background_img.src = `${chose_img}`;

document.body.appendChild(background_img);
console.log(background_img);