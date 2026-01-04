import { LayoutView} from "./index.js";
import { htmlToFragment } from "../../utils/utils.js";
import { NavigationPage} from "../BurgerMenu/page.js";
import { AboutMePage} from "../About Me/page.js";
import { ProjectPage} from "../Project/page.js";
import { ContactPage} from "../Contact/page.js";    

let V = {

};
V.dom=LayoutView.dom();

     
V.render= function(){
   let nav = V.dom.getElementById("navBar");
    nav.replaceWith(htmlToFragment(NavigationPage()));
    let about = V.dom.getElementById("SiteHeader AboutMe");
    about.replaceWith(htmlToFragment(AboutMePage()));
    let project = V.dom.getElementById("siteMain MyProjects");
    project.replaceWith(htmlToFragment(ProjectPage()));
    let contact = V.dom.getElementById("siteFooter Contact");
    contact.replaceWith(htmlToFragment(ContactPage())) ;
    return V.dom;
};

let C = {};
C.init= function(){
    return V.render();
    
}
export function LayoutPage() {
    
    // document.body.appendChild(LayoutView.dom());
    return C.init();
}