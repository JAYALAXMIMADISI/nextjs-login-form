import { TextField, styled } from "@mui/material";

export const TextInput: any = styled(TextField)`
  & .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input {
    cursor: ${({ $readOnly }: any) => ($readOnly ? "not-allowed" : "text")};
  }
`;