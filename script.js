((d)=>{

    const $menuBtn = d.querySelector('.showcase-menu-btn'),
          $menuPanel = d.querySelector('.showcase-navbar');
    
    $menuBtn.addEventListener('click', e => {
        $menuBtn.firstElementChild.classList.toggle('none');
        $menuBtn.lastElementChild.classList.toggle('none');
        $menuPanel.classList.toggle('is-active');
    });

    d.addEventListener('click', e => {
        if(e.target.matches('.showcase-navbar a')) {
            $menuBtn.firstElementChild.classList.remove('none');
            $menuBtn.lastElementChild.classList.add('none');
            $menuPanel.classList.remove('is-active');
        } 

    });

})(document);

((d)=>{

    gsap.from('.anim1', {
        opacity: 0,
        duration: 1,
        y: -50,
        stagger: 0.6,
        ease: 'Back.easeInOut'
    });


})(document);