let rootEl = document.getElementById("root");
let newEl = document.createElement("h1");
newEl.textContent = "This is a new paragraph created with JavaScript!";
newEl.className = "header";
rootEl.appendChild(newEl);

/* 
import React from "react";
import ReactDOM from "react-dom";

const page = (
  <div>
    <img src="/react-logo.png" alt="" style="width: 40px" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);


ReactDOM.render(page, document.getElementById("root"));
*/

/* 1. Why do we need to `import React from "react"` in our files?
So that we can have access to the global React Dom and to import React library to our JavaScript file. 
React is what defines JSX.

2. If I were to console.log(page) in index.js, what would show up?
JavaScript Object. React elements that describe what React should
eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
It has 2 parents. We need our JSX to be nested under a single parent element

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative:

What to do: In declarative programming, you focus on describing the desired outcome or result without specifying the step-by-step instructions or details of how to achieve it.
Imperative:


How to do it: In imperative programming, you provide explicit instructions on how to perform a task. You outline the step-by-step procedure and control the flow of execution.
Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.


5. What does it mean for something to be "composable"?
n software engineering, "composable" refers to the property of being able to combine smaller, simpler components or building blocks to create more complex systems or functionalities. 
We have small pieces that we can put together to make something
larger/greater than the individual pieces.

*/

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 /**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page



import React from "react";
import ReactDOM from "react-dom";

function MyPage() {
    return (
       <div>
   
    <ul>
      <li>It is declarative</li>
      <li>It's component are reusable</li>
      <li>It is composable</li>
      <li>It is widely used in companies</li>
      <li>It has less bugs</li>
    </ul>
  </div> 
    )
}



ReactDOM.render(<MyPage />, document.getElementById("root"));

 */

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

/* 
import React from "react"
import ReactDOM from "react-dom"

function Page() {
    return (
        <div>
          <header>
        
        <nav>
            <img src="./react-logo.png" alt="react-image"  width="40px"/>
      
        </nav>

 </header>
 <h1>Reasons
  I'm excited to learn React</h1>
        <ol>
            <li>It's a popular library, so I'll be 
            able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
            if I know React</li>
        </ol>
        <footer>
        <p>© 2024 Nwankwo development. All rights reserved.</p>
        </footer>
         </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

*/

/*

Quiz!

1. What is a React component?

In React, a component is a reusable, self-contained unit of code that defines a specific part of a user interface. 
A function that returns React elements. (UI)

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
The function name is supposed to be in pascalcase notation.

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
This Header() is supposed to be in this form <Header />

*/

import React from "react";
import ReactDOM from "react-dom";

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"


function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" width="40px" />
      </nav>
    </header>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <div>
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
          <li>
            It's a popular library, so I'll be able to fit in with the cool
            kids!
          </li>
          <li>I'm more likely to get a job as a developer if I know React</li>
        </ol>
        <footer>
          <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
      </div>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));

*/

/*

import React from "react"
import ReactDOM from "react-dom"


Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.


function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
    )
}

function MainContent() {
    return (
        <div>
       <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol> 
            
            </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            
            <Footer />
            
            <MainContent />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
*/

/* 1. What do props help us accomplish?
Make a component more reusable.


2. How do you pass a prop into a component?
<MyAwesomeHeader title="???" />


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
An object!
This object contains key-value pairs, where the keys are the names of the props, and the values are the data passed from the parent component. 
*/

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared

const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squares = nums.map(function(num) {
    return num * num
})

// console.log(squares)

*/

/*
const names = ["alice", "bob", "charlie", "danielle"];
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalized = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});

console.log(capitalized);

*/

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]


const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const wrappedPokemon = pokemon.map((name) => {
    return `<p>${name}</p>`
});

console.log(wrappedPokemon);
*/

import React from "react";
import Joke from "./Joke";

