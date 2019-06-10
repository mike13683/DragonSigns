$(document).ready(function(){
    // homepage
    // intro text appear on scroll
    $(".intro-text__content").each(function(){
        // Init ScrollMagic
        var controller2 = new ScrollMagic.Controller();

        // build a scene
        var ourScene2 = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook:0.8 /*controlls how far down you scroll down page to activate scene*/
            // reverse:false /*only fades in once*/
        })
            .setClassToggle(this, 'fade-in-2') // add class to project01
            // .addIndicators({
            //     name: 'fade scene',
            //     colorTrigger: 'black',
            //     indent: 200,
            //     colorStart: '#75C695'
            // }) // this requires a plugin
            .addTo(controller2);
    });

    // homepage
    // pin about text

    // Init ScrollMagic
    var controllerScroll = new ScrollMagic.Controller();


    var pinScene = new ScrollMagic.Scene({
        triggerElement: '.js-pin-hook',
        triggerHook: 0,
        duration: '70%'
    })
        .setPin('.js-pin-hook', {pushFollowers: false})
        // .addIndicators({
        //     name: 'fade scene',
        //     colorTrigger: 'black',
        //     indent: 200,
        //     colorStart: '#75C695'
        // }) // this requires a plugin
        .addTo(controllerScroll);

    var controllerScroll2 = new ScrollMagic.Controller();

    // homepage
    // pin process text
    var pinScene2 = new ScrollMagic.Scene({
        triggerElement: '.js-pin-hook2',
        triggerHook: 0,
        duration: '80%'
    })
        .setPin('.js-pin-hook2', {pushFollowers: false})
        // .addIndicators({
        //     name: 'fade scene',
        //     colorTrigger: 'black',
        //     indent: 200,
        //     colorStart: '#75C695'
        // }) // this requires a plugin
        .addTo(controllerScroll2);

    // gallery page
    // loop through each .project element
    $(".services").each(function(){
        // Init ScrollMagic
        var controller = new ScrollMagic.Controller();

        // build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0], /*img*/
            triggerHook:0.9 /*controlls how far down you scroll down page to activate scene*/
            // reverse:false /*only fades in once*/
        })
            .setClassToggle(this, 'fade-in') // add class to project01
            // .addIndicators({
            //     name: 'fade scene',
            //     colorTrigger: 'black',
            //     indent: 200,
            //     colorStart: '#75C695'
            // }) // this requires a plugin
            .addTo(controller);
    });

    // var controller8 = new ScrollMagic.Controller();
    //
    // // build a scene
    // var ourScene8 = new ScrollMagic.Scene({
    //     triggerElement: '.home-hero'
    // })
    //     .setClassToggle('.carousel-caption', 'fade-in-2') // add class to project01
    //     /*.addIndicators({
    //      // name: 'fade scene',
    //      // colorTrigger: 'black',
    //      // indent: 200,
    //      // colorStart: '#75C695'
    //      }) // this requires a plugin*/
    //     .addTo(controller8);

// move down, about page
    $(".movedown-js").each(function(){
        // Init ScrollMagic
        var controller10 = new ScrollMagic.Controller();

        // build a scene
        var ourScene10 = new ScrollMagic.Scene({
            triggerElement: this.children[0], /*img*/
            triggerHook:0.9, /*controlls how far down you scroll down page to activate scene*/
            // reverse:false /*only fades in once*/
        })
            .setClassToggle(this, 'fade-in') // add class to project01
            /*            // .addIndicators({
             // name: 'fade scene',
             // colorTrigger: 'black',
             // indent: 200,
             // colorStart: '#75C695'
             }) // this requires a plugin*/
            .addTo(controller10);
    });


// jumbotron hero header text increase on scroll
    var controller9 = new ScrollMagic.Controller();

// pin the intro
    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '.jumbotron.hero',
        triggerHook: 0.1,
        duration: '50%'
    })
    // .setPin('.header-js', {pushFollowers: false})
        .setClassToggle('.header-js', 'header-js-secondary') // add class to project01
        /*    .addIndicators({
         name: 'fade scene',
         colorTrigger: 'black',
         indent: 200,
         colorStart: '#75C695'
         }) // this requires a plugin*/
        .addTo(controller9);

// jumbotron hero header bg colour change on scroll
    var controller121 = new ScrollMagic.Controller();

    var changeToRed = TweenMax.to('.jumbotron.hero', 0.5, {
        backgroundColor: '#ED1D24'
    });

    var whenInContainer = new ScrollMagic.Scene({
        triggerElement: '.jumbotron',
        triggerHook: 0.1,
        duration: '50%'
    })
        .setTween(changeToRed)
        .addTo(controller121);
    /*        .addIndicators({
     name: 'fade scene',
     colorTrigger: 'black',
     indent: 200,
     colorStart: '#75C695'
     });*/

    // $('.carousel').carousel({
    //     interval: 72000
    // })


    });

