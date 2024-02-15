import FieldError from "@/components/dynamicForm/fieldError";
import { IDynamicFieldProps } from "@/interfaces/login";
import {
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";

interface ISingleSelectCustomFieldProps {
    field: any;
    control: any;
    errors: any;
    watch?: {};
    // filteredData: any;
    getValues?: {};
}

const ListField = ({
    field,
    errors,
    control,
    watch,
    // filteredData,
    getValues,
}: ISingleSelectCustomFieldProps) => {
    return (
        <Grid item {...field.breakpoints} sx={{ padding: '10px' }}>
            <Controller
                render={({ field: { onChange, value } }) => (
                    <>
                        <FormControl error={errors && errors[field.id]?.message} component="fieldset" size="small" fullWidth>
                            {/* <FormLabel component="legend" sx={{mb:'10px'}}>{field.name}</FormLabel> */}
                            <InputLabel id="demo-simple-select-label">
                                {field.label}
                            </InputLabel>
                            <FormLabel component="legend" sx={{ mb: "10px" }}>{field.name}</FormLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={value}
                                label="Enter Gender"
                                onChange={onChange}
                                placeholder={field?.label}
                                required={field.required}
                            >
                                <MenuItem value="">
                                    None
                                </MenuItem>
                                {field?.listOfValues1?.map((option: string) => {
                                    return (

                                        <MenuItem value={option} key={option}>
                                            {option}
                                        </MenuItem>

                                    );
                                })}
                            </Select>
                            {errors && errors[field.id]?.message && (
                                <FieldError field={field} errors={errors} />
                            )}
                        </FormControl>
                    </>
                )}
                name={field.id}
                control={control}
                defaultValue=""
            />

        </Grid>
    );
};

export default ListField;
