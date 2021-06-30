const tabs = () => {
    function bindTabs(linkSelector, blockSelector, activeClass) {
        const links = document.querySelectorAll(linkSelector);
        const blocks = document.querySelectorAll(blockSelector);

        links.forEach((link, i) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                links.forEach((elem,i) => {
                    elem.classList.remove(activeClass);
                    blocks[i].style.display = 'none';
                    blocks[i].classList.remove('fadeIn');
                    blocks[i].classList.add('fadeOut');
                });
                links[i].classList.add(activeClass);
                blocks[i].style.display = 'block';
                blocks[i].classList.remove('fadeOut');
                blocks[i].classList.add('fadeIn');
            })
        })
    }

    bindTabs('.glazing_block', '.glazing_content', 'active');
    bindTabs('.decoration_item .no_click', '.decoration_content > .row > div', 'after_click');
    bindTabs('.balcon_icons_img ', '.big_img img', 'do_image_more');
}


export default tabs;