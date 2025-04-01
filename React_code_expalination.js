// react.createElemnt is just a object // dont confuse with a h1 tag of a html
const heading =  React.createElement
                  ("h1",                              // children will go inside <h1> tag
                  {id: "heading"} ,                   // these are props or prototype
                  "Hello World from React");          // these are children
     //whatever inside the props will go as a attribute insdie the h1 tag
     
                  // in this root every react code will run
      const root = ReactDOM.createRoot(document.getElementById("root"));
     // when we are creating a root and rendering something inside it thats tha job of React-dom. 2nd library
    root.render(heading);// here we are paasing a react element a javascript object
      // its render the things before going to the browser

      // if do console.log(heading)// it will return an object to me