var dvimage=document.querySelectorAll('div.dv-img-e')
var dvfundo=document.querySelectorAll('div.dvsl')
//efeitos de saida
function saida1(){
    dvfundo[0].addEventListener('mouseout',()=>{
        dvimage[0].classList.add('saida-m')
    })
    dvfundo[1].addEventListener('mouseout',()=>{
        dvimage[1].classList.add('saida-m')
    })
    dvfundo[2].addEventListener('mouseout',()=>{
        dvimage[2].classList.add('saida-m')
    })
    dvfundo[3].addEventListener('mouseout',()=>{
        dvimage[3].classList.add('saida-m')
    })
}
saida1()
function saida2(){
    dvfundo[0].addEventListener('mouseout',()=>{
        dvimage[0].classList.add('saida-m2')
    })
    dvfundo[1].addEventListener('mouseout',()=>{
        dvimage[1].classList.add('saida-m2')
    })
    dvfundo[2].addEventListener('mouseout',()=>{
        dvimage[2].classList.add('saida-m2')
    })
    dvfundo[3].addEventListener('mouseout',()=>{
        dvimage[3].classList.add('saida-m2')
    })
}
saida2()