// get input from user
const element = document.getElementById("submit-button");

function handleSubmitClick() {
    const inputElement = document.getElementById("userInput");
    const inputValue = inputElement.value
    // console.log("O valor do input é: "+inputValue)
}
element.addEventListener("click", handleSubmitClick)

// call the API
// const url = "https://botw-compendium.herokuapp.com/api/v2/entry/"
// function getApi (url) {
//     const userInput = input.value;
//     async function getThing(url, doThis) {
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             doThis(data);
//         };
//     };
// };

    // find the information within the API

// get the result back to the user: item's name, description, image and locations.