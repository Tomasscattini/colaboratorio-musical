import React from 'react';
// import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {}
}));

const ProjectsListItem = ({ classes, item, ...props }) => {
    const internalClasses = useStyles();

    // const textProvider = useSelector(({ ui }) => ui.textContent);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            ProjectsListItem
        </div>
    );
};

export default ProjectsListItem;
