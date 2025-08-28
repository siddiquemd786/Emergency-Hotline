<!-- README.md -->
1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer: any kind of unique identyfation need choose getElementby Id, get element by ID we find nodelist use very helful and one and more element need to get we choose getElementsByClassName it give me a htmlcollection with element index. queryselctor is any kind of single id,class,div,tag,h1,p etc we choose queryselector and one more items choose queryselector all. 

2.How do you create and insert a new element into the DOM?
answer: At first chosee document.createElement("name of element") it is also store a variable as a child.  than get parent element and parentelement.appendchild("name of child")  

3.What is Event Bubbling and how does it work?
anwswer: when click a button it is fire like a bubbling its means down to up. when a button click at first create capturing. capturing means button click even is fire from document to body to div to element to button than stop now than start bubbling button to elemtn to div to body to document. Also i want to this information capturing default is false that wise start even bubbling first If you capturing default value true than capturing start first.  

4. What is Event Delegation in JavaScript? Why is it useful?
answer: Event delegation is a button in a div when click the button than button than is work if you click outside of button this not work if you set event delegation on div than click div on the button was clicked.improver perfomance and reduce memory usage, effectively handaling dynamic content.

5.What is the difference between preventDefault() and stopPropagation() methods?

answer: when you submited form browser is loading default if you stop loading defalut browser use preventdefault() method and stopPropagation() use when you click a button is bubbling if you want stop a certain place use this.