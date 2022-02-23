//* Import page components here 👇👇
import {
    ErrorPage,
    LandingPage,
    MantainancePage,
    PrivacyPolicy,
    ProfilePage,
    ProjectDetailsPage,
    PublicProjectsPage,
    SettingsPage,
    TermsAndConditions,
    UserProjectsPage
} from 'pages';

import { mantainancePath, parsePath } from 'utils/helpers';
import authRoles from 'auth/authRoles';
import { MainRouteRedirect } from 'utils';

export const defaultRedirects = {
    notAuthenticated: '/login',
    [authRoles.admin]: '/projects',
    [authRoles.user]: '/projects',
    [authRoles.onlyGuest]: '/projects',
    default: '/projects'
};

export const routes = [
    {
        path: parsePath('/'),
        component: MainRouteRedirect,
        exact: true
    },
    {
        path: parsePath('/project/:projectid'),
        component: ProjectDetailsPage,
        privateRoute: true
    },
    {
        path: parsePath('/projects'),
        component: PublicProjectsPage,
        privateRoute: true,
        exact: true
    },
    {
        path: parsePath('/login'),
        component: LandingPage,
        form: 'login',
        exact: true
    },
    {
        path: parsePath('/register'),
        component: LandingPage,
        form: 'signup',
        exact: true
    },
    {
        path: parsePath('/forgot-password'),
        component: LandingPage,
        form: 'forgot-pwd',
        exact: true
    },
    {
        path: parsePath('/reset-confirmation'),
        component: LandingPage,
        form: 'mail-confirmation',
        exact: true
    },
    {
        path: parsePath('/profile'),
        component: ProfilePage,
        privateRoute: true,
        exact: true
    },
    {
        path: parsePath('/settings'),
        component: SettingsPage,
        privateRoute: true,
        exact: true
    },
    {
        path: parsePath('/terms&conditions'),
        component: TermsAndConditions,
        exact: true
    },
    {
        path: parsePath('/privacy-policy'),
        component: PrivacyPolicy,
        exact: true
    },
    {
        path: parsePath('/user/projects'),
        component: UserProjectsPage,
        privateRoute: true,
        exact: true
    },
    {
        path: parsePath(mantainancePath),
        component: MantainancePage,
        layout: false
    },
    {
        component: ErrorPage,
        layout: false,
        noLayoutFooter: true,
        noLayoutBtn: true
    }
];
