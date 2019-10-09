export interface Listener {
    (): void;
}
export interface State {
    [type: string]: any;
}
export interface States {
    [type: string]: State;
}
export interface Action {
    (...arg: any[]): void | undefined | State | Promise<State> | Promise<undefined>;
}
export interface Actions {
    [type: string]: Action;
}
declare type StoreMap = (state: State) => any;
export interface Maps {
    [p: string]: StoreMap;
}
export interface InjectMaps {
    [p: string]: any;
}
export interface StoreModule {
    state: State;
    actions: Actions;
    maps?: Maps;
}
export interface InjectStoreModule {
    state: State;
    actions: Actions;
    maps?: any;
}
export interface LazyStoreModules {
    [p: string]: () => Promise<StoreModule>;
}
export interface Modules {
    [p: string]: StoreModule;
}
export declare type ModuleName = keyof Modules | keyof LazyStoreModules;
export declare type Middleware = (params: {
    setState: (m: ModuleName, state: any) => any;
    getState: State;
}) => (next: any) => (p: {
    moduleName: ModuleName;
    actionName: String;
    state: any;
}) => any;
export interface Store {
    createDispatch: (a: string) => Action;
    addModule: (moduleName: ModuleName, storeModule: StoreModule) => Store;
    getModule: (moduleName: ModuleName) => InjectStoreModule;
    setModule: (moduleName: ModuleName, storeModule: StoreModule) => Store;
    removeModule: (moduleName: ModuleName) => Store;
    hasModule: (moduleName: ModuleName) => boolean;
    getOriginModule: (moduleName: ModuleName) => StoreModule | {};
    getLazyModule: (moduleName: ModuleName) => () => Promise<StoreModule>;
    subscribe: (moduleName: ModuleName, listener: Listener) => () => void;
    getAllModuleName: () => ModuleName[];
}
declare type CreateStore = (modules?: Modules, lazyModules?: LazyStoreModules, initStates?: States, middlewares?: Middleware[], isLazy?: boolean) => Store;
declare const createStore: CreateStore;
export declare const getStoreInstance: () => Store;
export default createStore;
