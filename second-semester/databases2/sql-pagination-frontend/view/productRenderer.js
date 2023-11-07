import ItemRenderer from "./itemrenderer.js";

export default class ProductRenderer extends ItemRenderer {
  render() {
    const product = this.item;
    const html = /*HTML*/ `
      <tr>
        <td data-field="name">${product.name}</td>
        <td data-field="price">${product.price}</td>
        <td data-field="stock">${product.stock} pcs</td>
      </tr>`;

    return html;
  }

  // postRender(element) {
  //   // Add eventListener to element
  //   element.addEventListener("click", event => {
  //     const action = event.target.dataset.action ?? "update";
  //     const animal = this.item;
  //     // Handle action - as defined in data-action="..."
  //     if (action == "update") {
  //       // ask controller to start update view
  //       controller.selectAnimalForUpdate(animal);
  //     } else if (action == "toggle") {
  //       // "toggle" actions only updates a single property
  //       // and then re-renders the element
  //       // the controller isn't expected to re-render the entire list!
  //       const field = event.target.dataset.field;
  //       if (field === "winner") {
  //         animal.toggleWinner();
  //         controller.updateSingleProperty(animal, "winner");
  //         this.rerender(element);
  //       }
  //       if (field === "star") {
  //         animal.toggleStar();
  //         controller.updateSingleProperty(animal, "star");
  //         this.rerender(element);
  //       }
  //     } else if (action == "delete") {
  //       controller.confirmDeleteAnimal(animal);
  //     }
  //   });
  // }
}
