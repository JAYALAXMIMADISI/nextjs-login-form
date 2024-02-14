export interface IDynamicFieldProps {
    id?: string;
    name?: string;
    fieldType: string;
    isDependent?: boolean;
    listKey?: string;
    dependencyFields?: [];
    mandatory?: boolean;
    property?: "horizontal" | "vertical" | undefined;
    isController?: boolean;
    createNewStatus?: boolean;
    placeholder?: string;
    isSearchEnable?: boolean;
    label?: string;
    breakpoints?: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
    customOptions?: [];
}

export interface IDynamicFormProps {
    fields: any;
    control?: {};
    setValue?: (a: string, b: string | []) => any;
    getValues?: () => void;
    watch?: {};
    errors?: {};
    name?: string;
    indexNumber?: number;
    controlName?: string;
  }