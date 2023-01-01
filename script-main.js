//create a 16 x 16 grid using JS

//Append the child divs to the parent container 256 times of 1px boxes.
function buildBoard (num) {
    
    for (i=0; i<num**2; i++) {
        let divSquare = document.createElement('div');
        numberOfDivs = num**2;
        divSquare.className = "drawingDiv";
        divSquare.setAttribute("id", "drawingDivs" + i);
        containerDiv.appendChild(divSquare);
        
    }
   

};
/*put the container in a flexbox using CSS. with a wrap and justified center.
May need to remove all padding and margin to get them to align*/



/*create a Hover effect using an EventListener of mouseover or mouseenter for any part of
the container.

My initial thought is add the eventListener to the container element but
the function that is called is to return the div child element and 
change the color of the div element to the color pen selected. using the 
event.target.style.color JS pseudo CSS. */

//Query All classes that have the drawingDiv class and for each item, have an item
//listener that listens for the mouse over. Then, the event that happens is to change
//the color of the background of that item that was hovered

function drawOnGrid () {
    document.querySelectorAll('.drawingDiv').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = "black";
        })
        })
};
