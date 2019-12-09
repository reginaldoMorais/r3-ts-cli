import { IStyle } from './types';
import { StylesType, ComponentType } from './enum';
declare class Style implements IStyle {
    name: string;
    delete(styleType: StylesType, componentType: ComponentType, name: string): void;
    create(styleType: StylesType, componentType: ComponentType, name: string): void;
}
export default Style;
