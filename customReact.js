// function customRender(reactElement, container) {
//   //create a dom from reactElement obj
//   const domElement = document.createElement(reactElement.type);
//   domElement.innerHTML = reactElement.children;

//   domElement.setAttribute("href", reactElement.props.href);
//   domElement.setAttribute("target", reactElement.props.target);

//   container.appendChild(domElement);
// }

function customRender(reactElement, container) {
  //create a dom from reactElement obj
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}

//reactElement in obj form
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
    class: "customReact",
  },
  children: "custom React created",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
