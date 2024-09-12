import '/style.scss'


const container= document.querySelector('#app');

const h1 = document.createElement('h1');
h1.textContent = "Hello World!";
h1.className = 'message';

const button = document.createElement('button');
button.textContent = "Click Me";
button.className = "btn-toggler";


container.append(h1, button)


button.addEventListener('click', () => {
  if (h1.textContent === "Hello World!") {
      h1.textContent = "Goodbye World!";
      h1.style.color = "purple"; 
      button.textContent="Click me again"
  } else {
      h1.textContent = "Hello World!";
      h1.style.color = "blue";  
      button.textContent="Click me"
  }


});
