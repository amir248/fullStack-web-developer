let textMenu="<a href='/'>Home</a><a href='/about'>About</a><a href='/projects'>Projects</a><a href='/services'>Services</a>"
document.querySelector("#menu").addEventListener('click',()=>{
    let openMenu=document.createElement("div");
    document.querySelector("body").prepend(openMenu);
    openMenu.classList.add('okMenu');
    openMenu.innerHTML=`${textMenu}`;
    let countLink=document.querySelectorAll(".okMenu > a");
    setTimeout(()=>{
        document.querySelector(".okMenu").style.cssText=`
            height:100vh;
            opacity:1;
        `;
        for(let i=0;i<countLink.length;i++){
            document.querySelectorAll(".okMenu > a")[i].style.fontSize=`33px`;
        }
        
    },100);
    document.querySelector(".okMenu").addEventListener("click",()=>{
        closeMenu();
        setTimeout(()=>{
            document.querySelector(".okMenu").remove();
        },777);
    });
    function closeMenu(){
        
        document.querySelector(".okMenu").style.cssText=`
            height:0;
            top:100%;
            opacity:0;
        `;
        for(let i=+0;i<countLink.length;i++){
            document.querySelectorAll(".okMenu > a")[i].style.fontSize=`0px`;
        }
    }
})