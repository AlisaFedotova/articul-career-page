function collapse(accordion) {
  accordion.classList.toggle('collapsed');
  const target = document.querySelector(accordion.dataset.target);

  if (target) {
    const isCollapsed = target.classList.contains('collapsed');
    target.classList.toggle('collapsed', !isCollapsed);

    if (target.style.maxHeight) {
      target.style.maxHeight = null;
    } else {
      target.style.maxHeight = `${target.scrollHeight}px`;
    }
  }
}

function init() {
  /* TABS */

  const tabsList = document.querySelectorAll('.tabs');

  const activateTab = (tabs, tabNum) => {
    const linkList = tabs.querySelectorAll('.tabs__link');
    const paneList = tabs.querySelectorAll('.tabs__pane');

    linkList.forEach((link) => {
      link.classList.remove('active');
    });

    paneList.forEach((pane) => {
      pane.classList.remove('active');
    });

    tabs.querySelector(`#tab${tabNum}`).classList.add('active');
    tabs.querySelector(`#tabcontent${tabNum}`).classList.add('active');
  };

  tabsList.forEach((tabs) => {
    const contentList = tabs.querySelectorAll('.tabs__pane');

    if (contentList.length > 0) {
      activateTab(tabs, contentList.item(0).dataset.tab);
    }

    tabs.onclick = function (event) {
      const { target } = event;

      if (target.classList.contains('tabs__link')) {
        activateTab(tabs, target.dataset.tab);
      }
    };
  });

  /* CAREER COUNT */
  const count = document.querySelector('#career-count');
  const accordion = document.querySelector('#accordion');
  if (count && accordion) {
    count.dataset.count = accordion.childNodes.length;
  } else {
    count.dataset.count = 0;
  }
}

window.addEventListener('DOMContentLoaded', init);
