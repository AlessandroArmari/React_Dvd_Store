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
  const [addToBasket, setAddToBasket] = useState(); //--->default value is "0"
  const [showBasket, setShowBasket] = useState(false); //--->to set the basket visibility
  return (
    <div>
      {/* here I'm saying:
      because of the  {} --->  this input is a js item
      && is similar to an if sentence:
      "if showBasket AND input_item (which is ALWAYS true here) ARE BOTH TRUE"--->
      --->&& returns the last item of the list
      --->so it will return input item 
      So, ONLY IF showBasket is true, the input will be shown!*/}
      {showBasket && <input placeholder="Basket" value={addToBasket} />}
      <div>
        {list.map((elem, index) => {
          //CREATE FUNCTION IN ORDER TO ASSIGN IT LATER TO THE onClik events

          var removeButtonFunction = (addToBasket) => {
            //FIRST part:

            setAddToBasket(addToBasket.target.value--);
            //SECOND part:

            console.log(
              "You've removed: " + elem.dvd_name + " from the basket"
            );
            //THIRD part:

            setShowBasket(true);
          };
          //This functions must be located HERE: Where they can find the variables they need to work
          //Not inside the return down here, not outside (they won't find the variables")

          return (
            <Card
              key={index}
              dvd_name={elem.dvd_name}
              dvd_price={elem.dvd_price}
              addButton={(addToBasket) => {
                //+++FOR THE addButton I'm typing the function here+++
                //+++GO DOWN TO removeButton for see something else!
                //FIRST part:

                var increasingValue = addToBasket.target.value++;
                setAddToBasket(increasingValue);
                //SECOND part:

                console.log(
                  "You've added: " +
                    elem.dvd_name +
                    " (item_number: " +
                    index +
                    "), price: " +
                    elem.dvd_price +
                    ", to the basket"
                );
                //THIRD part (change basket visibility whit showBasket)

                setShowBasket(true); //--->changing the default value (false) of ShowBasket to "true"
              }} //--->once we cliccked once, it will be "true, NOW GO TO INPUT, above"
              removeButton={removeButtonFunction}
              // Here I do not type the function directly!
              // Assigning to the <Card/> props."removeButton"
              // the functions I declared above.
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
