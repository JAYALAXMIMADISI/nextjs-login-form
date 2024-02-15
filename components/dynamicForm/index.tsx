import React, { useState, useEffect } from "react";
import TextFieldComponent from "@/fields/text";
import RadioField from "@/fields/radio";
import ListField from "@/fields/list";
import { IDynamicFieldProps } from "@/interfaces/login";

type FormProps = {
    errors: {};
    control: {};
    getValues: (id: string) => void;
    reset?: (data: {}) => void;
    fields: any;
    setValue?: any;
    watch?: {};
    index?: number;
    name?: string;
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
    } = props;
    const renderField = (field: IDynamicFieldProps, index: number) => {
        switch (field.fieldType) {
            case "TEXT":
                return (
                    <TextFieldComponent
                        field={field}
                        control={control}
                        errors={errors}
                        watch={watch}
                    />
                );
            case "RADIO":
                return <RadioField field={field} control={control} errors={errors} watch={watch} />;
            case "LIST":
                return (
                    <ListField
                        field={field}
                        errors={errors}
                        control={control}
                        getValues={getValues}
                        watch={watch}
                    />
                );

            default:
                return null;
        }
    };
    return <React.Fragment>{fields && fields.map(renderField)}</React.Fragment>;
}
