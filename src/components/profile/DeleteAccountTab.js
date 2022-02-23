import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { logoutUser } from 'auth/store/userSlice';

import { Card, CardContent, Checkbox, makeStyles, TextField, Typography, withStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

import { Button } from 'custom-components';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: '1rem auto'
    },
    card: {
        flexDirection: 'column',
        margin: '0 1rem'
    },
    deleteDataCheckbox: {
        marginRight: '.2rem'
    },
    deleteDataWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem'
    },
    field: {
        marginBottom: '1rem'
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    root: {
        flexDirection: 'column',
        padding: '2rem',
        [theme.breakpoints.up('md')]: {
            marginTop: '-60px'
        }
    },
    title: {
        margin: '1rem 0 2rem 0'
    },
    wrapper: {
        flexDirection: 'column'
    }
}));

const DangerButton = withStyles({
    root: {
        backgroundColor: red[500],
        color: 'white'
    }
})(Button);

const defaultValues = {
    confirm: '',
    deleteData: false
};

function DeleteAccountTab({ onSubmit: onHandleSubmit = () => {} }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const textProvider = useSelector(({ ui }) => ui.textContent.settingsPage.deleteAccountCard);

    const schema = yup.object().shape({
        confirm: yup
            .string()
            .required(textProvider.confirmRequired)
            .test('match', textProvider.confirmRequired, (word) => {
                return textProvider?.confirmationWord.includes(word.toLowerCase());
            })
    });

    const { control, formState, handleSubmit } = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(schema)
    });

    const { isValid, errors } = formState;

    async function onSubmit(values) {
        const response = await onHandleSubmit(values);
        if (response?.status === 'done') dispatch(logoutUser());
    }

    return (
        <div className={clsx(classes.root, classes.flexCenter)}>
            <div className={classes.flexCenter}>
                <div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
                    <Card>
                        <CardContent className={clsx(classes.card, classes.flexCenter)}>
                            <Typography variant="h6" className={classes.title}>
                                {textProvider.title}
                            </Typography>

                            <form
                                name="resetForm"
                                noValidate
                                className={clsx(classes.wrapper, classes.flexCenter)}
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <Controller
                                    name="confirm"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            className={classes.field}
                                            label={textProvider.deleteLabel}
                                            error={!!errors.confirm}
                                            helperText={errors?.confirm?.message}
                                            variant="outlined"
                                            required
                                            fullWidth
                                        />
                                    )}
                                />

                                <div className={classes.deleteDataWrapper}>
                                    <Controller
                                        name="deleteData"
                                        control={control}
                                        render={({ field }) => (
                                            <Checkbox
                                                {...field}
                                                id="deleteData"
                                                color="primary"
                                                className={classes.deleteDataCheckbox}
                                                error={!!errors.deleteData}
                                                helperText={errors?.deleteData?.message}
                                            />
                                        )}
                                    />
                                    <label htmlFor="deleteData">{textProvider?.deleteDataLabel}</label>
                                </div>

                                <DangerButton
                                    variant="contained"
                                    className={classes.button}
                                    aria-label="Reset"
                                    disabled={!isValid}
                                    type="submit"
                                >
                                    {textProvider.submitBtn}
                                </DangerButton>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default DeleteAccountTab;
