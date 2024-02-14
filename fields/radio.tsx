import { FormControl, Grid, TextField } from "@mui/material"
import { Controller } from "react-hook-form"
import { FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material"

interface IRadioFieldProps {
    field: any
    control: any
    errors: any
}

const RadioField = ({ field, control, errors }: IRadioFieldProps) => {
    return (
        <Grid item {...field.breakpoints} sx={{padding:'10px' }}>
            <Controller
                render={({ field: { onChange, value } }) => (
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{mb:"10px"}}>{field.name}</FormLabel>
                        <RadioGroup
                            row
                            aria-label="gender"
                            name="row-radio-buttons-group"
                            value={value}
                            onChange={onChange}
                            defaultChecked={field.listOfValues1[0]}
                        >
                            {field.listOfValues1.map(
                                (radiofield: string, index: number) => (
                                    <FormControlLabel
                                        value={radiofield}
                                        control={<Radio />}
                                        label={radiofield}
                                        className="radio-label"
                                    />
                                )
                            )}
                        </RadioGroup>
                    </FormControl>
                )}
                name={field?.id}
                control={control}
                defaultValue={field?.defaultValue}
            />
        </Grid>
    )
}

export default RadioField
