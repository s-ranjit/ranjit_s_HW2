import { Counter, StepCounter } from './modules/counter.js';
import { GsapAnimation } from "./modules/gsap-animation.js";
import { HamburgerMenu } from "./modules/ham-burger-menu.js";

const container1 = new Counter("#counter-container1"); 
const container2 = new Counter("#counter-container2", 4); // this will be default number
const newCounter = new Counter("#counterCon");
const stepCounter = new StepCounter("#step-counter", 0, 5);

GsapAnimation();
HamburgerMenu();