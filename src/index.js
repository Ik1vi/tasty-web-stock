import './styles/style.scss';

const colorsHandleEl = document.querySelector('.js-colors-handle');
const bodyEl = document.querySelector('.js-body');
const headerEl = document.querySelector('.js-header');
const btnColorSchemeEl = document.querySelector('.js-btn-color-scheme');

const itemWhiteEl = document.querySelector('.js-item-white');
const itemBlackEl = document.querySelector('.js-item-black');
const itemYellowEl = document.querySelector('.js-item-yellow');
const itemOrangeEl = document.querySelector('.js-item-orange');
const itemRedEl = document.querySelector('.js-item-red');
const itemVioletEl = document.querySelector('.js-item-violet');
const itemMagentaEl = document.querySelector('.js-item-magenta');
const itemGreenEl = document.querySelector('.js-item-green');
const itemCyanEl = document.querySelector('.js-item-cyan');
const itemBlueEl = document.querySelector('.js-item-blue');

const btnLikesEl = document.querySelector('.js-btn-likes');

const picItemEl = document.querySelector('.js-pic-item1');

const picItemCollection = document.querySelectorAll('.js-pic-item');


colorsHandleEl.addEventListener('click', function (ev) {
    ev.preventDefault();
    bodyEl.classList.toggle('colors-menu-open');
});

// containers

btnLikesEl.addEventListener('click', function (ev) {
    ev.preventDefault();
    bodyEl.classList.add('liked-container-open', 'js-fixed');
    // bodyEl.style.height=window.height() + window.scrollTop();
    // bodyEl.style.marginTop = window.scrollTop()*-1;

});

picItemEl.addEventListener('click', function (ev) {
    ev.preventDefault();
    bodyEl.classList.add('picture-container-open', 'js-fixed');
});

document.addEventListener('mousedown', function(e) {
	if(!e.target.closest('.js-picture-container-wrapper') && !e.target.closest('.js-liked-wrapper') ) {
        bodyEl.classList.remove('liked-container-open', 'picture-container-open', 'js-fixed');
	}
});



btnColorSchemeEl.addEventListener('click', function (ev) {
    ev.preventDefault();
    bodyEl.classList.toggle('dark-scheme');
});

itemWhiteEl.addEventListener('click', function (ev) {
    ev.preventDefault();
    if (headerEl.classList.contains('white-selected')) {
        headerEl.classList = "header js-header";
    } else {
        headerEl.classList = "header js-header";
        headerEl.classList.add('white-selected');
    }
});

itemBlackEl.addEventListener('click', function (ev) {
    ev.preventDefault();
    if (headerEl.classList.contains('black-selected')) {
        headerEl.classList = "header js-header";
    } else {
        headerEl.classList = "header js-header";
        headerEl.classList.add('black-selected');
    }
});

itemYellowEl.addEventListener('click', function (ev) {
    ev.preventDefault();

    if (headerEl.classList.contains('yellow-selected')) {
        headerEl.classList = "header js-header";
    } else {
        headerEl.classList = "header js-header";
        headerEl.classList.add('yellow-selected');
    }
});

itemOrangeEl.addEventListener('click', function (ev) {
    ev.preventDefault();
    if (headerEl.classList.contains('orange-selected')) {
        headerEl.classList = "header js-header";
    } else {
        headerEl.classList = "header js-header";
        headerEl.classList.add('orange-selected');
    }
});

itemRedEl.addEventListener('click', function (ev) {
    ev.preventDefault();

    if (headerEl.classList.contains('red-selected')) {
        headerEl.classList = "header js-header";
    } else {
        headerEl.classList = "header js-header";
        headerEl.classList.add('red-selected');
    }
});

itemVioletEl.addEventListener('click', function (ev) {
    ev.preventDefault();
    if (headerEl.classList.contains('violet-selected')) {
        headerEl.classList = "header js-header";
    } else {
        headerEl.classList = "header js-header";
        headerEl.classList.add('violet-selected');
    }
});

itemMagentaEl.addEventListener('click', function (ev) {
    ev.preventDefault();
    if (headerEl.classList.contains('magenta-selected')) {
        headerEl.classList = "header js-header";
    } else {
        headerEl.classList = "header js-header";
        headerEl.classList.add('magenta-selected');
    }
});

itemGreenEl.addEventListener('click', function (ev) {
    ev.preventDefault();
    if (headerEl.classList.contains('green-selected')) {
        headerEl.classList = "header js-header";
    } else {
        headerEl.classList = "header js-header";
        headerEl.classList.add('green-selected');
    }
});

itemCyanEl.addEventListener('click', function (ev) {
    ev.preventDefault();
    if (headerEl.classList.contains('cyan-selected')) {
        headerEl.classList = "header js-header";
    } else {
        headerEl.classList = "header js-header";
        headerEl.classList.add('cyan-selected');
    }
});

itemBlueEl.addEventListener('click', function (ev) {
    ev.preventDefault();
    if (headerEl.classList.contains('blue-selected')) {
        headerEl.classList = "header js-header";
    } else {
        headerEl.classList = "header js-header";
        headerEl.classList.add('blue-selected');
    }
});


// grid

const allItems = document.getElementsByClassName("pic-grid__list-item");
const grid = document.querySelector(".js-pic-grid");
let i = 0;

let resizeGridItem = function (item) {
    let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    let rowSpan = Math.ceil((item.querySelector('.js-publication').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
}

let resizeAllGridItems = function (i) {
    for (i = 0; i < allItems.length; i++) {
        resizeGridItem(allItems[i]);
    }
}

let resizeInstance = function (instance) {
    let item = instance.elements[0];
    resizeGridItem(item);
}

window.addEventListener("resize", resizeAllGridItems);

window.addEventListener("load", function(event) {
	resizeAllGridItems();
});

for (let i=0, length = picItemCollection.length; i < length; i++) {
	picItemCollection[i].addEventListener('mouseenter', function(ev) {
		ev.preventDefault();

		this.classList.add('pic-item-hover');
    });
    
    picItemCollection[i].addEventListener('mouseleave', function(ev) {
		ev.preventDefault();

		this.classList.remove('pic-item-hover');
	});
}


