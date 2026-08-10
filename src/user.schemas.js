import * as yup from 'yup';

const MIN_LENGHT = {
    name: 2,
    city: 1,
    country: 2,
};

const MAX_LENGHT = {
    name: 20,
    city: 30,
    country: 30,
};



export const getUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().integer().positive().required('ID is required and must be a positive integer'),
            }),
        },
    },
};

export const addUser = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                name: yup.string().min(MIN_LENGHT.name).max(MAX_LENGHT.name),
                email: yup.string().email('Invalid email format'),
                city: yup.string().min(MIN_LENGHT.city).max(MAX_LENGHT.city),
                country: yup.string().min(MIN_LENGHT.country).max(MAX_LENGHT.country),
            }),
        },
    },
};

export const updateUser = {
    schema: {
         body: {
            yupSchema: yup.object().shape({
                name: yup.string().min(MIN_LENGHT.name).max(MAX_LENGHT.name),
                email: yup.string().email('Invalid email format'),
                city: yup.string().min(MIN_LENGHT.city).max(MAX_LENGHT.city),
                country: yup.string().min(MIN_LENGHT.country).max(MAX_LENGHT.country),
            }),
        },
    },
};

export const removeUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().integer().positive().required('ID is required and must be a positive integer'),
            }),
        },
    },
};
