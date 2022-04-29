import { useSelector } from 'react-redux';
import style from './auth-error.module.css';

const AuthError = () => {
    const error = useSelector(state => state.user.error);

    return (<>
        {error && (
            <p className={style.error}>
                {error.code === 422 ? (
                    'Les informations saisies sont incorrectes.'
                ) : (
                    'Une erreur s\'est produite !'
                )}
            </p>
        )}
    </>);
};

export default AuthError;