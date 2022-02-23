import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Container, Grid, makeStyles } from '@material-ui/core';

import { ProjectsList, Title } from 'custom-components';

const useStyles = makeStyles((theme) => ({
    root: {}
}));

const UserProjectsPage = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent.userProjectsPage);
    const userProjects = useSelector(({ entities }) => entities.projects?.userProjects?.list);

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
                <ProjectsList items={userProjects} />
            </Grid>
        </Container>
    );
};

export default UserProjectsPage;
