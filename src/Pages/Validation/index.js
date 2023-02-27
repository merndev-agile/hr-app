import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { TextField } from "@material-ui/core";
// const schema = yup.object({
//   name: yup.string().required(),
// //   age: yup.number().positive().integer().required(),
// }).required();
const schema = Yup.object().shape({
    name: Yup.string()
        .required("Required")
        .min(3, "Enter at least 3 characters")
});

export default function ValidationPage() {
    const { handleSubmit, formState: { errors }, control, trigger } = useForm({
        defaultValues: {
            name: false
        },
        resolver: yupResolver(schema)
    });
    const onSubmit = async (data, e) => {
        const name = data.name;
        console.log("submitted ", data);

        // if (!pokemon) {
        //   setShowPokemon(false);
        //   return;
        // }

        // setShowPokemon(true);
    };
    // React.useEffect(() => {
    //     setError("name", {
    //       types: {
    //         required: "This is required",
    //         minLength: "This is minLength"
    //       }
    //     });
    //   }, [setError])
    const onNameChange = async (value) => {
        // Trigger is used to target an element 
        const valid = await trigger("name");
        console.log("valid", valid, "value", value);
        if (!valid) {
            // @todo: bug here? valid only correct after submitting

            return;
        }

    };

    return (
        // <form onSubmit={(e)=>{
        //     console.log("dju",e.target.value)
        //     // handleSubmit()
        //     }}>
        //   <input control={control} defaultValue=" " name="firstName" {...(register('name', { required: true }))}  />

        //   <input type="submit" />
        // </form>

        <form onSubmit={handleSubmit(onSubmit)}>
            {/* CONTROLLER isly use hua hai kyunki hum MUI TEXTFIELD use kar rahe hain in react hook form */}
            <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field: { value, onChange, ...field }, errors, ref, setError }) => (
                    <TextField
                        {...field}
                        onChange={({ target: { value } }) => {
                            onChange(value);
                            onNameChange(value);

                        }}
                        placeholder="Enter a pokemon"
                        variant="outlined"
                        label="pokemaon"
                        error={Boolean(errors && errors.name)}
                        helperText={(errors && errors.name && errors.name.message)}
                        inputRef={ref}


                    />
                )}

            />

            <button type="submit"
            >
                Show Pokemon
            </button>
            {errors.name && <p>{errors.name.message}</p>}
            {console.log("error", errors.name && errors.name.message)}
        </form>
    );
}
