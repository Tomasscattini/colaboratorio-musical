import React from 'react';
// import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Grid, makeStyles } from '@material-ui/core';

import { Loader, ProjectsListItem } from 'custom-components';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '5vh'
    }
}));

const ProjectsList = ({ classes, items, loading, ...props }) => {
    const internalClasses = useStyles();

    // const textProvider = useSelector(({ ui }) => ui.textContent);

    return (
        <Grid container item spacing={2} className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Loader loading={loading} />
            {!loading &&
                items?.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id || index}>
                        <ProjectsListItem item={item} />
                    </Grid>
                ))}
        </Grid>
    );
};

export default ProjectsList;
