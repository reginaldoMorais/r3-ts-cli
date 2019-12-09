import { IStyles } from './types';
import { ComponentType } from './enum';
declare class Style implements IStyles {
    name: string;
    type: string;
    path: string;
    component: string;
    createStyle(): void;
    private deleteStyle;
    delete(type: ComponentType, name: string): void;
    create(type: ComponentType, name: string): void;
}
export default Style;
