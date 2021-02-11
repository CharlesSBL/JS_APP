// ////////////////////////////////: Get-elements :\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const html = document.querySelector("html");
// const body = document.querySelector("body");

// ////////////////////////////////: HTML :\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const container = document.createElement("div");
// container.setAttribute("class", "container");
// body.appendChild(container);

// const info = document.createElement("div");
// info.setAttribute("class", "info");
// container.appendChild(info);
// info.innerHTML = "Javascript Quote Generator";

// const card = document.createElement("div");
// card.setAttribute("class", "card");
// container.appendChild(card);

// const text = document.createElement("p");
// text.setAttribute("class", "text");
// card.appendChild(text);
// text.innerHTML = "Quote";

// const author = document.createElement("p");
// author.setAttribute("class", "author");
// card.appendChild(author);
// author.innerHTML = "Author";

// const button = document.createElement("a");
// button.setAttribute("class", "button");
// card.appendChild(button);
// button.innerHTML = "New Quote";

// ////////////////////////////////: CSS :\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// html.style.padding = 0;
// html.style.margin = 0;
// html.style.boxSizing = "border-box";

// button.style.textDecoration = "none";

// body.style.background = "url(./img/main.webp) no-repeat fixed center";
// body.style.backgroundSize = "cover";
// body.style.display = "flex";
// body.style.alignContent = "center";
// body.style.justifyContent = "center";
// body.style.paddingTop = "10vh";

// container.style.display = "flex";
// container.style.alignContent = "center";
// container.style.justifyContent = "center";
// container.style.flexDirection = "column";
// container.style.maxWidth = "700px";

// info.style.backgroundColor = "black";
// info.style.color = "white";
// info.style.padding = "10px 50px";
// info.style.fontSize = "2rem";
// info.style.border = "1px solid white";
// info.style.borderRadius = "5px";
// info.style.textAlign = "center";
// info.style.margin = "25px auto";

// card.style.background = "white";
// card.style.padding = "50px";
// card.style.borderRadius = "25px";
// card.style.boxShadow = "0 0 10px black";
// card.style.display = "flex";
// card.style.flexDirection = "column";
// card.style.alignItems = "center";
// card.style.justifyContent = "center";

// text.style.fontSize = "1.5rem";
// text.style.maxWidth = "500px";
// text.style.textAlign = "center";

// author.style.color = "green";
// author.style.fontSize = "2rem";

// button.style.fontSize = "1.5rem";
// button.style.padding = "10px 25px";
// button.style.background = "black";
// button.style.color = "white";
// button.style.borderRadius = "10px";
// button.style.cursor = "pointer";

// ////////////////////////////////: JS :\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // DATA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const textArray = [
//   "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
//   "When you reach the end of your rope, tie a knot in it and hang on.",
//   "Always remember that you are absolutely unique. Just like everyone else.",
//   "Don't judge each day by the harvest you reap but by the seeds that you plant.",
//   "The future belongs to those who believe in the beauty of their dreams.",
//   "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
//   "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
//   "It is during our darkest moments that we must focus to see the light.",
//   "Whoever is happy will make others happy too.",
//   "Do not go where the path may lead, go instead where there is no path and leave a trail.",
// ];

// const authorArray = [
//   "Mother Teresa",
//   "Franklin D. Roosevelt",
//   "Margaret Mead",
//   "Robert Louis Stevenson",
//   "Eleanor Roosevelt",
//   "Benjamin Franklin",
//   "Helen Keller",
//   "Aristotle",
//   "Anne Frank",
//   "Ralph Waldo Emerson",
// ];

// let count = 0;

// // Event >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// button.addEventListener(
//   "click",
//   (event) => {
//     count++;

//     if (count == 10) {
//       count = 0;
//     }

//     text.innerHTML = textArray[count];
//     author.innerHTML = authorArray[count];
//   },
//   false
// );
