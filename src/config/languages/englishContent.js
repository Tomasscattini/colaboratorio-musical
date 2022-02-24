const englishContent = {
    errorPage: {
        pageTile: 'Oops! Page not found.',
        message:
            'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
        homeButton: 'Back to Home'
    },
    footer: {
        copyright: 'All rights reserved',
        menuItems: {
            terms: 'Terms & Conditions',
            privacyPolicy: 'Privacy Policy'
        }
    },
    landingPage: {
        descriptionTitle: 'Some description for the platform',
        steps: [],
        authCard: {
            loginTitle: 'Login',
            registerTitle: 'Register',
            forgotPwdTitle: 'Reset Password',
            goBackToLoginLink: 'Go back to Login',
            alreadyHaveAccountText: 'Already have an account?',
            alreadyHaveAccountLink: 'Login',
            forgotPwdText: 'Have you forgotten your password?',
            forgotPwdLink: 'Reset Password',
            dontHaveAccountText: "Don't have an account?",
            dontHaveAccountLink: 'Register',
            loginForm: {
                emailLabel: 'Email',
                passwordLabel: 'Password',
                submitBtn: 'Log in',
                emailRequired: 'You must enter an email',
                validEmail: 'You must enter a valid email',
                passwordRequired: 'Please enter your password.'
            },
            forgotPwdForm: {
                emailLabel: 'Email',
                submitBtn: 'Send reset link',
                emailRequired: 'You must enter an email',
                validEmail: 'You must enter a valid email'
            },
            registerForm: {
                fullNameLabel: 'Full name',
                emailLabel: 'Email',
                passwordLabel: 'Password',
                confirmPwdLabel: 'Confirm Password',
                termsText: 'I Accept the',
                termsLink: 'Terms & Conditions',
                submitBtn: 'Register',
                nameRequired: 'You must enter display name',
                emailRequired: 'You must enter an email',
                validEmail: 'You must enter a valid email',
                passwordRequired: 'Please enter your password.',
                validPassword: 'Password is too short - should be 8 chars minimum.',
                passwordMatch: 'Passwords must match',
                termsRequired: 'Please accept our Terms & Conditions'
            },
            mailConfirmationMessage: {
                title: 'We sent you an E-mail!',
                sentLinkTo: 'We have sent a link to',
                yourEmailDefault: 'your E-mail.',
                checkInbox: 'Check your inbox and click on the "Reset password" link to update your credentials.',
                didntReceiveEmailText: "Didn't receive the E-mail?",
                didntReceiveEmailLink: 'Re-send',
                goBackToLoginLink: 'Go back to Login',
                mailResentMessage: 'The E-mail has been re-sent'
            }
        }
    },
    mantainancePage: {
        pageTile: 'This site is under mantainance.',
        message:
            "We are making some updates to bring you the best experience. Sorry for the inconvenience, we'll be back very soon!",
        visitWebsiteButton: 'Visit our Website'
    },
    navigationMenu: {
        account: 'Account',
        auth: 'Auth',
        error: 'Error Page',
        forgotPassword: 'Forgot Password',
        home: 'Home',
        login: 'Login',
        logout: 'Logout',
        mailConfirmation: 'Mail Confirmation',
        otherPages: 'Other Pages',
        profile: 'Profile',
        projects: 'Public Projects',
        register: 'Register',
        settings: 'Account Settings',
        userProjects: 'My projects'
    },
    privacyPolicy: {
        title: 'Privacy Policy',
        content: 'This is where the privacy policy will go',
        actionButton: 'Home'
    },
    profilePage: {
        editBtn: 'Edit',
        cancelBtn: 'Cancel',
        saveBtn: 'Save',
        unsavedChangesMessage: 'There are Some Unsaved Changes. Do you want to go Away?',
        unsavedChangesActionBtn: 'Leave',
        generalTab: {
            title: 'General',
            keyInformation: {
                title: 'Key Information',
                firstNameLabel: 'First Name(s)',
                firstNamePlaceholder: 'Eg: John',
                lastNameLabel: 'Last Name(s)',
                lastNamePlaceholder: 'Eg: Doe',
                emailLabel: 'Email',
                emailPlaceholder: 'Eg: john@doe.com',
                phoneLabel: 'Phone number',
                phonePlaceholder: '+39 (351) 548 1875',
                countryLabel: 'Country of residence',
                countryPlaceholder: 'Eg: Malta'
            },
            otherInformation: {
                title: 'Other',
                professionLabel: 'Profession/Role',
                professionPlaceholder: 'Eg: Product Manager'
            }
        },
        workTab: {
            title: 'Work',
            workInformation: {
                workLabel: 'Profession/Role',
                workPlaceholder: 'Eg: Product Manager'
            }
        },
        otherTab: {
            title: 'Other',
            generalInformation: {
                title: 'General'
            },
            moreInformation: {
                title: 'More'
            }
        }
    },
    publicProjectsPage: {
        pageTitle: 'Public Projects',
        pageSubtitle:
            "Surf through the community's projects, save the ones you like and propose new ideas to their creators!",
        searchPlaceholder: 'Search',
        searchBtnText: 'Search'
    },
    settingsPage: {
        menu: {
            title: 'Settings',
            profileLink: 'Edit Profile',
            changePwdLink: 'Change Password',
            deleteAccountLink: 'Delete Account'
        },
        changePasswordCard: {
            title: 'Change your password',
            newPasswordLabel: 'New Password',
            passwordConfirmLabel: 'Password (Confirm)',
            submitBtn: 'Change my password',
            newPasswordRequired: 'Please enter your new password.',
            validPassword: 'Password is too short - should be 8 chars minimum.',
            passwordMatch: 'Passwords must match.'
        },
        deleteAccountCard: {
            title: 'Delete your account',
            deleteLabel: 'Write "Delete"',
            deleteDataLabel: 'Delete also all my projects data',
            submitBtn: 'Delete Account',
            confirmRequired: 'Please write exactly the word "Delete".',
            confirmationWord: ['delete']
        }
    },
    supportedLanguages: {
        en: 'English',
        es: 'Spanish'
    },
    termsAndConditions: {
        title: 'Terms & Conditions',
        content: 'This is where the terms and conditions will go',
        actionButton: 'Home'
    },
    userProjectsPage: {
        pageTitle: 'My projects',
        pageSubtitle:
            'Create new projects or manage your existing ones. You can make them public to receive new ideas from the community or leave them private for you own personal use.'
    }
};

export default englishContent;
