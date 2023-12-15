function collapseText(btn) {
    let target = document.querySelector(btn.dataset.target);
    console.log(target,'target');

    if (target) {
        const isShown = target.classList.contains('show');
        target.classList.toggle('show', !isShown);
        target.classList.toggle('collapse', isShown);

        if (target.style.maxHeight) {
            target.style.maxHeight = null;
          } else {
            target.style.maxHeight = target.scrollHeight + "px";
          }
    }
}

/* TABS */
const tabs = document.querySelectorAll('.tabs__tab');
const tabContents = document.querySelectorAll('.tabs__content-item');

const activateTab = tabnum => {

    tabs.forEach(tab => {
        tab.classList.remove('active');
    })

    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
    })

    document.querySelector('#tab' + tabnum).classList.add('active');
    document.querySelector('#tabcontent' + tabnum).classList.add('active');
    localStorage.setItem('jstabs-opentab', JSON.stringify(tabnum))

}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab.dataset.tab);
    })
})
