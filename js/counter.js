export class Counter {
    constructor(selector) {
        this.count = 0;
        this.selector = selector;
        this.mount();
    }
    
    mount() {
        const container = document.querySelector(this.selector);

        this.display = document.createElement("div");
        this.button = document.createElement("button");
        // add buttons, decrement, reset
        this.decrementBtn = document.createElement("button")
        // this.reset

        // set button text
        this.button.textContent = "Increment";
        // set new button text
        // this.decrement...
        this.decrementBtn.textContent = "Decrement";
        // this.reset....

        // Append display and button into the container
        container.appendChild(this.display);
        container.appendChild(this.button);
        // append new buttons
        // container.appendChild
        container.appendChild(this.decrementBtn)

        // add Eventlistener
        this.button.addEventListener("click", () =>this.increment());
        // add new Eventlistener

        this.decrementBtn.addEventListener("click", () =>this.decrementBtn());
         // when this first gets mounted update the display
        this.update();
    }


        // state methods
        increment() {
            this.count++;
            this.update();
        }

        // decrement() {
        //     if statement needed
        //         this.count--;
        //         this.update();
        // }

        decrement () {
            if (this.count > 0) {
                this.count--;
                this.update();
            }
        }

        // reset() {
        //     this.count = 0;
        // }

        
        update() {
            // set initial display content
            this.display.textContent = `Count: ${this.count}`;

            // classList.toggle() this.count === 0
        }
}

// counter is super classes
// stepcounter is sub class

class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1) {
        super(selector, initialValue);
        //add step property
        //
    }
}