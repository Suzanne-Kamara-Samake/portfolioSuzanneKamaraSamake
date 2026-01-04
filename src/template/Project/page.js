import { ProjectView } from "./index.js";
import { htmlToFragment } from "../../utils/utils.js";

let M = {};
M.data = [
  {
    projectTitle: "One page - Esthero, Breath from Another",
    titleColor: "pink",
    imageProject: "/public/Project/bfa.svg",
    tagBgColor: "light-blue",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • personnal",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d’un cours de où nous avions a designer un one page de présentation d’une oeuvre en incorporant l’identité visuelle de l’oeuvre dans la charte graphique du site designé",
  },
  {
    projectTitle: "One page - Klimt, Adele Bloch Bauer",
    titleColor: "pink",
    imageProject: "/public/Project/bfa.svg",
    tagBgColor: "pink",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • academic",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d’un cours de où nous avions a designer un one page de présentation d’une oeuvre en incorporant l’identité visuelle de l’oeuvre dans la charte graphique du site designé",
  },
  {
    projectTitle: "Site e-commerce - Evisu",
    titleColor: "pink",
    imageProject: "/public/Project/evisu.svg",
    tagBgColor: "orange",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • personnal",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d’un cours de où nous avions a designer un one page de présentation d’une oeuvre en incorporant l’identité visuelle de l’oeuvre dans la charte graphique du site designé",
  },
  {
    projectTitle: "site de streaming fictif",
    titleColor: "pink",
    imageProject: "/public/Project/stream.svg",
    tagBgColor: "light-blue",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • personnal",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d’un cours de où nous avions a designer un one page de présentation d’une oeuvre en incorporant l’identité visuelle de l’oeuvre dans la charte graphique du site designé",
  },
  {
    projectTitle: "cartes de mouvement artistique",
    titleColor: "pink",
    imageProject: "/public/Project/card.svg",
    tagBgColor: "light-blue",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • personnal",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d’un cours de où nous avions a designer un one page de présentation d’une oeuvre en incorporant l’identité visuelle de l’oeuvre dans la charte graphique du site designé",
  },
  {
    projectTitle: "Portfolio de compétences",
    titleColor: "pink",
    imageProject: "/public/Project/portfolio.svg",
    tagBgColor: "light-blue",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • personnal",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d’un cours de où nous avions a designer un one page de présentation d’une oeuvre en incorporant l’identité visuelle de l’oeuvre dans la charte graphique du site designé",
  },
  {
    projectTitle: "One page - Olive Oil",
    titleColor: "pink",
    imageProject: "/public/Project/oliveoil.svg",
    tagBgColor: "light-blue",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • personnal",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d’un cours de où nous avions a designer un one page de présentation d’une oeuvre en incorporant l’identité visuelle de l’oeuvre dans la charte graphique du site designé",
  },
  {
    projectTitle: "application - Hemera",
    titleColor: "pink",
    imageProject: "/public/Project/hemera.svg",
    tagBgColor: "light-blue",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • personnal",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d’un cours de où nous avions a designer un one page de présentation d’une oeuvre en incorporant l’identité visuelle de l’oeuvre dans la charte graphique du site designé",
  },
];

let V = {};

V.renderTemplate = function (data, template) {
  // let html = ProjectView.dom();
  // let templateElement = html.querySelector(`template.${template}`);
  // console.log(template);
  // let templateDOM = template.content.cloneNode(true);
  // console.log(templateDOM);
  let templateHTML = template.innerHTML;
  console.log(templateHTML);
  // console.log(templateHTML);
  const placeholderRegex = /{{([^}]+)}}/g;
  templateHTML = templateHTML.replace(
    placeholderRegex,
    (match, key) => data[key] || match
  );
  return templateHTML;
};

V.renderLayout = function () {
  let data = M.data;
  let elt = "";

  let html = ProjectView.dom();

  let container = html.getElementById("container");
  let layoutElement = html.querySelector(`template#basicLayout`);
  // console.log(layoutElement);
  let templates = html.querySelectorAll(".component");
  
  // let slots = templateSlot.querySelectorAll('slot');
  // console.log(slots);
  let maxi = 0;
  let slot = null;

  // let templateSlot=layoutElement.content.cloneNode(true);
  for (let i = 0; i < data.length; i++) {
    let templateSlot = layoutElement.content.cloneNode(true);
    let slotContainer = document.createElement("div");
    let slots = templateSlot.querySelectorAll("slot");
    if (maxi > 2) {
      maxi = 0;
      container.appendChild(slotContainer);
    }
    slot = slots[maxi];
    console.log(maxi, slot,data[i]);
    // console.log(templates[maxi].innerHTML);
    elt = V.renderTemplate(data[i], templates[maxi]);
    //    console.log(elt);
    //    console.log(htmlToFragment(elt));
    slot.appendChild(htmlToFragment(elt));
    console.log(slot);
    maxi++;
    slotContainer.appendChild(slot);
    container.appendChild(slotContainer);
  }
  // console.log(container.innerHTML);
  return container.innerHTML;
};

// V.renderLayout = function(data){
//     let elt="";
//     let html = ProjectView.dom();
//     let layoutElement = html.querySelector(`template#basic layout`);
//     let slots = layoutElement.querySelectorAll('slot');
//     let templates=html.qurySelectorAll('template');
//     for (let elt of data){
//         let slot = slots[elt.slotIndex];
//         for (let i=0;i<templates.length;i++){
//         elt+=V.renderTemplate(elt.data,templates[i].className);
//     }
//     slot.replaceWith(elt);
//     return layoutElement.innerHTML;
// }
// }

V.render = function () {
  return ProjectView.html();
};

let C = {};
C.init = function () {
  return V.renderLayout();
};
export function ProjectPage() {
  // document.body.appendChild(ProjectView.dom());
  return C.init();
}
