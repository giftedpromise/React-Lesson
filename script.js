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
