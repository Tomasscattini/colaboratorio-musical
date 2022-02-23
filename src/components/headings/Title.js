import React from 'react';
import clsx from 'clsx';

import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: theme.palette.text.primary,
        width: '100%',
        marginTop: '2vh',
        '& .title': {
            textTransform: 'capitalize',
            marginBottom: 0,
            fontWeight: '700',
            textAlign: 'center'
        },
        '& .sub-title': {
            marginTop: '15px',
            maxWidth: '700px',
            lineHeight: 'inherit',
            textAlign: 'center'
        }
    }
}));

export default function Title({ className, title, size, subtitle, subtitleSize, style }) {
    const classes = useStyles();
    return (
        <div className={clsx(classes.root, className)} style={style}>
            <Box>
                <Typography variant={size === 'small' ? 'h4' : 'h3'} className="title">
                    {title}
                </Typography>
                {subtitle && (
                    <Typography
                        variant={subtitleSize === 'large' ? 'h6' : 'body1'}
                        color="textSecondary"
                        className="sub-title"
                    >
                        {subtitle}
                    </Typography>
                )}
            </Box>
        </div>
    );
}
