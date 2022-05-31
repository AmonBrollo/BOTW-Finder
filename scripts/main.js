// get input from user
const element = document.getElementById("submit-button");

// Button test ↓
// element.addEventListener("click", buttonTest);

// function buttonTest() {
//     document.getElementById("test").innerHTML = "This button works!😅";
// };

const userInput = element.addEventListener("click", getApi);

// const input = document.querySelector('input');
// button.addEventListener('click', () => {
//     const userInput = input.value;
    
//     // call the API
//     const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${userInput}`;

//     async function getThing(url, doThis) {
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             doThis(data);
//         }
//     }

//     const thing = getThing(url, doStuff);

//     listJson.jsonContent = thing;

    // find the information within the API

    // get the result back to the user: item's name, 
    // description, image and locations.
    const thingInfo = document.createElement('span');
// });
