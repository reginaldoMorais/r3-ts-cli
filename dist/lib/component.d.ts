import { IComponent } from './types';
import { ComponentType } from './enum';
declare class Component implements IComponent {
    type: string;
    name: string;
    component: string;
    path: string;
    private createComponent;
    private deleteComponent;
    private createTypes;
    private deleteTypes;
    private createTest;
    private deleteTest;
    delete(type: ComponentType, name: string): void;
    create(type: ComponentType, name: string): void;
}
export default Component;
