import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPublicProjects, selectPublicProjects } from 'store/projects/publicProjectsSlice';
import clsx from 'clsx';

import { Container, Grid, makeStyles } from '@material-ui/core';

import { ProjectsList, SearchInput, Title } from 'custom-components';

const useStyles = makeStyles((theme) => ({
    root: {},
    searchBar: {
        width: '100%',
        marginTop: '5vh'
    }
}));

const PublicProjectsPage = ({ classes, ...props }) => {
    const internalClasses = useStyles();
    const dispatch = useDispatch();

    const { loading } = useSelector(({ entities }) => entities.projects?.publicProjects);
    const publicProjects = useSelector(selectPublicProjects);
    const textProvider = useSelector(({ ui }) => ui.textContent.publicProjectsPage);

    useEffect(() => {
        dispatch(loadPublicProjects());
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

            <SearchInput
                placeholder={textProvider?.searchPlaceholder}
                searchBtnText={textProvider?.searchBtnText}
                className={internalClasses.searchBar}
            />

            <ProjectsList items={publicProjects} loading={loading} />
        </Container>
    );
};

export default PublicProjectsPage;
