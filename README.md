# Context_API_React
 Context API in React.JS FOR <span style="background-color:yellow"> CLASS COMPONENTS </span><br> <br>

WHAT IS CONTEXT API ?  <br>
Context provides a way to pass data through the components without having to pass props from each children component until it reaches the component we need. <br>

In the Class Components i did a small example about how we can share data or functions trough the class based components.<br>
1- I have first created a component where is have created a variable of createContext() named ThemeContext<br>
2- A state where i have stored datas <br>
3- In the return statement i have returned <br>
<ThemeContext.Provider value={{...this.state, toggleClick:this.toggleClick}}> <br>
                                                    {this.props.children}<br>
                                            </ThemeContext.Provider> <br><br>
  where is passed the datas as props so they will be passed in the children components.<br>
  
  4- In the children component i have imported the variable created using createContext() named ThemeContext<br>
  5- I used _> static contextType = ThemeContext so React knows that context will be used<br>
  6- Finally by this.context we can directly reach the Data in the parent component.<br>
  ![masaaki stephane](https://user-images.githubusercontent.com/62558026/157085701-e638861a-e436-42ad-94c2-65df62f3b7f8.png)

  
  -The way of passing variable is same when we need to pass a function from on component to another component.
  -You can check here how i did with click function.
  ![masaaki stephane benon](https://user-images.githubusercontent.com/62558026/157085385-b43af68d-7ebb-43f1-a6eb-4637d5855575.png)

  
