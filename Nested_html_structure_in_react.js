/**
 * what if we have nested div how to create this  in react
 * // output
 * <div id = "root">
 *      <div id= "parent">
 *          < div="child">
 *             <  h1> i am h1 tag </h1>
 *                  <h2> hi am h2 tag </h2>
 *        </div>
 *      </div>
 * </div>
 * lets make it more complex
 * < div="child2">
 *             <  h1> i am h3 tag </h1>
 *                  <h2> hi am h4 tag </h2>
 *        </div>
 * 
 * 
 * new topic what if we have another sibling with h1 tag like h2
 * <h1> </h1>
 * <h2> </h2>   for this we have to create an array so we can store the sibling in the third agrument
 *  either  we can pass one  or more than one we can create a array []
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * React gives us a object which become html so browser understands
 * 
 * ReactElement(object)=> html(browse, understands)
 * 
 * dont get confuse with ReactElement that its createing a html ,its creating a object 
 * which is parent here
 * 
 * 
 * the ist type of argument what type of tag is it which is div here
 * 2nd argument is the object  which is  parent here in first ReacteElement 
 * 3rd is the child or 
 * 
 * 
 * 
 */

const parent = React.createElement(
    "div",
    {id: "parent"},         
   
    React.createElement("div",{id: "child"},[                 //here child is div or i can do this instead direct copy the 
        React.createElement("h1",{},"i am H1 tag"),          // here i have to put child agin  what is the child here h1    
        React.createElement("h2",{},"i am H2 tag")          // but we cannot put directly h1 we know how to do that
     ],
     React.createElement("div",{id: "child2"},[      // let make it complex part         
      React.createElement("h1",{},"i am H3 tag"),          
      React.createElement("h2",{},"i am H4 tag")                                                   
     ]
    )));
    // now there is a question arrives why we should use react for this when html is much simpler
    // for that we have here
    //JSX   // we will study about thi in next code file
    // this is core of react we can use react to do this stuff to
    // most probably we are not going to use react.createElemnet
  
  
  
  // react will only work where  we assigned in the html page here we asigend id root of (<div ="root"></div>)
  // thats why react is library it works as independetly as small portion of your work
  // it is not a full fleged framework
  const root = ReactDOM.createRoot(document.getElementById("root"));// we already created this id= "root" of a div , its that ref in the html file 
  root.render(parent);// this root will render the root in div what i am passing in react the
                        // div root in html  will be replaced by react 
  
  
  
  /*const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);*/
  
  
  /**
  * React.createElement(
  type,       // HTML tag (e.g., 'h1', 'div') or React component
  props,      // Object containing attributes (e.g., { id: 'heading' })
  children    // Content or nested elements
  );
  * 
  * 
  * 
  */