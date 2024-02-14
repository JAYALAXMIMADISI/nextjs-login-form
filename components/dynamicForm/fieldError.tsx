import { styled } from "@mui/styles";
const FieldWrap = styled("p")({
    display: "block",
});

const ErrorWrapper = styled("p")({
    margin: 0,
    padding: "5px 0px 0px 0px ",
    color: "#e21313",
    width: "220px",
    fontSize: "12px",
});

export const Wrapper = styled("span")({
    width: "100%",
    display: "inline-block",
    marginBottom: "10px",
});

interface ErrorProps {
    errors: any;
    field: any;
    name?: any;
    indexNumber?: any;
}
const FieldError = ({ errors, field, name, indexNumber }: ErrorProps) => {
    return (
        <Wrapper>
            <ErrorWrapper>
                {errors &&
                    (indexNumber !== undefined
                        ? errors?.[name]?.[indexNumber]?.[field.id]?.message
                        : errors[field.id]?.message)}
            </ErrorWrapper>
        </Wrapper>
    );
};

export default FieldError;
