import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    useDispatch
    // useSelector
} from 'react-redux';
import { loadCurrentProject } from 'store/projects/currentProjectSlice';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {}
}));

const ProjectDetailsPage = ({ classes, ...props }) => {
    const { projectid } = useParams();
    const internalClasses = useStyles();
    const dispatch = useDispatch();

    // const textProvider = useSelector(({ ui }) => ui.textContent);
    // const { data: currentProject, loading } = useSelector(({ entities }) => entities.projects?.currentProject);

    useEffect(() => {
        if (projectid) dispatch(loadCurrentProject(projectid));
    }, [dispatch, projectid]);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            ProjectDetailsPage
        </div>
    );
};

export default ProjectDetailsPage;
