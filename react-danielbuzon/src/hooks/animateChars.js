import gsap from "gsap";

export function animateCharsIn(textToAnimate, textToAnimateSecond, x) {
    let tl = gsap.timeline({ paused: true });
    tl.to(textToAnimate, {
        duration: 0.3,
        y: "-100%",
        x: x,
        stagger: 0.02,
        ease: "power2.inOut",
    })
        .to(
            textToAnimateSecond,
            {
                duration: 0.35,
                y: "-100%",
                x: x,
                stagger: 0.02,
                ease: "power2",
            },
            "-=0.25"
        );

    return tl
}

export function animateWordsIn(textToAnimate, textToAnimateSecond, x) {
    let tl = gsap.timeline({ paused: false });
    tl.to(textToAnimate, {
        duration: 0.3,
        y: "-100%",
        x: x,
        stagger: 0.02,
        ease: "power2.out",
    })

    return tl
}

export function animateLinesIn(textToAnimate, textToAnimateSecond, x) {
    let tl = gsap.timeline({ paused: false });
    tl.to(textToAnimate, {
        duration: 2,
        y: "-100%",
        x: x,
        stagger: 0.02,
        ease: "power2.inOut",
    })

    return tl
}