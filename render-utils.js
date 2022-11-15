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
