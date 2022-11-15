export function renderVSTCard(vst) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const p = document.createElement('p');

    div.classList.add('item-card');

    p.textContent = vst.name;
    a.href = `./detail/?id=${vst.id}`;

    div.append(p);

    a.append(div);

    return a;
}
