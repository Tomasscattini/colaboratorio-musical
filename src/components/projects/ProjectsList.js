import React from 'react';
// import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

import { Loader, ProjectsListItem } from 'custom-components';

const useStyles = makeStyles((theme) => ({
    root: {}
}));

const ProjectsList = ({ classes, items, loading, ...props }) => {
    const internalClasses = useStyles();

    // const textProvider = useSelector(({ ui }) => ui.textContent);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Loader loading={loading} />
            {!loading && items?.map((item, index) => <ProjectsListItem key={item.id || index} item={item} />)}
        </div>
    );
};

export default ProjectsList;
