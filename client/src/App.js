import React from "react";
import AppNavbar from "./components/AppNavbar";
import shoppingList from "./components/shoppingList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ShoppingList from "./components/shoppingList";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ShoppingList></ShoppingList>
    </div>
  );
}

export default App;
