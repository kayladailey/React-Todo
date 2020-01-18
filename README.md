# React-Todo

We're going to practice building a stateful class component with this project. Even though hooks are gaining popularity among react developers, class components are going to be around for a long time. It's imperative that you get use to class components, and feel comfortable working with class components since you'll most likely need to work with them if you are hired to work on a React app.

## Dependencies & Key Points
- prettier(developer)
- styled components (ui)
- setState(updater[, callback])
setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.


## 1.) TodoForm.js
-  Create a function that takes in  'props'
- Build a form with an input field and 2 buttons
handleInput => Handles the data from our input field. (?setState is targeting the input and value to change their state// do we need the e.target.name with only 1 input?) [ Key]: Value pair  
handleSubmit => Line 24 prevents the natural action of teh submit which is to refresh. setState is targetting the 'newTask' being created by the input value (? Line 28 )

**onChange & onClick**
onChange will handle the updates that occur within the input field through the handleInput function.
onClick will launch the function passed into it. In this case those functions are 'handleAddTodo' and 'handleClearTodos' what they do is stored in the app.js component. [Note: these are destructured!! Lines 14,15 = Lines 24,33 App.js]


#### 2.) App.js
This is the component that our state is stored in. Call  `constructor` & `super` and then pass in how we would like our state sestup here we are passing in an array of todos and an key value todo. I passed in 2 'test' todo items to the array and then left the value as an empty string to store our input data we will get from the form.
**Functions**
 addTodo - preventing default behavior, destructuring the new state to be represented by the variable newTodo. We then pass in the array new state and the current state by using the 'setState'  (?Line 29)
 

 changeTodo 


#### 3.) Todo.js

#### 3.) Todo.js

