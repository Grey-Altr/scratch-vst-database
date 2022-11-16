export function renderVSTCard(vst) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const nameEl = document.createElement('p');
    const compEl = document.createElement('p');
    const typeEl = document.createElement('p');

    div.classList.add('item-card');

    nameEl.textContent = vst.name;
    compEl.textContent = vst.company;
    typeEl.textContent = vst.type;
    a.href = `./detail/?id=${vst.id}`;

    div.append(nameEl, compEl, typeEl);

    a.append(div);

    return a;
}

export function renderVSTDetail(vst) {
    const div = document.createElement('div');
    const imgEl = document.createElement('img');
    const nameEl = document.createElement('p');
    const compEl = document.createElement('p');
    const typeEl = document.createElement('p');
    const updateEl = document.createElement('p');
    const priceEl = document.createElement('p');
    const infoEl = document.createElement('p');

    div.classList.add('item-detail');

    nameEl.textContent = vst.name;
    nameEl.classList.add('name');

    compEl.textContent = vst.company;
    compEl.classList.add('company');

    typeEl.textContent = vst.type;
    typeEl.classList.add('type');

    updateEl.textContent = vst.last_update;
    updateEl.classList.add('update');

    priceEl.textContent = vst.price;
    priceEl.classList.add('price');

    infoEl.textContent = vst.info;
    infoEl.classList.add('info');

    imgEl.src = `../assets/${vst.id}.png`;

    div.append(nameEl, compEl, typeEl, updateEl, priceEl, infoEl, imgEl);

    return div;
}
