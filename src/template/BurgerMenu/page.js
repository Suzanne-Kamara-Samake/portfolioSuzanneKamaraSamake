import { NavigationView} from "./index.js";


let V = {

};
V.render= function(){
    // let slot = document.getElementById("app");

    //     slot.appendChild(NavigationView.dom()) ;
       return NavigationView.html();
      
};

let C = {};
C.init= function(){
    return V.render();
    
}
export function NavigationPage() {
    V.render();
    // document.body.appendChild(NavigationView.dom());
    return C.init();
}