function create100Selects(selector) {
    for (let i = 1; i < 100; i++) {
        let option = document.createElement('option');
        option.text = `${i}`;
        option.value = i;
        selector.appendChild(option);
    }
    return selector;
}

export default create100Selects;