
const form = document.querySelector('#formulario_1');
form.addEventListener('submit', function(e) {
 
e.preventDefault();
const inputComprimento = e.target.querySelector('#comprimento');
const inputLargura = e.target.querySelector('#largura');
const inputAltutra = e.target.querySelector('#altura');

const comprimento = Number(inputComprimento.value);
const largura = Number(inputLargura.value);
const altura = Number(inputAltutra.value); 


if(!comprimento){
    setResultado('Comprimento Invalido', false);
    return
} 
if(!largura){
    setResultado('Largura Invalido', false);
    return
}

if(!altura){
    setResultado('Altura Invalido', false);
    return
}


const volume = getVolume(comprimento, largura, altura);  
const msg_1 = `<b>O volume é igual a: ${volume} metros cúbicos.</b>`;
setResultado(msg_1, true);
console.log(volume);


function getVolume(comprimento, largura, altura){
    const volume = (comprimento*largura*altura);
    return volume.toFixed(4);
} 


function criarP () {
const p = document.createElement(p);
return p;
}

function setResultado(msg_1, isValid){
    const resultado = document.querySelector('#resultado_1');
    resultado.innerHTML ='';
 
    const p = criarP();
 
    if(isValid){
        p.classList.add('paragrafo_resultado_1');
     } else{
         p.classList.add('bad_1');
    }
   
 p.innerHTML = msg_1;
 resultado.appendChild(p);
   
}
 

function criarP(){
    const p = document.createElement('p');
    return p;
 
}

const form = document.querySelector('#formulario_2');
form.addEventListener('submit', function(e) {
 
e.preventDefault();

const inputQtd_bloco = e.target.querySelector('#qtd_bloco');
const inputPreco = e.target.querySelector('#preco');
const inputDensidade = e.target.querySelector('#densidade');

const qtd_bloco = Number(inputQtd_bloco.value);
const preco = Number(inputPreco.value);
const densidade = Number(inputDensidade.value);

const total = getTotal(qtd_bloco, densidade, preco);
const msg_2= `<b>O valor é igual a: R$ ${total}</b>`;
setResultado_2(msg_2, true);
console.log(total); 

function getTotal(qtd_bloco, preco, densidade){
    const volume_m3 = volume;
    const total = (volume_m3*qtd_bloco*densidade*preco);
    return total.toFixed(2);

}


function criarP2 () {
    const p2 = document.createElement(p2);
   return p2;
   }
  
   function setResultado_2(msg_2, isValid){
       const resultado = document.querySelector('#resultado_2');
       resultado.innerHTML ='';
    
       const p2 = criarP2();
    
       if(isValid){
           p2.classList.add('paragrafo_resultado_2');
        } else{
            p2.classList.add('bad_2')
       }
      
    p2.innerHTML = msg_2;
    resultado.appendChild(p2);
      
   }
    

function criarP2(){
    const p2 = document.createElement('p2');
    return p2;

}

});  
    }); 


    const form_3 = document.querySelector('#formulario_3');
    form_3.addEventListener('submit', function(e) {
     
    e.preventDefault();

    const inputMili_metros = e.target.querySelector('#mili_metros');
 
    const mili_metros = Number(inputMili_metros.value);
   

    const res_conv_mili_metro = getMili_metros(mili_metros);
    const msg_3= `<b>O valor em metros é ${res_conv_mili_metro}</b>`;
    setResultado_3(msg_3, true);
    console.log(res_conv_mili_metro); 
    
    function getMili_metros(mili_metros){
        const res_conv_mili_metro = (mili_metros/1000);

        return res_conv_mili_metro.toFixed(3);
    
    }
    
    function criarP3 () {
        const p3 = document.createElement(p3);
       return p3;
       }
      
       function setResultado_3(msg_3, isValid){
           const resultado = document.querySelector('#resultado_3');
           resultado.innerHTML ='';
        
           const p3 = criarP3();
        
           if(isValid){
               p3.classList.add('paragrafo_resultado_3');
            } else{
                p3.classList.add('bad_3')
           }
          
        p3.innerHTML = msg_3;
        resultado.appendChild(p3);
          
       }
        
    
    function criarP3(){
        const p3 = document.createElement('p3');
        return p3;
    }
    
});

    const form_4 = document.querySelector('#formulario_4');
    form_4.addEventListener('submit', function(e) {
     
    e.preventDefault();

    const inputCenti_metros = e.target.querySelector('#centi_metros');
 
    const centi_metros = Number(inputCenti_metros.value);
   

    const res_conv_centi_metros = getCenti_metros(centi_metros);
    const msg_4= `<b>O valor em metros é ${res_conv_centi_metros}</b>`;
    setResultado_4(msg_4, true);
    console.log(res_conv_centi_metros); 
    
    function getCenti_metros(centi_metros){
        const res_conv_centi_metros = (centi_metros/100);

        return res_conv_centi_metros.toFixed(3);
    
    }
    
    function criarP4 () {
        const p4 = document.createElement(p4);
         return p4;
       }
      
       function setResultado_4(msg_4, isValid){
           const resultado = document.querySelector('#resultado_4');
           resultado.innerHTML ='';
        
           const p4 = criarP4();
        
           if(isValid){
               p4.classList.add('paragrafo_resultado_4');
            } else{
                p4.classList.add('bad_4')
           }
          
        p4.innerHTML = msg_4;
        resultado.appendChild(p4);
          
       }
        
    
    function criarP4(){
        const p4 = document.createElement('p4');
        return p4;
    }
    
});

    const form_5 = document.querySelector('#formulario_5');
    form_5.addEventListener('submit', function(e) {
     
    e.preventDefault();

    const inputComp_bloco = e.target.querySelector('#comp_bloco');
    const inputPerfilado_lamina = e.target.querySelector('#perfilado_lamina');
 
    const comp_bloco = Number(inputComp_bloco.value);
    const perfilado_lamina = Number(inputPerfilado_lamina.value);
 

    const result_qtd_lamina = getPerfilado(comp_bloco, perfilado_lamina);
    const msg_5= `<b> QTD laminas: ${result_qtd_lamina}</b>`;
    setResultado_5(msg_5, true);
    console.log(result_qtd_lamina); 
    
    function getPerfilado(comp_bloco, perfilado_lamina){
        const result_qtd_lamina = (comp_bloco / perfilado_lamina);

        return result_qtd_lamina.toFixed(3);
    
    }
    
    function criarP5 () {
        const p5 = document.createElement(p4);
         return p5;
       }
      
       function setResultado_5(msg_5, isValid){
           const resultado = document.querySelector('#resultado_5');
           resultado.innerHTML ='';
        
           const p5 = criarP5();
        
           if(isValid){
               p5.classList.add('paragrafo_resultado_5');
            } else{
                p5.classList.add('bad_5')
           }
          
        p5.innerHTML = msg_5;
        resultado.appendChild(p5);
          
       }
        
    
    function criarP5(){
        const p5 = document.createElement('p5');
        return p5;
    }

});







