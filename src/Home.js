import { useState } from "react";
const Home = () => {
    const [name, setName] = useState('crystal'); // name is the state variable, setName is the function to update the state variable, 'crystal' is the initial value of the state variable
    const [age, setAge] = useState(25); // age is the state variable, setAge is the function to update the state variable, 25 is the initial value of the state variable




    const handleClick = () => {
      
       setName('Crystal Blue'); // setName is the function to update the state variable
         setAge(30); // setAge is the function to update the state variable
    }

 

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age  } years old </p>
            {/* handleClick() or handleClick('crystal') will invoke the fuction automatically*/}
            <button onClick={handleClick}>Click me</button>
           
        </div>
    );
}
 
export default Home;