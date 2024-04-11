import { DefaultLayout } from '~h07/components/Layout/default/DefaultLayout';
import { FlagmentLayout } from '~h07/components/Layout/flagment/FlagmentLayout';
import { routesConfig } from '~h07/config/routes';
import { Contacts } from '~h07/pages/Contacts/Contacts';
import { Home } from '~h07/pages/Home/Home';
import { Login } from '~h07/pages/Login/Login';

type _T_Router = {
    id: number;
    path: string;
    component: Function;
    layout: Function;
};

export const routers: _T_Router[] = [
    {
        id: 1,
        path: routesConfig.home,
        component: Home,
        layout: DefaultLayout,
    },
    {
        id: 2,
        path: routesConfig.contacts,
        component: Contacts,
        layout: DefaultLayout,
    },
    {
        id: 3,
        path: routesConfig.login,
        component: Login,
        layout: FlagmentLayout,
    },
];
