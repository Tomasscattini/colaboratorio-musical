import React from 'react';
import { useSelector } from 'react-redux';

import { Avatar, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginLeft: '15px'
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px 10px',
        backgroundColor: theme.palette.background.default,
        borderRadius: '12px',
        textAlign: 'right',
        cursor: 'pointer'
    },
    userEmail: {
        fontSize: '.7rem'
    },
    userName: {
        fontSize: '.88rem',
        fontWeight: '600'
    }
}));

const AuthUserSmallCard = ({ onClick = () => {} }) => {
    const classes = useStyles();
    const user = useSelector(({ auth }) => auth.user.data);

    return (
        <div onClick={onClick} className={classes.root}>
            <div>
                <Typography className={classes.userName} color="textPrimary" variant="body1">
                    {user.personalInformation?.firstName} {user.personalInformation?.lastName}
                </Typography>
                <Typography className={classes.userEmail} color="textSecondary" variant="body2">
                    {user.personalInformation?.email}
                </Typography>
            </div>
            <Avatar
                className={classes.avatar}
                src={user.personalInformation?.photoURL}
                alt={user.personalInformation?.firstName}
            />
        </div>
    );
};

export default AuthUserSmallCard;
