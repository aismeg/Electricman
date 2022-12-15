import modal from "./modules/modal";
import scrolling from "./modules/scrolling";
import slider from "./modules/slider";
import sending from "./modules/sending";
import validate from "./modules/validate";
import maskPhone from "./modules/maskPhone";

scrolling();
modal();
slider();
sending({ element: 'form1' });
validate();
maskPhone('[name="tel"]', '+7 (___) ___-__-__');