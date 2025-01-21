// .Basic Prop Passing: 
// •Create a functional component called Greeting that accepts a prop named name and displays 
// "Hello, {name}!" in an <h1> tag. 

function Reactprops(props) {
    const Greeting = () => {
        return (
            <h1>Hello, {props.name}!</h1>
        );
    };

    return (
        <div>
            <Greeting />
        </div>
    )
}

export default Reactprops;
