/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const dyslexia = () => {
  document.querySelector("body").classList.toggle("dyslexia-mode");
  console.log(document.querySelector("body").classList)
}

document.querySelector("#dyslexia-toggle").addEventListener('click', dyslexia);

const isPressed = window.localStorage.getItem('dyslexic') === 'true';
    if(isPressed) {
        document.querySelector("body").classList.add('dyslexia-mode');
    }
    // set the button to pressed if appropriate
    const toggle = document.getElementById('dyslexia-toggle');
    if(isPressed) {
        toggle.setAttribute('aria-pressed', 'true');
    }
    // toggle dyslexia support
    toggle.addEventListener('click', (e) => {
        dyslexia();
        let pressed = e.target.getAttribute('aria-pressed') === 'true';
        e.target.setAttribute('aria-pressed', String(!pressed));
        document.body.classList.toggle('dyslexia-mode');
        console.log(window.localStorage.getItem('dyslexic'))
        window.localStorage.setItem('dyslexic', String(!pressed));
    });
