import HomeContainer from './containers/HomeContainer';
import ArticleContent from './components/ArticleContent';
import InterestingContent from './components/InterestingContent';
import ShopContent from './components/ShopContent';
import AboutContent from './components/AboutContent';

export default [
    {
        key: 1,
        path: '/',
        component: HomeContainer,
        exact: true,
    },
    {
        key: 2,
        path: '/articles',
        component: ArticleContent,
        exact: true,
    },
    {
        key: 3,
        path: '/interesting',
        component: InterestingContent,
        exact: true,
    },
    {
        key: 4,
        path: '/shop',
        component: ShopContent,
        exact: true,
    },
    {
        key: 5,
        path: '/about',
        component: AboutContent,
        exact: true,
    }
]