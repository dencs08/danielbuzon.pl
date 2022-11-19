export default function clone(obj) {
    const clone = obj.cloneNode(true);
    obj.parentNode.insertBefore(
        clone,
        obj.nextSibling
    );
    obj.nextSibling.classList.add("block")
    clone.classList.add("absolute");
    clone.classList.add("pointer-events-none");
    for (let i = 0; i < clone.children.length; i++) {
        const child = clone.children[i];
        child.classList.add("translate-y-[100%]");
        child.classList.add("italic");
        child.classList.add("pointer-events-none");
    }
}