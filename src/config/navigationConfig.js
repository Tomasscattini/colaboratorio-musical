import { parsePath } from 'utils/helpers';

const navigationConfig = (language) => ({
    headermenu: [
        {
            title: language?.navigationMenu?.home,
            icon: 'home_outlined',
            path: parsePath(),
            onlyLoggedIn: true
        },
        {
            title: language?.navigationMenu?.login,
            icon: 'lock_open_outlined',
            path: parsePath('/login'),
            onlyLoggedOut: true
        },
        {
            title: language?.navigationMenu?.register,
            icon: 'person_outlined',
            path: parsePath('/register'),
            onlyLoggedOut: true
        },
        {
            title: language?.navigationMenu?.profile,
            icon: 'perm_identity_outlined',
            path: '/profile',
            type: 'user-menu',
            onlyLoggedIn: true
        },
        {
            title: language?.navigationMenu?.settings,
            icon: 'settings',
            type: 'user-menu',
            onlyLoggedIn: true,
            path: '/settings'
        },
        {
            title: language?.navigationMenu?.logout,
            icon: 'exit_to_app_outlined',
            type: 'logout',
            onlyLoggedIn: true
        }
    ],
    footermenu: [
        {
            path: parsePath('/terms&conditions'),
            title: language?.footer?.menuItems?.terms
        },
        {
            path: parsePath('/privacy-policy'),
            title: language?.footer?.menuItems?.privacyPolicy
        }
    ]
});

export default navigationConfig;
