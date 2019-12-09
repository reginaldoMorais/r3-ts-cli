import { IDuck } from './types';
declare class Duck implements IDuck {
    name: string;
    path: string;
    private createTypes;
    private createActions;
    private createSagas;
    private createReducer;
    private setType;
    delete(name: string): void;
    create(name: string): void;
}
export default Duck;
