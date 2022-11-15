/* Imports */
import { getVST } from './fetch-utils.js';
/* Get DOM Elements */
const itemContainer = document.getElementById('item-container');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const vst = await getVST();
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
