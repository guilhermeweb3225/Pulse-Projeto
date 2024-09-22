var img1=document.querySelectorAll('img.arrow-animation1')
var img2=document.querySelectorAll('img.arrow-animation2')
var dv1=document.querySelectorAll('div.dvsl')
var dv2=document.querySelectorAll('div.dvsr')
var p_inforE=document.querySelectorAll('p.p-infor')
var p_inforR=document.querySelectorAll('p.p-inforR')
//funçoes e eventos a baixo
//divs do lado esquerdo da tela
function abrir1(){
    img1[0].addEventListener('click',()=>{
        dv1[0].classList.remove('fechardv')
        dv1[0].classList.add('delft')
        dv1[0].style.width='80vw'
        img1[0].style.transform='translate(-100%,-50%) rotate(180deg)'
        p_inforE[0].style.fontSize='2vw'
        fechar1()
    })
    img1[1].addEventListener('click',()=>{
        dv1[1].classList.remove('fechardv')
        dv1[1].classList.add('delft')
        dv1[1].style.width='80vw'
        img1[1].style.transform='translate(-100%,-50%) rotate(180deg)'
        p_inforE[1].style.fontSize='2vw'

        fechar1()
    })
}
abrir1()
function fechar1(){
    img1[0].addEventListener('click',()=>{
       dv1[0].classList.add('fechardv')
       dv1[0].style.width='16vw'
       img1[0].style.transform='translate(-100%,-50%) rotate(0deg)'
       p_inforE[0].style.fontSize='0vw'

       abrir1()
    })
    img1[1].addEventListener('click',()=>{
        dv1[1].classList.add('fechardv')
       dv1[1].style.width='16vw'
       img1[1].style.transform='translate(-100%,-50%) rotate(0deg)'
       p_inforE[1].style.fontSize='0vw'
       abrir1()
    })
}
//dvs do lado direito da tela
function abrir2(){
    img2[0].addEventListener('click',()=>{
        dv2[0].classList.remove('fechar12')
        dv2[0].classList.add('delft2')
        dv2[0].style.width='80vw'
        dv2[0].style.left='130%'
        img2[0].style.transform='translate(-100%,-50%) rotate(0deg)'
        p_inforR[0].style.fontSize='2vw'
        fechar2()
    })
    img2[1].addEventListener('click',()=>{
        dv2[1].classList.remove('fechar12')
        dv2[1].classList.add('delft2')
        dv2[1].style.width='80vw'
        dv2[1].style.left='130%'
        img2[1].style.transform='translate(-100%,-50%) rotate(0deg)'
        p_inforR[1].style.fontSize='2vw'

        fechar2()
    })
}
abrir2()
function fechar2(){
    img2[0].addEventListener('click',()=>{
       dv2[0].classList.add('fechar12')
       dv2[0].style.width='16vw'
       dv2[0].style.left='100%'
       img2[0].style.transform='translate(-100%,-50%) rotate(180deg)'
       p_inforR[0].style.fontSize='0vw'

       abrir2()
    })
    img2[1].addEventListener('click',()=>{
        dv2[1].classList.add('fechar12')
       dv2[1].style.width='16vw'
       dv2[1].style.left='100%'
       img2[1].style.transform='translate(-100%,-50%) rotate(180deg)'
       p_inforR[1].style.fontSize='0vw'
       abrir2()
    })
}