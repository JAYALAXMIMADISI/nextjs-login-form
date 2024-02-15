export interface IDynamicFieldProps {
    id: string;
    name: string;
    fieldType: string;
    minLength?: number;
    type?: string;
    maxLength?: number;
    defaultValue: string;
    required: true;
    label: string;
    listOfValues1?: string[];
    breakpoints?: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
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


export interface IToken {
    email: string;
    firstName: string;
    gender: string;
    id: number;
    image: string;
    lastName: string;
    token: string;
    username: string
}

export interface IUsersData {
    id: number,
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}