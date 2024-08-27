function cursorEffect() {
    var cursor = document.querySelector(".cursor");

    window.addEventListener("mousemove", function (e) {
        gsap.to(cursor, {
            x: e.x,
            y: e.y
        })
    })
}

cursorEffect();

function animation(){

    gsap.from('nav ul li', {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.3,
    })
    
    
    gsap.from('#banner h1', {
        y: 20,
        opacity: 0,
        scale: 0.2,
        opacity: 0,
        duration: 1,
    })


    
    gsap.to('#banner .last img', {
        y: 100,
        duration: 2,
        repeat: -1,
        yoyo: true
    })
    
    gsap.to('#sec-four .one-img', {
        y: 80,
        duration: 2,
        repeat: -1,
        yoyo: true
    })
    
    gsap.to('#sec-four .two-img', {
        y: 80,
        duration: 2,
        repeat: -1,
        delay: 1,
        yoyo: true
    })
    
    gsap.to('#sec-four .three-img', {
        y: 80,
        duration: 2,
        repeat: -1,
        delay: 2,
        yoyo: true
    })
    
    
    
}

animation()