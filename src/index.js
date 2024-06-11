import modal from "./modules/modal";
import scrolling from "./modules/scrolling";
import slider from "./modules/slider";
import sending from "./modules/sending";
import validate from "./modules/validate";
import maskPhone from "./modules/maskPhone";
import faq from "./modules/faq";
import carousel from "./modules/carousel";

scrolling();
modal();
slider();
sending({ element: 'form1' });
validate();
maskPhone('[name="tel"]', '+1 (___) ___-____');
faq();
carousel();