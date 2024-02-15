import { FormControl, FormLabel, Grid, InputAdornment, TextField, Tooltip } from "@mui/material";
import { Controller } from "react-hook-form";
import URLCopy from "assets/url-copy.svg";
import FieldError from "@/components/dynamicForm/fieldError";
import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
    login:{
        backgroundColor:'red',
    }
})

interface ITextFieldProps {
    field: any;
    control: any;
    errors: any;
    name?: any;
    watch?:{};
    indexNumber?: any;
}

const TextFieldComponent = ({
    field,
    control,
    errors,
    name,
    watch,
    indexNumber,
}: ITextFieldProps) => {
    const styles=useStyles()

    return (
        <Grid item {...field.breakpoints} sx={{ padding: '10px',border:'none' }} >
            <Controller
                defaultValue={field?.defaultValue}
                name={field.id}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <FormControl component="fieldset" fullWidth>
                         <FormLabel component="legend" sx={{ mb: "10px" }}>{field.name}</FormLabel>
                        <>
                            <TextField
                                onChange={onChange}
                                value={value || ""}
                                label={field.label}
                                type={field.type}
                                className={field.className}
                                fullWidth
                                variant="outlined"
                                sx={{ width: "100%" }}
                                style={field.style}
                                size="small"
                                disabled={field.disabled}
                                inputProps={{
                                }}
                            />
                            {errors && errors[field?.id] && (
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
