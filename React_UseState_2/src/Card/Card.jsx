//Here I am assigning "addButton" and "removeButton" as props. to
// the button onClick  events!

const Card = ({ dvd_name, dvd_price, index, addButton, removeButton }) => {
  return (
    <div className="m-3 d-flex flex-column w-25 bg-warning border border-4 border-danger rounded">
      <p className="  p-1 ">Movie: {dvd_name}</p>
      <p className=" p-1 m-1">Price: {dvd_price}</p>
      <button
        className="d-inline-flex align-self-start m-2 border rounded"
        onClick={addButton}
      >
        +
      </button>
      <button
        className="d-inline-flex align-self-start m-2 border rounded"
        onClick={removeButton}
      >
        -
      </button>
    </div>
  );
};

//GO TO ---: App.jsx

export { Card };
