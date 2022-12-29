interface ApearElement{
    elem: HTMLDivElement;
}

class Section implements ApearElement{
    elem: HTMLDivElement;

    constructor(id:string){
        this.elem = document.getElementById(id) as HTMLDivElement;

    }
}

let observer = new IntersectionObserver(
    function(entries){
        for (let e of entries){
            if (e.isIntersecting){
                console.log("enter");
                let a = (e.target as HTMLDivElement);
                // the transition will be fired
                //a.style.left = "0%";
                for (let e of a.children){
                    let c = (e as HTMLElement);
                    //c.style.padding = "0%";
                }
                
            } else{
                console.log("release");
                let a = (e.target as HTMLDivElement);
                // the transition will be fired
                //a.style.left = "100%";

                for (let c of a.children){
                    //(c as HTMLElement).style.padding = "0% 0% 0% 100%";
                }
            }
        }
    },
    {
        threshold: [0.2]
    }
)

class HomePageDisplay{
    body: HTMLBodyElement = document.getElementById("body") as HTMLBodyElement
    intro: HTMLDivElement = document.getElementById("Main") as HTMLDivElement

    elements:ApearElement[] = [
        new Section("OurTeam"),
        new Section("OurServices"),
        //new Section("Advent"),
    ]

    constructor(){
        for (let e of this.elements){
            observer.observe(e.elem)
        }
    }
}

function main() {
    let displey = new HomePageDisplay;
}

main()