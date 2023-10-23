const burgerButton=document.querySelector('.burger__button')
const informationBlock=document.querySelector('.main_information')

burgerButton.addEventListener('click', function(){
    if(informationBlock.style.display === 'none' || informationBlock.style.display === ''){
        informationBlock.style.display = 'block';
        informationBlock.style.position = 'absolute';
        informationBlock.style.width = '50%';

        
        //тут додати ширину 50%
    }else {
        // Інакше, приховуємо блок інформації
        informationBlock.style.display = 'none';
       
    }
})

console.log(burgerButton)