import { FormControl, FormLabel, Grid, InputAdornment, TextField, Tooltip } from "@mui/material";
import { Controller } from "react-hook-form";
import URLCopy from "assets/url-copy.svg";
import FieldError from "@/components/dynamicForm/fieldError";

interface ITextFieldProps {
    field: any;
    control: any;
    errors: any;
    name?: any;
    indexNumber?: any;
    register?: any;
}

const TextFieldComponent = ({
    field,
    control,
    errors,
    name,
    register,
    indexNumber,
}: ITextFieldProps) => {

    console.log("check for props", field)

    const multiFormError =
        errors && errors?.[name]?.[indexNumber]?.[field.id]?.message;
    const singleFormError = errors && errors[field.id]?.message;

    console.log("check for breakpoints", field)


    return (
        <Grid item {...field.breakpoints} sx={{ padding: '10px' }} >
            <Controller
                defaultValue={field?.defaultValue}
                name={field.id}
                control={control}
                // rules={{ required: 'true', minLength: field.minLength, maxLength: field.maxLength }}
                render={({ field: { onChange, value } }) => (
                    <FormControl component="fieldset" style={{ minWidth: 350 }}>
                        <FormLabel component="legend" sx={{ mb: "10px" }}>{field.name}</FormLabel>
                        <>
                            <TextField
                                onChange={onChange}
                                value={value || ""}
                                label={field.label}
                                type={field.type}
                                // {...register(field.id, {
                                //     required: true,
                                //     validate: {
                                //         minLength: (v: any) => v.length >= field.minLength,
                                //         maxLength: (v: any) => v.length >= field.maxLength,
                                //         //   matchPattern: (v:any) => /^[a-zA-Z0-9_]+$/.test(v),
                                //     },
                                // })}
                                // placeholder={field.name}
                                className={field.className}
                                fullWidth
                                error={multiFormError ? multiFormError : singleFormError}
                                variant="outlined"
                                // required={field.required}
                                sx={{ width: "100%" }}
                                style={field.style}
                                size="small"
                                disabled={field.disabled}
                                inputProps={{
                                    // readOnly: field.readOnly ? field.readOnly : false,
                                    // maxLength: field?.maxLength,
                                    // minLength: field?.minLength,
                                }}
                            // InputProps={
                            //     field.icon && {
                            //         endAdornment: (
                            //             <InputAdornment
                            //                 position="end"
                            //                 sx={{ cursor: "pointer", height: "40px" }}
                            //             >
                            //                 <div
                            //                     style={{
                            //                         borderLeft: "1px solid #ced4da",
                            //                         height: "40px",
                            //                     }}
                            //                 >
                            //                 </div>
                            //             </InputAdornment>
                            //         ),
                            //     }
                            // }
                            // inputProps={{maxLength:field.maxLength}}
                            />
                            {console.log("check for errors", errors)}
                            {errors && (singleFormError || multiFormError) && (
                                <FieldError
                                    field={field}
                                    errors={errors}
                                    name={name}
                                    indexNumber={indexNumber}
                                />
                            )}
                        </>
                    </FormControl>
                )}
            />
        </Grid>
    );
};

export default TextFieldComponent;
