import { IStyle } from './types';
import { StylesType, ComponentType } from './enum';

// Libs
import Sass from './sass';
import StyledComponent from './styledComponent';

const sass = new Sass();
const styledComponent = new StyledComponent();

class Style implements IStyle {
  name = '';

  public delete(styleType: StylesType, componentType: ComponentType, name: string) {
    switch (styleType) {
      case StylesType.SASS:
        sass.delete(componentType, name);
        break;

      case StylesType.STYLED:
        styledComponent.delete(componentType, name);
        break;

      default:
        break;
    }
  }

  public create(styleType: StylesType, componentType: ComponentType, name: string) {
    switch (styleType) {
      case StylesType.SASS:
        sass.create(componentType, name);
        break;

      case StylesType.STYLED:
        styledComponent.create(componentType, name);
        break;

      default:
        break;
    }
  }
}

export default Style;
