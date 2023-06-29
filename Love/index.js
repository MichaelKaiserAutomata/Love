const Yesbutton = document.querySelector('#Yesbutton');

Yesbutton.addEventListener('click',function () {
    alert('DID YOU KNOW YOU WOULD SAY YES')
    alert('YOU MAKE ME THE HAPPIEST PROGRAMMER!!!')
    alert('WHAT IF YOU CALL ME?')
    alert('I LOVE YOU ❤')
});

const Nobutton = document.querySelector('#Nobutton');

Nobutton.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    Nobutton.style.setProperty('top',randomY+'%');
    Nobutton.style.setProperty('left',randomX+'%');
    Nobutton.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})