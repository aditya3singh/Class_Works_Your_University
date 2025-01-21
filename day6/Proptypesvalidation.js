// Use PropTypes to validate the props of a component Product that takes name, price, and 
// isAvailable. Make sure to enforce that name is a string, price is a number, and isAvailable is a boolean. 

function Proptypesvalidation(props){
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Price: {props.price}</h1>
            <h1>Is Available : {props.isAvailable || "false "}</h1>
        </div>

    );
}

Proptypesvalidation.prototype = {
    name: Proptypesvalidation.string,
    price: Proptypesvalidation.number,
};


export default Proptypesvalidation;
