//find the artcile and hbox
let article = document.querySelectorAll('.article');
//console.log(article);
//let hBox = document.querySelectorAll('.hBox');
//console.log(hBox);

//when hovering slide the hbox in
article.forEach(i => {
    i.addEventListener('mouseover', () => {
        //console.log('Bingpot!');
        //console.log(i.firstChild.nextElementSibling);
        i.firstChild.nextElementSibling.style.left = '0%';
    });
});

article.forEach(i => {
    i.addEventListener('mouseout', () => {
        i.firstChild.nextElementSibling.style.left = '-100%';
    })
})

const searchbar = document.querySelector('#search');
const searchbtn = document.querySelector('#searchBtn');
const nav = document.querySelector('#mobileNav');
//create a class to toggle for this.
searchbtn.addEventListener('click', () => {
    searchbar.style.left = '40vw';
    nav.style.left = '-80vw';
});
