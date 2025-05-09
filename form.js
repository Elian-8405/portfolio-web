const inName = document.getElementById('user-name');
const inUserEmail = document.getElementById('user-email');
const inMessage = document.getElementById('user-mensage');


(function(){
    emailjs.init("DP0QIY7TV7D4WVAcr"); 
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_hfzbvat', 'template_fjw7vgi', this)
      .then(() => {
        alert("Mensagem enviada com sucesso!");


        inName.value = "";
        inUserEmail.value = "";
        inMessage.value = "";


      }, (error) => {
        alert("Erro ao enviar: " + JSON.stringify(error));
      });
  });





//Limpar form
/** 
const btDetail = document.getElementById('submit-button')




btDetail.addEventListener('click', () => {

    setTimeout(() => {
      
  
      
      if(inName.value !== "" && inUserEmail.value !== "" && inMessage.value !== ""){
          inName.value = "";
          inUserEmail.value = "";
          inMessage.value = "";
  
      }
  
  
    }, 2000);
    
    
});

*/
