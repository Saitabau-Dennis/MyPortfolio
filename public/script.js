const anim = anime.timeline({
    loop: true,
    direction: 'alternate'
});

anim
    .add({
        targets: '#hexagon path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuart',
        duration: 2000,
        delay: function (el, i) {
            return i * 250;
        },
    })
    .add({
        targets: '#hexagon #S',
        duration: 1000,
        opacity: 1,
        easing: 'easeInOutQuart',
        complete: function () {
            // Stop the animation loop
            anim.pause();
            // Hide the loader and show the main content
            document.getElementById('loader').style.display = 'none';
            document.querySelector('main').style.display = 'flex';
            console.log("all animations completed")
        }
    });