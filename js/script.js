/* ============================== typing animation ============================ */
var typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer","Web Entwickler","Informatiker","Programmierer"],
    typeSpeed:100,
    BackSpeed:100,
    loop:true
})
/* ============================== Aside ============================ */
const nav = document.querySelector(".nav"),
navList = document.querySelectorAll("li"),
totalNavList = navList.length,
allSetion = document.querySelectorAll("section"),
totalSection = allSetion.length;

for(let i=0; i<totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
       removeBackSection()
    for(let j=0; j<totalNavList; j++)
    {
        if(navList[j].querySelector("a").classList.contains("active"))
        {
            addBackSection(j);
        }
        navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active")
    showSection(this);
    if(window.innerWidth < 1200)
    {
        asideSectionTogglerBtn();
    }
    })


}
function addBackSection(num)
{
    allSetion[num].classList.add("back-section");
}
function removeBackSection()
{
    for(let i=0; i<totalSection; i++)
    {
        allSetion[i].classList.remove("back-section");
    }
}
function showSection (element)
{
    for(let i=0; i<totalSection; i++)
    {
        allSetion[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav (element) {
for(let i=0; i<totalNavList; i++)
{
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if( target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
    {
    navList[i].querySelector("a").classList.add("active");
    }
}
}
// const tar = element.getAttribute("href").split("#")[1];
// let spans = document.querySelectorAll(".progress span");
// // const about = navList[1].querySelector("a").getAttribute("href").split("#")[1];
// if (tar === navList[1].querySelector("a").getAttribute("href").split("#")[1])
// {
//     line();
// }
let hireMe =document.querySelector(".hire-me");
hireMe.addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navToggleBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navToggleBtn.addEventListener("click" , () => 
{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++)
    {
    allSetion[i].classList.toggle("open");
    }
}
let about = document.querySelector(".click");
about.addEventListener("click" , function()
{
    line();

})
function line ()
{
    let spans = document.querySelectorAll(".progress span");
    spans.forEach((span) => 
    {
    span.style.width = span.dataset.width;
    }
    );
}

