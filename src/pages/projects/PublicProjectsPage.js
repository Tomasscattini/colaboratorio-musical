import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Container, Grid, makeStyles } from '@material-ui/core';

import { ProjectsList, Title } from 'custom-components';

const useStyles = makeStyles((theme) => ({
    root: {}
}));

const PublicProjectsPage = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent.publicProjectsPage);
    const publicProjects = useSelector(({ entities }) => entities.projects?.publicProjects?.list);

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
                <ProjectsList items={publicProjects} />
            </Grid>
        </Container>
    );
};

export default PublicProjectsPage;
