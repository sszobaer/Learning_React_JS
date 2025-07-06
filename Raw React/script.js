let h1 = document.createElement('h1');
console.log(h1);
h1.innerHTML = 'Hello, From JS!';
h1.style.color = 'yellow';
h1.style.fontSize = '2em';
let root = document.querySelector('.root');
root.appendChild(h1);
let h2 = React.createElement('h2', null, 'Hello, From React!');

let rootFromReact=ReactDOM.createRoot(root);
rootFromReact.render(h2);

console.log(h2);