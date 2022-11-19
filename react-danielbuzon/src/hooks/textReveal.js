import { splitToLines, splitToChars } from "./cloneSplit"

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function textReveal(text, trigger, revealOnly, scrub, pin, animateOpacity, startOffset) {
    setTimeout(() => {
        splitToLines(text, false);
        revealClip(text, trigger, revealOnly, scrub, pin, animateOpacity, startOffset);
    }, []);
}

export function charReveal(text, trigger, revealOnly, scrub, pin, animateOpacity, startOffset) {
    setTimeout(() => {
        splitToChars(text);
        revealClip(text, trigger, revealOnly, scrub, pin, animateOpacity, startOffset);
    }, []);
}

export function textRevealInline(text, trigger, revealOnly, scrub, pin, animateOpacity, startOffset) {
    setTimeout(() => {
        splitToLines(text, true);
        revealClip(text, trigger, revealOnly, scrub, pin, animateOpacity, startOffset);
    }, []);
}

export function elementReveal(el, trigger, startOffset) {
    setTimeout(() => {
        revealFade(el, trigger, startOffset);
    }, []);
}

function revealClip(text, trigger, revealOnly, scrub, pin, animateOpacity, startOffset) {
    // if (!window.matchMedia("(min-width: 1024px)").matches) return;
    if (!text) return;
    let settings = {
        trigger: trigger,
        start: "",
        end: 1000,
        animation: "",
        ease: "none",
        scrub: scrub,
        pin: pin
    };

    let elements;
    elements = text.querySelectorAll(".line")
    if (elements.length == 0) elements = text.querySelectorAll(".char");

    settings = defineSettings(settings, text, trigger, startOffset)

    let tlScroll = gsap.timeline({ defaults: { ease: settings.ease }, paused: true });
    tlScroll
        .to(text, { opacity: 1, autoAlpha: 1, duration: 0 })
        .to(elements, { y: "0%", duration: 1.35, stagger: 0.05, onStart: () => { setTimeout(() => { text.classList.add("wasInView") }, 350) } })


    if (window.getComputedStyle(text, null).getPropertyValue("content")) tlScroll.to(text, { "--pseudoOpacity": "1", duration: 1 }, "<")
    if (animateOpacity) tlScroll.fromTo(elements, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.05 }, "<");
    if (!revealOnly) tlScroll.to(elements, { y: "-100%", duration: 1, stagger: 0.05 });

    settings.animation = tlScroll;

    createScrollTrigger(settings)
}

function revealFade(el, trigger, startOffset) {
    if (!el) return;
    let settings = {
        trigger: trigger,
        start: "",
        end: 1,
        animation: "",
        ease: "none",
    };

    settings = defineSettings(settings, el, trigger, startOffset)

    let tlScroll = gsap.timeline({ defaults: { ease: settings.ease, opacity: 0 }, paused: true });
    tlScroll
        .to(el, { autoAlpha: 1 })
        .to(el, { opacity: 1, duration: 1, stagger: 0.1 })

    settings.animation = tlScroll;

    createScrollTrigger(settings)
}

function offsetHeight(el, div) {
    let divOffset = div.offsetTop;;
    if (!div.offsetTop) divOffset = 1;

    let offset = el.offsetTop - divOffset;

    return offset;
}

function createScrollTrigger(settings) {
    setTimeout(() => {
        gsap.registerPlugin(ScrollTrigger)
        ScrollTrigger.create({
            trigger: settings.trigger,
            start: settings.start,
            end: `+=${settings.end}`,
            scroller: "body",
            animation: settings.animation,
            scrub: settings.scrub,
            pin: settings.pin,
            // markers: true,
        })
    }, 150);
}

function defineSettings(oldSettings, el, trigger, startOffset) {
    let newSettings = oldSettings;

    if (!startOffset) startOffset = 0;

    let triggerOffsetHeight;
    trigger.offsetHeight ? triggerOffsetHeight = trigger.offsetHeight : triggerOffsetHeight = window.innerHeight

    let startOffsetToApply = Math.floor((offsetHeight(el, trigger) / triggerOffsetHeight) * 100) + (startOffset) + "%";
    // if (newSettings.scrub > 0 || newSettings.scrub == '') newSettings.start = "50% 50%", newSettings.ease = "none";
    newSettings.start = `${startOffsetToApply} 80%`
    newSettings.ease = "expo";

    return newSettings;
}