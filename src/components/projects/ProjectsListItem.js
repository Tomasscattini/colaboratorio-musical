import React from 'react';
// import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';
import { ItemCard } from 'custom-components';

import { parsePublicProjectCardInfo } from 'utils/helpers';

const useStyles = makeStyles((theme) => ({
    root: {}
}));

const ProjectsListItem = ({ classes, item, ...props }) => {
    const internalClasses = useStyles();

    // const textProvider = useSelector(({ ui }) => ui.textContent);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <ItemCard btnText="Ver más" item={parsePublicProjectCardInfo(item)} />
        </div>
    );
};

export default ProjectsListItem;
