import { Routes } from '@angular/router';

import { PublicLayout } from '@layouts/public-layout/public-layout'
import { Landing } from '@pages/landing/landing'
import { Login } from '@pages/login/login'
import { Signup } from '@pages/signup/signup'

import { MainLayout } from '@layouts/main-layout/main-layout'
import { PwdReset } from '@pages/pwd-reset/pwd-reset';

export const routes: Routes = [
    {
        path: '',
        component: PublicLayout,
        children: [
            { path: '', component: Login },
            { path: 'login', component: Login },
            { path: 'signup', component: Signup },
            { path: 'pdwreset', component: PwdReset}
        ]
    },
    {
        path: '',
        component: MainLayout,
        children: []
    },
    { path: '**', redirectTo: '' }
];
