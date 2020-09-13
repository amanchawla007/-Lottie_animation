var anim;
    var elem = document.getElementById('bodymovin')
    var animData = {
        container: elem,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false,
            preserveAspectRatio: 'xMidYMid slice'
        },
        path: '17657-birthday-card.json'
    };
    anim = bodymovin.loadAnimation(animData);

    $(window).scroll(function() {

         
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

      
        console.log(anim.currentRawFrame);
     
        scrollPercentRounded = Math.round(scrollPercent);
       
        /*console.log( (scrollPercentRounded / 100) * anim.totalFrames );*/

        anim.goToAndStop( (scrollPercentRounded / 100) * 4000)
    });