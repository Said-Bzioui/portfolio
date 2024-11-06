
let proDeatails = document.querySelector(' .deatails');
let pop_image = document.querySelector(' .deatails .pop-ditails .img-holder img');
let proDeatailsClose = document.querySelector('.close-btn');
let proDeatailsOpen = document.querySelectorAll('.opening');
let box = document.querySelectorAll('.box .image');

proDeatailsOpen.forEach((op) => {
    op.addEventListener('click', () => {
        proDeatails.classList.remove('close');
    })
})
box.forEach((box) => {
    box.addEventListener('click', (e) => {
        proDeatails.classList.remove('close');
        pop_image.src = e.target.src;
    })
})

proDeatailsClose.addEventListener('click', () => {
    proDeatails.classList.add('close');
})


// =======================================
// =============== Tabs ===================
let tabs = document.querySelectorAll(".navBar ul li a");
let tabsArray = Array.from(tabs);
let about = document.querySelector('.about');
let resume = document.querySelector('.resume');
let portfolio = document.querySelector('.portfolio');
let contact = document.querySelector('.contact-us');
let divsArray = [about,resume, portfolio,contact];

// console.log(tabsArray);

tabsArray.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });

        e.currentTarget.classList.add("active");
        divsArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
});

divsArray.forEach((div) => {
    div.style.display = "none";
});
document.querySelector('.content .portfolio').style.display = "block";