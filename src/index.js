import modal from "./modules/modal";
import slider from "./modules/slider";
import sending from "./modules/sending";
import validate from "./modules/validate";
import maskPhone from "./modules/maskPhone";

modal();
slider();
sending({ element: 'form1' });
validate();
maskPhone('[name="tel"]', '+7 (___) ___-__-__');