export const validateUserLoginForm = (values) => {
    const errors = {};

    if(!values.username) {
        errors.username = 'Required';
    } else if (values.username.length < 5) {
        errors.username = 'Username must be at least 6 characters.';
    } else if (values.username.length > 16) {
        errors.username = 'Username has to be 15 characters or less.';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 7) {
        errors.password = 'Password must be a minimum of 8 characters.'
    }

    return errors;
};