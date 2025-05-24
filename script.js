const menuButton = document.getElementById('menu-icon-mobile');
const sideMenu = document.querySelector(".nav-mobile");
const closeButton = document.getElementById('close-button');

const skilCard = document.getElementsByClassName('skils-card');
const iconSkill = document.querySelectorAll(".skil-icon");



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





// Animação de mostrar e aparecer o icone

for(let i = 0; i < skilCard.length; i++){
    skilCard[i].addEventListener('mouseenter', () => {
        
        console.log("Estou nesse index:" + i)
        console.log("Teste");

        if(window.getComputedStyle(iconSkill[i]).display === 'none'){
            iconSkill[i].style.display = 'flex';

        }
        skilCard[i].addEventListener('mouseout', () => {
            
            if(iconSkill[i].style.display === 'flex'){
                setTimeout(() => {
                    iconSkill[i].style.display = 'none';    
                }, 800);
                
            }
        })   
    })
}


