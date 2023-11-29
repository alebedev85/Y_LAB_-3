import React from 'react';
import {createRoot} from 'react-dom/client';
import {generateCode} from './utils.js';
import App from './app.js';
import Store from './store.js';

const items = new Store({
  list: [
    {code: generateCode(), title: 'Название товара', price: 100.0},
    {code: generateCode(), title: 'Книга про React', price: 770},
    {code: generateCode(), title: 'Конфета', price: 33},
    {code: generateCode(), title: 'Трактор', price: 7955320},
    {code: generateCode(), title: 'Телефон iPhone XIXV', price: 120000},
    {code: generateCode(), title: 'Карандаши цветные', price: 111},
    {code: generateCode(), title: 'Товар сюрприз', price: 0},
  ]
});

const cart = new Store({
  list: []
});

const root = createRoot(document.getElementById('root'));

items.subscribe(() => {
  root.render(<App items={items} cart={cart}/>);
});

// Первый рендер приложения
root.render(<App items={items} cart={cart}/>);
