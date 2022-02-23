import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { makeStyles, Typography } from '@material-ui/core';

import { parsePath } from 'utils/helpers';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '300px',
        position: 'relative',
        zIndex: '1199',
        '& a': {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px',
            textDecoration: 'none',
            '& img': {
                width: '30px',
                height: '30px'
            }
        }
    },
    title: {
        display: 'inline',
        color: theme.palette.text.primary,
        margin: '20px 0 20px 10px',
        fontSize: '1.4rem'
    },
    smallTitle: {
        fontSize: '1rem',
        marginTop: '25px',
        marginBottom: '25px'
    }
}));

export default function Logo({ imageSrc, className, size = 'default', title }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Link to={parsePath()} className={className}>
                {imageSrc && <img src={imageSrc} alt={`${title} Logo`} />}
                &nbsp;
                <Typography variant="h2" className={clsx(classes.title, size === 'small' && classes.smallTitle)}>
                    {title}
                </Typography>
            </Link>
        </div>
    );
}
