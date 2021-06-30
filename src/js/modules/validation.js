const numberValidation = () => {
    const numberInputs = document.querySelectorAll('[data-number="valid"]');
    numberInputs.forEach(item => {
        item.addEventListener('input', (e) => {
            item.value = item.value.replace(/\D/g, '');
        });
    })
}

export default numberValidation;