// The select() method selects one element from the document. 
// It takes an argument for the name of the element you want 
// and returns an HTML node for the first element in the document 
// that matches the name. Here's an example:

const anchor = d3.select("a");


// The append() method takes an argument for the element you
// want to add to the document. It appends an HTML node to a 
// selected item, and returns a handle to that node.


// The text() method either sets the text of the selected node, 
// or gets the current text. To set the value, you pass a string 
// as an argument inside the parentheses of the method.



// D3 also has the selectAll() method to select a group of 
// elements. It returns an array of HTML nodes for all the items 
// in the document that match the input string. Here's an example 
// to select all the anchor tags in a document:

const anchors = d3.selectAll("a");





