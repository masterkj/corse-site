import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-block"), "85%");
new RevealOnScroll($(".testimonial"), "90%");
