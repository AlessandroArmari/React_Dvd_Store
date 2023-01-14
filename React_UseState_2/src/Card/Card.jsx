//Here I am assigning "addButton" and "removeButton" as props. to
// the button onClick  events!

const Card = ({ dvd_name, dvd_price, index, addButton, removeButton }) => {
  return (
    <div>
      <h2>Component "Card"</h2>
      <p>{dvd_name}</p>
      <p>{dvd_price}</p>
      <span>{index}</span>
      <button onClick={addButton}>+</button>
      <button onClick={removeButton}>-</button>
    </div>
  );
};

//GO TO ---: App.jsx

export { Card };
