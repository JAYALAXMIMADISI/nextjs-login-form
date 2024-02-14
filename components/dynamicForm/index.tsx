// import React from "react";
// import TextFieldComponent from "@/fields/text";
// import RadioField from "@/fields/radio";
// import { IDynamicFieldProps, IDynamicFormProps } from "@/interfaces/login";
// import { Box } from "@mui/material";

// const fieldsWithComponents: any = {
//     TEXT: TextFieldComponent,
//     RADIO: RadioField,
// };

// const renderField = (
//     field: any,
//     control?: {},
//     errors?: {},
//     setValue?: (a: string, b: string | []) => void,
//     getValues?: () => void,
//     watch?: {},
//     // controlName?: string,
//     // indexNumber?: number
// ) => {
//     let Component = fieldsWithComponents[field.fieldType](field.isController);
//     return (
//         // <></>
//         <Component
//             {...field}
//             control={control}
//             errors={errors}
//             setValue={setValue}
//             getValues={getValues}
//             watch={watch}
//             // controlName={controlName}
//             // indexNumber={indexNumber}
//         />
//     );
// };

// export default function DynamicForm(props: any) {
//     const {
//         fields,
//         control,
//         setValue,
//         getValues,
//         watch,
//         errors,
//         // controlName,
//         // indexNumber,
//     } = props;

//     return (
//         <Box sx={{ display: 'flex', maxWidth: '100%', gap: '16px' }} >
//             {fields.map((field: any) =>
//                 renderField(
//                     field,
//                     control,
//                     errors,
//                     setValue,
//                     getValues,
//                     watch,
//                     // controlName,
//                     // indexNumber
//                 )
//             )}
//         </Box>
//     );
// }




import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import { Checkbox as SelectCheckbox, Grid } from "@mui/material";
// import { genearteLabelAndValue } from "./helper";
// import { metaData } from "./helper";
import TextFieldComponent from "@/fields/text";
import RadioField from "@/fields/radio";
import ListField from "@/fields/list";

type FormProps = {
    errors: any;
    control: any;
    getValues: (id: string) => void;
    reset?: (data: {}) => void;
    fields: any;
    setValue?: any;
    watch?: any;
    register?: any;
    index?: any;
    name?: string;
    indexNumber?: number;
};

export default function DynamicForm(props: FormProps) {
    const {
        fields,
        control,
        errors,
        getValues,
        setValue,
        watch,
        name,
        indexNumber,
    } = props;
    const [selectedData, setSelectedData] = useState<string>("");
    const [filteredData, setFilteredData] = useState<{}[]>([]);

    //   useEffect(() => {
    //     if (selectedData) {
    //       let parsedSelectedData = JSON.parse(selectedData);
    //       let filtered = metaData.state_list.filter(
    //         (state) => state.state_name === parsedSelectedData.value
    //       );
    //       let filteredData = filtered.flatMap((data: any) => {
    //         return genearteLabelAndValue(data.city_list);
    //       });
    //       setFilteredData(filteredData);
    //     } else {
    //       setFilteredData(
    //         metaData.state_list.flatMap((data: any) =>
    //           genearteLabelAndValue(data["city_list"])
    //         )
    //       );
    //     }
    //   }, [selectedData]);

    const renderField = (field: any, index: number) => {
        switch (field.fieldType) {
            //text
            case "TEXT":
                return (
                    <TextFieldComponent
                        field={field}
                        control={control}
                        errors={errors}
                    // indexNumber={indexNumber}
                    // name={name}
                    />
                );
            case "RADIO":
                return <RadioField field={field} control={control} errors={errors} />;
            case "LIST":
                return (
                    <ListField
                        field={field}
                        errors={errors}
                        control={control}
                        getValues={getValues}
                    />
                );

            default:
                return null;
        }
    };
    return <React.Fragment>{fields && fields.map(renderField)}</React.Fragment>;
}
