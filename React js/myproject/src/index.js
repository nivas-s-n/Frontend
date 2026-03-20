import React from "react";
import ReactDOM from "react-dom/client"

// Basic Program 
/*const App = () => {
  return (
    <>
      <h1>Welcome</h1>
      <h2>heading 2</h2>
    </>

  )
}
const r1 = ReactDOM.createRoot(document.getElementById("root"))
r1.render(<App />) */


// Dynamic Rendering 
/*const Sample = () => {
  const name = "Nivas"
  const age = 24

  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Your Age is : {age}</p>
      <p>Today Date is : {new Date().toLocaleDateString()}</p>
      <p>Now Time is : {new Date().toLocaleTimeString()}</p>
    </div>
  )
}

const r1 = ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>) */


//React List 
/*const Mylist = () => {
  return (
    <div>
      <h1>React List</h1>
      <ul>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
      </ul>
      <ol>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
      </ol>
    </div>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Mylist />)*/


// Conditional Rendering using if else 
const Cond = () => {
  const age = parseInt(prompt("Enter Your Age : "))
  let op
  if (age >= 0) {
    if (age >= 18) {
      op = "Eligible to vote"
    }
    else {
      op = "Not Eligible to vote"
    }
  }
  else {
    op = "Age Must be greater than Zero"
  }

  return (  
    <> 
    <p>Your age is : {age}</p>
    <h1>{op}</h1>
    </> 
  )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Cond />)

// same using ternary operator
/*const Cond1 = () => {
  const age = parseInt(prompt("Enter Your Age : "))
  return (
    <h1>
      {age < 0
        ? "Age should be greater than Zero"
        : age >= 18
          ? "Eligible to vote"
          : "Not Eligible to vote"
      }
    </h1>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Cond1 />)*/