/*
Challenge: turn the strings in the array into <h3> elements instead


export default function App() {
    const colors = [
            <h3>Red</h3>, 
            <h3>Orange</h3>, 
            <h3>Yellow</h3>,
            <h3>Green</h3>,
            <h3>Blue</h3>,
            <h3>Indigo</h3>,
            <h3>Violet</h3>
        ]
    return (
        <div>
            <h3>Red</h3>
            <h3>Orange</h3> 
            <h3>Yellow</h3>
            <h3>Green</h3>
            <h3>Blue</h3>
            <h3>Indigo</h3>
            <h3>Violet</h3>
        </div>
    )
}
            // <Joke 
            //     punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
            // />
            // <Joke 
            //     setup="I got my daughter a fridge for her birthday." 
            //     punchline="I can't wait to see her face light up when she opens it." 
            //     isPun={false}
            // />
            // <Joke 
            //     setup="How did the hacker escape the police?" 
            //     punchline="He just ransomware!"
            //     isPun={true}
            // />
            // <Joke 
            //     setup="Why don't pirates travel on mountain roads?" 
            //     punchline="Scurvy." 
            //     isPun={true}
            // />
            // <Joke 
            //     setup="Why do bees stay in the hive in the winter?" 
            //     punchline="Swarm." 
            //     isPun={true}
            // />
            // <Joke 
            //     setup="What's the best thing about Switzerland?" 
            //     punchline="I don't know, but the flag is a big plus!" 
            //     isPun={false}
            // />

            */
/* 1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.


2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.


3. Why is using `.map()` better than just creating the components
   manually by typing them out?
It makes our code more "self-sustaining" - not requiring
additional changes whenever the data changes.
*/

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized


const names = ["Ariet", "Bukky", "chisom", "david" "esther"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

const capitalizedNames = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1);
})

console.log(capitalizedNames);

*/

/* 
export default function App() {
    const colors = [
            <h3>Red</h3>, 
            <h3>Orange</h3>, 
            <h3>Yellow</h3>,
            <h3>Green</h3>,
            <h3>Blue</h3>,
            <h3>Indigo</h3>,
            <h3>Violet</h3>
        ]
    return (
        <div>
            {colors}
        </div>
    )
}
 */

/* let name = 'Josh Perez';
let element = <h1>Hello, {name}</h1>;

function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
let element = <h1>Hello, {fullName('Julie', 'Johnson')}</h1>
*/

/*
Event listener
import React from "react";

export default function Hello() {
  function handleClick(event) {
    event.preventDefault();
    alert("Hello World");
  }

  return (
    <a href="/" onClick={handleClick}>
      Say Hi
    </a>
  );
}


import React from "react"

export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    }
    
   
     * Challenge: 
     * Log something to the console when the mouse hovers over the image
    
    
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

 console.log("Button clicked!");
    const memesArray = MemesData.data.memes;
    console.log("Memes Array:", memesArray);
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);

*/
/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()


function greeting(name) {
    const date = new Date()
    const hours = date.getHours()
    
    let timeOfDay
    if(hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if(hours >= 17 && hours < 20) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }
    
   return `Good ${timeOfDay}, ${name}!`
}

console.log(greeting("Bob"))
*/
/* 
1. How would you describe the concept of "state"?
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)


2. When would you want to use props instead of state?
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.


3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).


4. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging. Props are immutable. State is mutable.
*/

/* 

import React, { useState } from "react";

export default function App() {
    
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
   
    const [stateValue,setStateValue] = useState("Yes")
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{stateValue}</h1>
            </div>
        </div>
    )
}


Another method 
import React from "react"

export default function App() {
    
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
   
    const result = React.useState("NO")
    console.log(result)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result[0]}</h1>
            </div>
        </div>
    )
}

  */
/*
import React from "react"

export default function App() {
    const [isImportant, setIsImportant] = React.useState("Yes")

     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
   
    
    function handleClick() {
        setIsImportant("No"); 
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1 onClick = {handleClick}>{isImportant}</h1>
            </div>
        </div>
    )
}

  */

