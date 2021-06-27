import { SlideNav, Slide } from "./slide.js";
const slide = new Slide(".slide", ".slide-wrapper");
console.log(slide);
slide.init();
slide.changeSlide(2);
slide.activePrevSlide();

const slideNav = new SlideNav(".slide", ".slide-wrapper");
slideNav.init();
slideNav.addArrow(".prev", ".next");
console.log(slideNav);

slideNav.addControl(".custom-controls");
