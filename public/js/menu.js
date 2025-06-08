let textMenu="<a href='/'>Home</a><a href='/about'>About</a><a href='/projects'>Projects</a><a href='/services'>Services</a>"
document.querySelector("#menu").addEventListener('click',()=>{
    let openMenu=document.createElement("div");
    document.querySelector("body").prepend(openMenu);
    openMenu.classList.add('okMenu');
    openMenu.innerHTML=`${textMenu}`;
    setTimeout(()=>{
        document.querySelector(".okMenu").style.cssText=`
            height:100vh;
        `;
        for(let i=+0;i<=textMenu.length;i++){
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
        document.querySelector(".okMenu > a").style.cssText=`
            font-size:0px;
        `;
        document.querySelector(".okMenu").style.cssText=`
            height:0;
            top:100%;
        `;
    }
})