/* 
import React, { useState } from "react";

export default function App() {
    
     * Challenge: Set up state to track our count (initial value is 0)
    
    
     const [count, setCount] = React.useState(0)
     
     function handleMinus() {
         
         setCount(count - 1);
     }
     
     function handleplus() {
         
         setCount(count + 1);
     }
     
    return (
        <div className="counter">
            <button className="counter--minus" onClick = {handleMinus}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick = {handleplus}>+</button>
        </div>
    )
}
 */

/* 
import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)
    
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

*/

/* 
1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   
a. New value of state (setCount(42))
b. Callback function - whatever the callback function 
   returns === new value of state


2. When would you want to pass the first option (from answer
   above) to the state setter function?
Whenever you don't need the previous value of state to determine
what the new value of state should be.


3. When would you want to pass the second option (from answer
   above) to the state setter function?
Whenever you DO need the previous value to determine the new value

*/

/*Conditional (ternary) operator
So, in simple terms, the conditional (ternary) operator helps us make decisions in code based on whether a condition is true or false, just like choosing between two toys based on an answer to a question.
const answer = true; // Imagine this is the answer to our question

// If the answer is true (yes), we get a teddy bear. If it's false (no), we get a toy car.
const toy = answer ? "teddy bear" : "toy car";

console.log(toy); // Output will be "teddy bear"

*/
/* 
import React from "react"

export default function App() {

     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
    
    const isGoingOut = false
    
    let answer = isGoingOut ? "yes" : "No";   // Use ternary here
    if(isGoingOut === true) {
        answer = "Yes"
    } else {
        answer = "No"
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{answer}</h1>
            </div>
        </div>
    )
}
 */

import React from "react";

export default function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(true);
  /**
   * Challenge:
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the div.state--value flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */
  function changeMind() {
    setIsGoingOut((prevState) => !prevState);
  }

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div onClick={changeMind} className="state--value">
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}

/*
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
   
     * Challenge: See if you can do it all again by yourself :)
     
    
    function addItem() {
        // Build from scratch :)
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
*/

/*  import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        setThingsArray(prevState => {
            return [...prevState, `Thing ${prevState.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

*/

/*
import React, { useState } from 'react';

function FruitList() {
  Define state with an array of fruits
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange']);

   Function to add a new fruit to the list
  const addFruit = () => {
    const newFruit = 'Strawberry';
    Update state by adding the new fruit to the existing array
    setFruits([...fruits, newFruit]);
  };

  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        { Render each fruit in the array }
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      { Button to add a new fruit *}
      <button onClick={addFruit}>Add Strawberry</button>
    </div>
  );
}

export default FruitList;
*/

/*
import React, { useState } from 'react';

function FruitList() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange']);

  // Function to remove a fruit from the list
  const removeFruit = (indexToRemove) => {
    // Update state by filtering out the fruit at the specified index
    setFruits(fruits.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        { Render each fruit in the array with a button to remove it }
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit}{' '}
            <button onClick={() => removeFruit(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
*/
/*
import React, { useState } from 'react';

function ToyBox() {
  // Define state with an object representing toys
  const [toys, setToys] = useState({
    car: { name: 'Toy Car', color: 'Red' },
    doll: { name: 'Doll', color: 'Blue' },
    ball: { name: 'Ball', color: 'Green' }
  });

  // Function to add a new toy to the list
  const addNewToy = () => {
    const newToyName = prompt('Enter the name of the new toy:');
    const newToyColor = prompt('Enter the color of the new toy:');
    // Update state by adding the new toy to the existing object
    setToys({ ...toys, [newToyName.toLowerCase()]: { name: newToyName, color: newToyColor } });
  };

  // Function to remove a toy from the list
  const removeToy = (toyName) => {
    // Create a copy of the current toys object
    const updatedToys = { ...toys };
    // Remove the specified toy from the copied object
    delete updatedToys[toyName];
    // Update state with the modified object
    setToys(updatedToys);
  };

  return (
    <div>
      <h1>Toy Box</h1>
      <ul>
      
        {Object.keys(toys).map((toyName) => (
          <li key={toyName}>
            {toys[toyName].name} - {toys[toyName].color}
            <button onClick={() => removeToy(toyName)}>Remove</button>
          </li>
        ))}
      </ul>
  
      <button onClick={addNewToy}>Add New Toy</button>
    </div>
  );
}

export default ToyBox;

*/

