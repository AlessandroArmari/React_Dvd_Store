import { useState } from "react";
import "./App.css";
import { Card } from "./Card/Card";

var list = [
  { dvd_name: "Con_Air", dvd_price: 9.9 },
  { dvd_name: "Die_Hard", dvd_price: 7.9 },
  { dvd_name: "Citizen Kane", dvd_price: 11.9 },
];
function App() {
  //Declaring the "hook"
  //Remember to import { useState }
  const [addToBasket, setAddToBasket] = useState(0); //--->default value is "0"

  return (
    <div>
      <input placeholder="Basket" value={addToBasket} />
      <div>
        {list.map((elem, index) => {
          //ADDING FUNCTIONS TO ASSIGN TO THE onClik events
          /*1 function*/
          //this function does two operations!

          //FIRST:
          var addButtonFunction = (addToBasket) => {
            setAddToBasket(addToBasket.target.value++);
            //SECOND:

            console.log(
              "You've added: " +
                elem.dvd_name +
                " (item_number: " +
                index +
                "), price: " +
                elem.dvd_price +
                ", to the basket"
            );
          };
          /*2 function*/
          var removeButtonFunction = (addToBasket) => {
            setAddToBasket(addToBasket.target.value--);

            console.log(
              "You've removed: " + elem.dvd_name + " from the basket"
            );
          };
          //This functions must be located HERE: Where they can find the variables they need to work
          //Not inside the return down here, not outside (they won't find the variables")

          return (
            <Card
              key={index}
              dvd_name={elem.dvd_name}
              dvd_price={elem.dvd_price}
              addButton={addButtonFunction}
              removeButton={removeButtonFunction}
              // Assigning to the <Card/> props. "addButton" and "removeButton"
              // the functions I declared above
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
