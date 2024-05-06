const Home = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log('hello, crystal', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            {/* handleClick() or handleClick('crystal') will invoke the fuction automatically*/}
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('crystal', e)}>Click me again</button>
        </div>
    );
}
 
export default Home;