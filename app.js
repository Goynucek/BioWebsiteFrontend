const svgParent = document.querySelector(".briefcase");
const bio = document.querySelector("#bio");

const ui = new UI();

let clicked = false;


eventListeners();
function eventListeners()
{
    addEventListener("DOMContentLoaded", ui.FirstScene());
    addEventListener("click", scenes);
}

function scenes(e)
{
    switch(e.target.className)
    {
        case "svgParent briefcase": ui.Blog(); bio.remove();;break;
        case "svgParent envelope": Contact(); bio.remove();break;
        case "svgParent Person": ui.Skills(); bio.remove();break;
    }

    console.log(e.target.className.baseVal);
    if(e.target.className.baseVal === "bi bi-list" || e.target.className === "list")
    {
        openSideMenu();
    }else{
        switch(e.target.className.baseVal)
        {
            case "bi bi-person":  ui.Skills(); break;
            case "bi bi-envelope":  Contact(); break;
            case "bi bi-briefcase": ui.Blog(); break;
        }
    }
}

function deneme(e)
{
    console.log(e.target.className);
}

function openSideMenu()
{   
    if(clicked === false)
    {
        document.querySelector(".sideMenu").style.height = "13em";
        clicked = true;
        
        const va = document.querySelectorAll(".sideMenu ul a");
        va.forEach((e, index)=>{
            e.style.visibility = "visible";
        });   
    }
    else
    {
        document.querySelector(".sideMenu").style.height = "4em";
        clicked = false;
        const va = document.querySelectorAll(".sideMenu ul a");
        va.forEach((e, index)=>{
            e.style.visibility = "hidden";
        });  

        va[0].style.visibility = "visible";
    }
}

function Contact()
{
    var number = "212 000 00";
    var mail = "info@example.com";
    var instagram = "hgoynucek";
    ui.Contact(number,mail,instagram);
}