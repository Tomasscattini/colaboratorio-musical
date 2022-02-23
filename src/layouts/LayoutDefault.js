import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

// Layouts
import { Footer, GeneralHeader, ScrollTopBtn, ToastMessage } from 'custom-components';

const useStyles = makeStyles((theme) => ({
    headerFixed: {
        paddingTop: '130px',
        [theme.breakpoints.up('sm')]: {
            paddingTop: '80px'
        }
    },
    root: {
        backgroundColor: theme.palette.background.default
    },
    pageWrapper: {
        minHeight: 'calc(90vh - 50px)'
    }
}));

const LayoutDefault = ({ children, footer, scrollBtn }) => {
    const classes = useStyles();

    const headerFixed = useSelector(({ ui }) => ui.headerSettings.fixed);

    const showBtn = scrollBtn === undefined ? true : scrollBtn;
    const showFooter = footer === undefined ? true : footer;

    return (
        <div className={classes.root}>
            <GeneralHeader fixed={headerFixed} />
            <div className={clsx(classes.pageWrapper, headerFixed && classes.headerFixed)}>{children}</div>
            {showBtn && <ScrollTopBtn />}
            {showFooter && <Footer />}
            <ToastMessage />
        </div>
    );
};

export default LayoutDefault;
