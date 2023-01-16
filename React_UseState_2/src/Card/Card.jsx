//Here I am assigning "addButton" and "removeButton" as props. to
// the button onClick  events!

const Card = ({ dvd_name, dvd_price, addButton, removeButton }) => {
  return (
    <div className="m-3 d-flex flex-column w-25 bg-warning border border-4 border-danger rounded">
      <div className="  p-1 ">Movie: {dvd_name}</div>
      <p className="  m-1">Price: {dvd_price}</p>
      <button
        className="d-inline-flex align-self-start bg-danger m-2 border border-danger rounded"
        onClick={addButton}
      >
        +
      </button>
      <button
        className="d-inline-flex align-self-start bg-danger m-2 border border-danger rounded"
        onClick={removeButton}
      >
        -
      </button>
    </div>
  );
};

//GO TO ---: App.jsx

export { Card };
