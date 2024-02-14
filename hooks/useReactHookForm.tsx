import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useReactHookForm = (
    initialValues: any,
    validationSchema: any,
    getItem: any
) => {
    const {
        control,
        formState: { errors },
        getValues,
        watch,
        reset,
        setValue,
        handleSubmit,
        clearErrors,
        register,
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: { ...initialValues, ...getItem },
        resolver: yupResolver(validationSchema),
    });

    return {
        control,
        errors,
        getValues,
        watch,
        reset,
        setValue,
        handleSubmit,
        clearErrors,
        register
    };
};

export default useReactHookForm;
