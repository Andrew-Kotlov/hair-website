gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
    })

    gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
        }
    })

    let itemsL = gsap.util.toArray('.gallary__left .gallary__item')

    itemsL.forEach(item => {
        gsap.fromTo(item, { x: -500, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: '.galary__item',
                scrub: true
            }
        })
    })

}
