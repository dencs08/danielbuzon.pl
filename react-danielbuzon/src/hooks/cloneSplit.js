import clone from "./clone"
import SplitType from 'split-type'

export function splitCloneToChars(elementToSplit) {
    const chars = new SplitType(elementToSplit, { types: "chars" });
    clone(elementToSplit)
}

export function splitToChars(elementToSplit) {
    const chars = new SplitType(elementToSplit, { types: "chars" });

    wrap(elementToSplit)
    chars.chars.forEach(char => {
        char.classList.add("translate-y-[120%]")
    });
}

export function splitToWords(elementToSplit) {
    const words = new SplitType(elementToSplit, { types: 'words' });

    words.words.forEach(word => {
        wrap(word)
    });
}

export function splitToLines(elementToSplit, addInline) {
    const lines = new SplitType(elementToSplit, { types: 'lines' });

    lines.lines.forEach(line => {
        wrap(line, addInline)
        line.classList.add("translate-y-[100%]")
    });
}

function wrap(toWrap, addInline, wrapper) {
    wrapper = wrapper || document.createElement('span');
    toWrap.parentNode.appendChild(wrapper);
    wrapper.classList.add('clip');
    if (addInline) wrapper.classList.add('inline-block');
    if (!addInline) wrapper.classList.add('block')
    wrapper.append(' ')
    return wrapper.appendChild(toWrap);
};