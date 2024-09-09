import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  /**
   * Resizes a DOM-Text-Element to fit the entire width of the screen/viewport.
   * @param id id of the DOM-Element that should be resized.
   * @param fitTo id of the DOM-Element that the text should fill fully.
   */
  resizeText(id: string, fitTo: string) {
    try {
      // get DOM-Element by id
      let element = document.getElementById(id);
      // get Bounding Box of the element
      let elementDimensions = element?.getBoundingClientRect();

      // get parent DOM-Element by id
      let parent = document.getElementById(fitTo);
      // get the total screen width
      const innerWidth = parent!.getBoundingClientRect().width;

      // calculate the coefficent between the total available screen width and the elements current width
      let widthRatio = innerWidth / elementDimensions!.width;

      // Use the ratio to scale up the height of the DOM-Element to fit the entire width
      let targetHeight = elementDimensions!.height * widthRatio;

      // Set the font-size (representing the maximum height of a character) to be slightly less to ensure it will not go over the bounds.
      element!.style.fontSize = `${targetHeight * 0.7}px`;
    } catch (e) {
      console.error(e);
    }
  }
}
