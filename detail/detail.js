import { getVST } from '../fetch-utils.js';
import { renderVSTDetail } from '../render-utils.js';

const itemDetailContainer = document.getElementById('item-detail-container');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const vst = await getVST(id);

    const vstDetailEl = renderVSTDetail(vst);

    itemDetailContainer.append(vstDetailEl);
});
