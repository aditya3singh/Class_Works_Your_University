function SportsEvent() {
    const Game = () => {
        return (
            alert('Game is on!')
        );
    }
    return (
        <button onClick={Game}>Click Here</button>
    );
}

export default SportsEvent;
