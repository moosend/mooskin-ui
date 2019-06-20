
export interface IInputCallbackData<T = any> {
    dataLabel: string | undefined | null;
    value: T;
}

export interface IValidationCallbackData<T = any> {
    dataLabel: string | undefined | null;
    value?: T;
    required?: boolean;
}
