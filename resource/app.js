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