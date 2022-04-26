import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useRedirectLogUser } from '../../hooks/redirect-hook';
import { userRegister } from '../../store/actions/user-action';

const registerSchema = yup.object({
    pseudo: yup.string().trim().required(),
    email: yup.string().trim().email().required(),
    password: yup.string().required(),
    passwordConfirm: yup.string().required().oneOf([yup.ref('password')]),
}).required();

const RegisterPage = () => {
    useRedirectLogUser();

    const dispatch = useDispatch();

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

    const onSubmit = ({ pseudo, email, password }) => {
        dispatch(userRegister({ pseudo, email, password }));
    };

    return (<>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap='20px'>
                <Controller
                    render={({ field }) =>
                        <TextField
                            error={errors.pseudo}
                            fullWidth
                            label='Pseudo'
                            {...field}
                        />
                    }
                    name='pseudo'
                    control={control}
                    defaultValue=''

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
                    name='email'
                    control={control}
                    defaultValue=''

                />
                <Controller
                    render={({ field }) =>
                        <TextField
                            error={errors.password}
                            fullWidth
                            label='Password'
                            type='password'
                            {...field} />
                    }
                    name='password'
                    control={control}
                    defaultValue=''
                />
                <Controller
                    render={({ field }) =>
                        <TextField
                            error={errors.passwordConfirm}
                            fullWidth
                            label='Confirmation'
                            type='password'
                            {...field} />
                    }
                    name='passwordConfirm'
                    control={control}
                    defaultValue=''
                />

                <Box alignSelf='flex-start'>
                    <Button variant='contained' type='submit' >Envoyer</Button>
                </Box>
            </Stack>
        </form>
    </>);
};

export default RegisterPage;