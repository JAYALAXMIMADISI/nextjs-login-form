import * as Yup from "yup";

export const mandatoryFields = [
    { id: "full_name" },
    { id: "email" },
    { id: "gender" },
    { id: "love_react" }
]


export const fields = [
    {
        id: "full_name",
        name: "Full Name *",
        fieldType: "TEXT",
        minLength: 1,
        type: "text",
        maxLength: 100,
        defaultValue: "John Doe",
        required: true,
        label: "Enter Full Name",
        breakpoints: { xs: 12, sm: 6, md: 4, lg: 3 },
    },
    {
        id: "email",
        name: "Email *",
        fieldType: "TEXT",
        minLength: 1,
        maxLength: 50,
        type: "email",
        defaultValue: "hello@mail.com",
        required: true,
        label: "Enter Email",
        breakpoints: { xs: 12, sm: 6, md: 4, lg: 3 },
    },
    {
        id: "gender",
        name: "Gender *",
        fieldType: "LIST",
        defaultValue: 1,
        required: true,
        listOfValues1: [
            "Male",
            "Female",
            "Others"
        ],
        label: "Select Gender",
        breakpoints: { xs: 12, sm: 6, md: 4, lg: 3 },
    },
    {
        id: "love_react",
        name: "Love React ? *",
        fieldType: "RADIO",
        defaultValue: "Yes",
        required: true,
        listOfValues1: [
            "Yes",
            "No"
        ],
        breakpoints: { xs: 12, sm: 6, md: 4, lg: 3 },
    }
]

export const loginFormInitialValues = {
    full_name: "",
    email: "",
    gender: "",
    love_react: false
}

export const loginFormValidationSchema = Yup.object().shape({
    full_name: Yup.string().max(100, "maximum characters length is 100").min(1, "Full Name is Required"),
    email: Yup.string().max(50, "maximum characters length is 50").min(1, "Email is Required"),
    gender: Yup.string().required("Gender is Required"),
    love_react: Yup.string()
})


export const isFieldsValidate = (
    errors: any,
    fields: { id: string }[],
    getValues: any
) => {
    let emptyFields: any = [];
    let allErrorEmpty: any = [];
    for (const { id } of fields) {
        if (errors && errors[id] && errors[id] && errors[id]["message"]) {
            allErrorEmpty.push(errors[id] && errors[id]["message"]);
        } else {
            allErrorEmpty.push("");
        }
        const res = getValues(id);
        emptyFields.push(getValues(id));
    }
    const isEveryFieldNotEmpty = emptyFields.every((field: any) => {
        if (Array.isArray(field)) return field.length > 0;
        return field !== "" && field !== undefined && field !== false
    });
    const isEveryErrorMessageEmpty = allErrorEmpty.every((field: any) => field === "");

    return (
        isEveryFieldNotEmpty &&
        isEveryErrorMessageEmpty &&
        Object.keys(errors).length === 0
    );
};


