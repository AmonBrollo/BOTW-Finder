// get input from user
const input = document.querySelector('input');
button.addEventListener('click', () => {
    const userInput = input.value;
    
    // call the API
    const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${userInput}`;

    async function getThing(url, doThis) {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            doThis(data);
        }
    }

    const thing = getThing(url, doStuff);

    listJson.jsonContent = thing;

    // find the information within the API

    // get the result back to the user: item's name, 
    // description, image and locations.
    const thingInfo = document.createElement('span');
});
