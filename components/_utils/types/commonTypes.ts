
export interface IInputCallbackData {
    dataLabel: string | undefined | null;
    value: any;
}

export interface IValidationCallbackData {
    dataLabel: string | undefined | null;
    value?: any;
    required?: boolean;
}
