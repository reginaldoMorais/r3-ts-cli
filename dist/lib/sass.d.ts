import { IStyles } from './types';
import { ComponentType } from './enum';
declare class Style implements IStyles {
    name: string;
    type: string;
    componentType: ComponentType;
    path: string;
    private setSharedImport;
    private setPagesImport;
    createStyle(): void;
    private deleteStyle;
    delete(type: ComponentType, name: string): void;
    create(type: ComponentType, name: string): void;
}
export default Style;
