"use strict";
class Section {
    constructor(id) {
        this.elem = document.getElementById(id);
    }
}
let observer = new IntersectionObserver(function (entries) {
    for (let e of entries) {
        if (e.isIntersecting) {
            console.log("enter");
            let a = e.target;
            // the transition will be fired
            //a.style.left = "0%";
            for (let e of a.children) {
                let c = e;
                c.style.padding = "0%";
            }
        }
        else {
            console.log("release");
            let a = e.target;
            // the transition will be fired
            //a.style.left = "100%";
            for (let c of a.children) {
                c.style.padding = "0% 0% 0% 100%";
            }
        }
    }
}, {
    threshold: [0.2]
});
class HomePageDisplay {
    constructor() {
        this.body = document.getElementById("body");
        this.intro = document.getElementById("Main");
        this.elements = [
            new Section("OurTeam"),
            new Section("OurServices"),
        ];
        for (let e of this.elements) {
            observer.observe(e.elem);
        }
    }
}
function main() {
    let displey = new HomePageDisplay;
}
main();
