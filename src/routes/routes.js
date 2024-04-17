import DefaultLayout from "../components/Layout/DefaultLayout/DefaultLayout";
import HeaderOnly from "../components/Layout/HeaderOnly/HeaderOnly";
import About from "../pages/About/About";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/detail', component: Detail, layout: DefaultLayout },
    { path: '/about', component: About, layout: HeaderOnly },
];

export { publicRoutes };