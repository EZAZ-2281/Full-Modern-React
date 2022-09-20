import { useState } from "react";

const Home = () => {
    //react hook is just like a functin which doing a task. 
    const [name, setName] = useState('kibria');
    const [age, setAge] = useState(22);
    const handleClick = () =>{
        setName('ezaz'); 
        setAge('21');
    }

    return (
      <div className="home">
        <h2>Homepage</h2>
        <p>{name} is {age} years old.</p>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  }
   
  export default Home;