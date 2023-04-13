window.onload=inicio ;
var vida =0;

function inicio(){
  document.getElementById('ouvrirSession').onclick = comenzar;
  
}

function comenzar(){
  let nombre = document.getElementById('nombre').value.toLowerCase() ;
  let password = Number(document.getElementById('password').value);

  if((nombre == 'many') && (password== 123)){
    document.getElementById('caja2').insertAdjacentHTML('beforeend', `
     <div id="caja2"> <img src="/world_hand.jpg" >
     <div><H1>"HELLO WORLD"</H1></div></div>`);
    }

  else if((nombre !='many') && (password != 123)){
      document.getElementById('caja2').style.display = " none";
      document.getElementById('caja3').style.display = " flex";
      document.getElementById('caja3').innerHTML = `
      ${nombre} Sorry, It's <b> NOT </b> the correct name!
      `;

      vida++;
     if(vida>1){
      document.getElementById('caja1').style.display="none"
      alert('YOU ACCOUNT IS BLOCKED');
      document.getElementById('caja3').innerHTML = `
      ${nombre} Sorry,<b> YOU ACCOUNT IS BLOCKED! </b> Call: 1 800-567-3456
      `;
     }
    }
  
 
}  


  
