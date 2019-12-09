import { StylesType, ComponentType } from './enum';
export interface IFiles {
    getCurrentDirectoryBase(): void;
    fileExists(file: any): void;
    directoryExists(filePath: string): void;
}
export interface IComponent {
    type: string;
    name: string;
    component: string;
    path: string;
    create(type: ComponentType, name: string): void;
    delete(type: ComponentType, name: string): void;
}
export interface IStyle {
    name: string;
    create(styleType: StylesType, componentType: ComponentType, name: string): void;
    delete(styleType: StylesType, componentType: ComponentType, name: string): void;
}
export interface IStyles {
    name: string;
    path: string;
    create(componentType: ComponentType, name: string): void;
    delete(componentType: ComponentType, name: string): void;
}
export interface IDuck {
    name: string;
    path: string;
    create(name: string): void;
    delete(name: string): void;
}