/* State with Objects
import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
     setContact(prevContact => ({
         ...prevContact,  isFavorite: !prevContact.isFavorite
     }))
    }
    
  
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

*/
/*Example 2

import React, { useState } from 'react';

function ToyBox() {
  // Define state with an object representing toys
  const [toys, setToys] = useState({
    car: { name: 'Toy Car', color: 'Red' },
    doll: { name: 'Doll', color: 'Blue' },
    ball: { name: 'Ball', color: 'Green' }
  });

  // Function to add a new toy to the list
  const addNewToy = () => {
    const newToyName = prompt('Enter the name of the new toy:');
    const newToyColor = prompt('Enter the color of the new toy:');
    // Update state by adding the new toy to the existing object
    setToys({ ...toys, [newToyName.toLowerCase()]: { name: newToyName, color: newToyColor } });
  };

  // Function to remove a toy from the list
  const removeToy = (toyName) => {
    // Create a copy of the current toys object
    const updatedToys = { ...toys };
    // Remove the specified toy from the copied object
    delete updatedToys[toyName];
    // Update state with the modified object
    setToys(updatedToys);
  };

  return (
    <div>
      <h1>Toy Box</h1>
      <ul>
     
        {Object.keys(toys).map((toyName) => (
          <li key={toyName}>
            {toys[toyName].name} - {toys[toyName].color}
            <button onClick={() => removeToy(toyName)}>Remove</button>
          </li>
        ))}
      </ul>
    
      <button onClick={addNewToy}>Add New Toy</button>
    </div>
  );
}

export default ToyBox;
*/

/*

class based components
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myArray: [] // Initialize an empty array
    };
  }

  render() {
    return (
      <div>
      
      </div>
    );
  }
}

export default MyComponent;

function based component 


import React, { useState } from 'react';

function MyComponent() {
  const [myArray, setMyArray] = useState([]); // Initialize an empty array

  return (
    <div>
    
    </div>
  );
}

export default MyComponent;

*/
/*import React from "react"
import boxes from "./boxes"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <div className="box" key={square.id}></div>
    ))
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     
    return (
        <main>
            {squareElements}
        </main>
    )
}

*/
/* import React from "react";

// Count component
function Count({ number }) {
  return (
    <div className="counter--count">
      <h1>{number}</h1>
    </div>
  );
}

export default function App() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>
        –
      </button>
      

      <Count number={count} />

      <button className="counter--plus" onClick={add}>
        +
      </button>
    </div>
  );
}

*/
//React is declarative UI programming. It defines the goals not the step.
//JS is imperative programming that defines the steps and not the goals.

//JAVASCRIPT RECAP

//const userMessage = "Hello world";

if (10 === 10) {
  console.log("works");
}

function greet() {
  console.log("hello");
}

greet(); //calling the function

//Your task is to write a new function that should be named combine and have the following characteristics:

//Accept three input values

//Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values)

//Return the calculated result

function combine(a, b, c) {
  return (a * b) / c;
}
console.log(combine(4, 10, 8));

