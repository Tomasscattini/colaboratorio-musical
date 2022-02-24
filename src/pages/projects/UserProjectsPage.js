import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserProjects, selectUserProjects } from 'store/projects/userProjectsSlice';
import clsx from 'clsx';

import { Container, Grid, makeStyles } from '@material-ui/core';

import { ProjectsList, Title } from 'custom-components';

const useStyles = makeStyles((theme) => ({
    root: {}
}));

const UserProjectsPage = ({ classes, ...props }) => {
    const internalClasses = useStyles();
    const dispatch = useDispatch();

    const { loading } = useSelector(({ entities }) => entities.projects?.userProjects);
    const textProvider = useSelector(({ ui }) => ui.textContent.userProjectsPage);
    const userProjects = useSelector(selectUserProjects);

    useEffect(() => {
        dispatch(loadUserProjects());
    }, [dispatch]);

    return (
        <Container
            maxWidth="lg"
            component={Grid}
            container
            className={clsx(internalClasses.root, classes?.root)}
            {...props}
        >
            <Title title={textProvider?.pageTitle} size="small" subtitle={textProvider?.pageSubtitle} />
            <Grid item xs={12}>
                <ProjectsList items={userProjects} loading={loading} />
            </Grid>
        </Container>
    );
};

export default UserProjectsPage;
