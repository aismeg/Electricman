import modal from "./modules/modal";
import slider from "./modules/slider";
import sending from "./modules/sending";
import validate from "./modules/validate";

modal();
slider();
sending({ element: 'form1' });
validate();