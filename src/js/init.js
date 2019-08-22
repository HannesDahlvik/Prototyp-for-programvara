var elem = document.querySelector('.grid');
var msnry = new Masonry(elem, {
    itemSelector: '.grid-item',
    columnWidth: 200
});

var msnry = new Masonry('.grid', {
    horizontalOrder: true
});