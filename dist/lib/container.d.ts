import { IComponent } from './types';
import { ComponentType } from './enum';
declare class Container implements IComponent {
    type: string;
    name: string;
    component: string;
    path: string;
    private createContainer;
    private deleteContainer;
    private createTest;
    private deleteTest;
    delete(type: ComponentType, name: string): void;
    create(type: ComponentType, name: string): void;
}
export default Container;