/* 1) Omitting parameter list parentheses

If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses.

Instead of

(userName) => {
  .....
}

userName => {
  .....
}

Please note: 

If your function takes no parameters, parentheses must not be omitted - () => { ... } is the only correct form in that case.

If your function takes more than one parameter, you also must not omit parentheses - userName, userAge => { ... } would be invalid ((userName, userAge) => { ... } is correct)!

2) Omitting function body curly braces

If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.

Instead of

number => {
  return 2 * 3;
}

you could write

number => 2 * 3;

The following code would be invalid:

number => return number * 3; // invalid because return keyword must also be omitted!
number => if (number === 2) { return 5 }; // invalid because if statements can't be returned

3) Special case: Just returning an object

If you go for the shorter alternative explained in 2) and you're trying to return a JavaScript object, you may end up with the following, invalid code:

number => { age: number }; // trying to return an object
This code would be invalid because JavaScript treats the curly braces as function body wrappers (not as code that creates a JS object).

To "tell" JavaScript that an object should be created (and returned) instead, the code would need to be adjusted like this:

number => ({ age: number }); // wrapping the object in extra parentheses
By wrapping the object and its curly braces with an extra pair of parentheses, JavaScript understands that the curly braces are not there to define a function body but instead to create an object. Hence that object then gets returned.
*/

function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects
  return numberArray.map((number) => ({ val: number }));
}

//Destructuring in Js
const name = ["Ike", "Promise"];
const fistName = name[0];
const secondName = name[1];

console.log(secondName);

const [school, lastName] = ["FGGC", "David"];
console.log(school);

//Spread operator

const food = ["Rice", "Beans", "yam"];
const fruit = ["Orange", "Mango", "Apple"];
const foodFruit = [...food, ...fruit];

console.log(foodFruit);

const user = {
  name: "Max",
  age: 13,
};

const extendedUser = {
  isAdmin: true,
  ...user,
};
console.log(extendedUser);

//Conteol structure in Js
//1. if statetement

const password = prompt("Enter your password.");

if (password === "Hello") {
  console.log("You are welcome");
} else if (password === "HELLO") {
  console.log("YOU ARE WELCOME");
} else {
  console.log("Access denied");
}

//For loop

const hobbies = ["sports", "cooking", "swimming"];

for (const hobby of hobbies) {
  console.log(hobby);
}

/* 
export function CourseGoal(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
       
        <CourseGoal title = "LEARN REACT" description = "In-depth" />
         <CourseGoal title ="PRACTICE" description = "Practice working with React components" />
      </ul>
    </div>
  );
}

export default App;

*/

/* import React from "react"
import boxes from "./boxes"

export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)
   const darkMode = props.darkMode
    
    
    const color = darkMode ? "#222222" : "#cccccc";
    // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to "#222222"
    // If darkMode is false, set it to "#cccccc"
    
    const styles = {
        backgroundColor: color// You code here
    }
    
    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
*/

//Anonymous function
let helloWorld = function () {
  console.log("Hello World!");
};

//Arrow function
let helloWorld1 = () => {
  console.log("Hello World!");
};

/**
import React from "react"
import boxes from "./boxes"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <div className="box" key={square.id}></div>
    ))
   
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
 */

/*
// Your goal is to change the email, password and loggedIn values when the button in the App component is pressed
// Change them to any values of your choice (except loggedIn => that should be changed to true)
// You DON'T need to fetch the values entered into the <input /> fields
// You'll learn about that later in the course - for the moment, those fields are just there to look good :-)
export const user1 = {
  email: '',
  password: '',
  loggedIn: false,
};

// Please note: The login does not actually work!
// This exercise is just about practicing event handling
// You'll learn how to add user authentication to React apps later in the course!
function App() {
    
    function handleClick() {
            user.email = 'newemail@example.com';
        user.password = 'newpassword123';
        user.loggedIn = true;
    }
    
    
  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
       
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
       
        <input type="password" />
      </p>

      <p id="actions">
        <button onClick={handleClick} >Login</button>
      </p>
    </div>
  );
}

export default App;

*/

/*
export const user = {
  name: '',
};

function App() {
  // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked
  function handleCreateUser(name) {
    user.name = name;
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
       
        <input type="text" />
      </p>

      <p id="actions">
        <button onClick = {() => handleCreateUser("Max")}>Create User</button>
      </p>
    </div>
  );
}

export default App;
*/
