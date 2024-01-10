function collapse(accordion) {
  accordion.classList.toggle('collapsed');
  const target = document.querySelector(accordion.dataset.target);

  if (target) {
    const isCollapsed = target.classList.contains('collapsed');
    target.classList.toggle('collapsed', !isCollapsed);

    if (target.style.maxHeight) {
      target.style.maxHeight = null;
    } else {
      target.style.maxHeight = `${target.scrollHeight} + px`;
    }
  }
}

function init() {
  /* TABS */

  // const tabs = document.querySelector('.tabs');
  // const tabArray = document.querySelectorAll('.tabs__link');
  // const tabContents = document.querySelectorAll('.tabs__pane');

  // const activateTab = (tabnum) => {
  //   tabArray.forEach((tab) => {
  //     tab.classList.remove('active');
  //   });

  //   tabContents.forEach((tabContent) => {
  //     tabContent.classList.remove('active');
  //   });

  //   document.querySelector('#tab' + tabnum).classList.add('active');
  //   document.querySelector('#tabcontent' + tabnum).classList.add('active');
  // };

  // tabs.onclick = function (event) {
  //   let target = event.target;

  //   if (target.classList.contains('tabs__link')) {
  //     activateTab(target.dataset.tab);
  //   }
  // };

  // const opentab = '1';
  // activateTab(opentab);

  /* CAREER COUNT */
  const count = document.querySelector('#career-count');
  const accordion = document.querySelector('#accordion');
  if (accordion) {
    count.dataset.count = accordion.childNodes.length;
  } else {
    count.dataset.count = 0;
  }
}

window.addEventListener('DOMContentLoaded', init);
