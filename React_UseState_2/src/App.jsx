import { useState } from "react";
import "./App.css";
import { Card } from "./Card/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

var list = [
  { dvd_name: "Con_Air", dvd_price: 9.9 },
  { dvd_name: "Die_Hard", dvd_price: 7.9 },
  { dvd_name: "Citizen Kane", dvd_price: 11.9 },
];
function App() {
  //Declaring the "hook"
  //Remember to import { useState }
  const [basketValue, setBasketValue] = useState(0); //--->default value is "0"

  //Whene we click---> No-Name function starts--->it sets {basketValue} --->
  //---> as what it finds within the (basketValue + 1)

  const functionToRemoveInsteadOfAnonymousFunction = () => {
    setBasketValue(basketValue - 1);
    console.log("You've removed an item from the basket!");
  };

  return (
    <div>
      <div className="d-flex justify-content-around align-items-center bg-primary ">
        <h2>DVD_Store "Armandus-3000"</h2>
        <div className="text-center strong border border-3 border-danger m-2 ">
          <div className="p-2 ">
            <strong> Basket:</strong>
          </div>
          <div className="border-top border-danger p-1">
            <strong>{basketValue}</strong>
          </div>
        </div>
      </div>

      {list.map((elem, index) => {
        return (
          <>
            <Card
              key={index}
              dvd_name={elem.dvd_name}
              dvd_price={elem.dvd_price}
              addButton={() => {
                setBasketValue(basketValue + 1);
                console.log("You've added an item to the basket");
              }}
              removeButton={functionToRemoveInsteadOfAnonymousFunction}

              //2 way for doing the same thing:
              //---> addButton--->I wrote the function there as props.
              //---> removeButton--->I invoke the function i previously typed
            />
          </>
        );
      })}

      {/* <Card
        dvd_name={list[0].dvd_name}
        dvd_price={list[0].dvd_price}
        addButton={() => {
          setBasketValue(basketValue + 1);
          console.log("You've added an item to the basket");
        }}
        removeButton={functionToRemoveInsteadOfAnonymousFunction}

        //2 way for doing the same thing:
        //---> addButton--->I wrote the function there as props.
        //---> removeButton--->I invoke the function i previously typed
      /> */}
    </div>
  );
}
export default App;
