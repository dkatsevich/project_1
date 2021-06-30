function bindModal(triggerSelector, modalSelector, closeSelector) {
    const triggers = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    closeBtn = document.querySelector(closeSelector);

    function showModal() {
        // clearInterval(modalTimer);
        document.body.style.overflow = 'hidden';
        modal.classList.add('show');
        modal.style.cssText = `
            display: block;
        `;
    }
    function hideModal() {
        document.body.style.overflow = '';
        modal.classList.remove('show');
        modal.style.cssText = `
            display: none;
        `;
    }

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            showModal();
        });
    });

    closeBtn.addEventListener('click', () => {
        hideModal();
    })

    modal.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target === modal) {
            hideModal();
        }
    });

}

const modal = () => {
    

    // const modalTimer = setTimeout(() => {
    //     document.body.style.overflow = 'hidden';
    //     document.querySelector('.popup').classList.add('show');
    //     document.querySelector('.popup').style.cssText = `
    //         display: block;
    //     `;
    // }, 60000);

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer [data-close]');
    bindModal('.phone_link_1', '.popup', '.popup [data-close]');
    bindModal('.phone_link_2', '.popup', '.popup [data-close]');
    bindModal(`.popup_calc_btn`, '.popup_calc', '.popup_calc_close');
    
}

export default modal;
export {bindModal};