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
