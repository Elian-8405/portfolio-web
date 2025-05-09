const menuButton = document.getElementById('menu-icon-mobile');
const sideMenu = document.querySelector(".nav-mobile");
const closeButton = document.getElementById('close-button');





menuButton.addEventListener('click', () => {
    
    if(window.getComputedStyle(sideMenu).display === 'none'){
        sideMenu.style.display = 'flex';

    }else{
        sideMenu.style.display = 'none';
    }
})



closeButton.addEventListener('click', () =>{
    if(window.getComputedStyle(sideMenu).display === 'flex'){
        sideMenu.style.display = 'none';

    }else{
        sideMenu.style.display = 'none';
    }

} )



function closeOnClick(){
    sideMenu.style.display = 'none';
}








