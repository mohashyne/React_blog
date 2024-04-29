import './App.css';

function App() {
const  title = 'Welcome to the new blog';
const likes = 50;
const link = "http://www.google.com";

// we cannot display objects directly in JSX
const person = { name: 'Muhammad', age: 25 };

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>

        {/* <p>{ person }</p> */}

        {/* <p>{ person.name }</p> */}
        
        {/* To access object properties in JSX, we need to use the curly braces syntax. */}
        {/* We can also add a default value to the object property in case it is undefined. */}
        <p>The author of this blog is { person.name }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>
        <a href={link}>Google It</a>
        <hr />

      

        {/* Conditional rendering using if  */}
        {/* if statement is not allowed in JSX */}
        {/* if we want to use if statement, we need to use ternary operator */}
        {/* { if(true) { return 'true' } else { return 'false' } } */}
        { true ? <p>True</p> : <p>False</p> }
        { false ? <p>True</p> : <p>False</p> }

        {/* Showing elements based on the condition */}
        { /* If the condition is true, the element will be displayed. */}
        { /* If the condition is false, the element will not be displayed. */}
        {/* <div>Only shown when condition is true</div> */}
        {/* Only Shown When The L Condition Is True */}

      </div>
    </div>
  );
}

export default App;
