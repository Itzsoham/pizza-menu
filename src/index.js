import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// we nested pizza component in this App compnet by calling it inside but we should not nest functions like not create it nested way just call them.

function Header() {
  //   var headerStyle = {
  //     color: "red",
  //     textAlign: "center",
  //     textTransform: "uppercase",
  //   };
  var headerStyle = {};

  return (
    <header className="header">
      <h1 style={headerStyle}>K1NGSCLAN PIZZA CO.</h1>
    </header>
  );
}

function Menu() {
  let pizzas = pizzaData;
  // var pizzas = [];
  var numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 && (
        <>
          <p>
            In K1NGSCLAN we are currently serving {numPizzas} types of cousines and in
            future we might increase the numbers.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      )}

      {/* <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={18}
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="pizzas/salamino.jpg"
        price={15}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li
      className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}
    `}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price} </span>
      </div>
    </li>
  );
}

function Footer() {
  let hour = new Date().getHours();
  let openHour = 10;
  let closeHour = 20;
  let isOpen = hour >= openHour && hour <= closeHour;

  //   if (hour >= openHour || hour <= closeHour) alert("We are open!!");
  //   else alert("We are cunrently closed!!");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order CloseHours={closeHour} OpenHour={openHour} />
      ) : (
        <p>
          We are happy to welcome you in between {openHour}:00 and {closeHour}
          :00.
        </p>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "We are currently open!");
}

function Order({ CloseHours, OpenHour }) {
  return (
    <div className="order">
      <p>
        We're currently open from {OpenHour}:00 to {CloseHours}:00. Come visit
        us or Order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  //Strict mode used to find bugs coz it's render 2 times componet and find outdated APIs nothing specail still prefre to use it when deploping Apps
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
