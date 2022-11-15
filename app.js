/* Imports */
import { getVST, getVSTs } from './fetch-utils.js';
import { renderVSTCard } from './render-utils.js';
/* Get DOM Elements */
const itemContainer = document.getElementById('item-container');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const vsts = await getVSTs();
    console.log(vsts.data);
    for (let vst of vsts) {
        const vstEl = renderVSTCard(vst);
        itemContainer.append(vstEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
