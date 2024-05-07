gsap.to(".page1 #box1",{
    rotate:360,
    duration:1,
    delay:1,
    repeat:-1
})

gsap.from(".page2 h1",{
    opacity:0,
    x:500,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:"body",
        // markers:true, //to make triggers viewable
        scrub:2 ,//for reverse and forward with scroll
        start:"top 50%", //set scroller-start to top 50%
    }
})


gsap.to(".page3 h1",{
    transform:"translateX(-150%)",
    duration:3.5,
    scrollTrigger:{
        trigger:".page3 h1",
        scroller:"body",
        markers:true,
        scrub:2,
        start:"top 0%",
        end:"top -50%",
        pin:true
    }
})