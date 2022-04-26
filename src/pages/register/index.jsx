import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";

const registerSchema = yup.object({
    pseudo: yup.string().trim().required(),
    email: yup.string().trim().email().required(),
    password: yup.string().required(),
    passwordConfirm: yup.string().required().oneOf([yup.ref('password')]),
}).required();

const RegisterPage = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            pseudo: '',
            email: '',
            password: '',
            passwordConfirm: '',
        },
        resolver: yupResolver(registerSchema),
        reValidateMode: 'onSubmit'
    });

    const onSubmit = (data) => {
        //TODO Ajax request !
        console.log(JSON.stringify(data));
    };
    return (<>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box gap='20px' display="flex" flexDirection='column'  >
                <Controller
                    render={({ field }) =>
                        <TextField
                            error={errors.pseudo}
                            fullWidth
                            label='Pseudo'
                            {...field}
                        />
                    }
                    name="pseudo"
                    control={control}
                    defaultValue=""

                />
                <Controller
                    render={({ field }) =>
                        <TextField
                            error={errors.email}
                            fullWidth
                            label='Email'
                            {...field}
                        />
                    }
                    name="email"
                    control={control}
                    defaultValue=""

                />
                <Controller
                    render={({ field }) =>
                        <TextField
                            error={errors.password}
                            fullWidth
                            label='Password'
                            type="password"
                            {...field} />
                    }
                    name="password"
                    control={control}
                    defaultValue=""
                />
                <Controller
                    render={({ field }) =>
                        <TextField
                            error={errors.passwordConfirm}
                            fullWidth
                            label='Confirmation'
                            type="password"
                            {...field} />
                    }
                    name="passwordConfirm"
                    control={control}
                    defaultValue=""
                />

                <Box alignSelf='flex-start'>
                    <Button variant="contained" type='submit' >Envoyer</Button>
                </Box>
            </Box>
        </form>
    </>);
};

export default RegisterPage;