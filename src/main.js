import './style.css';
import axios from 'axios';

let users = [];

const instanceAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Se crea la función que hace la llamada a la API
const button = document.querySelector('button');
button?.addEventListener('click', () => {
  getData();
});

// Selecciona correctamente el botón usando su ID
const buttonClear = document.querySelector('#btn-clear');
const list = document.querySelector('ul');

// Define primero la función 'clearLista'
const clearLista = () => {
  list.innerHTML = ""; // Borra todos los elementos de la lista
};

// Agrega el event listener para el botón 'Clear'
buttonClear?.addEventListener('click', () => {
  clearLista();
});

// Función para obtener los datos
const getData = async () => {
  if (list.children.length > 0) {
    return; // Si la lista ya tiene elementos, no hace nada
  }
  const res = await instanceAxios.get('/users');
  console.log(res);
  users = res.data;

  // Se selecciona el elemento 'ul' y se agregan los usuarios
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    list.append(li);
  });
};
