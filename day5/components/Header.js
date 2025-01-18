function Header() {
    let name = "LPU";
    const student = {
        name: "Aditya",
        regno: 11614798,
        branch: "CSE",
    }
    return (
        <>
        <p>My first react app </p>
        <p>LPU</p>
        <p>Welcome to {name}</p>
        <p>regno: {student.regno}</p>
        <p>batch name is {student.branch}</p>
        </>
    )
}

export default Header;

