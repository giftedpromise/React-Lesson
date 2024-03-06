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

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
The function name is supposed to be in pascal notation.

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
