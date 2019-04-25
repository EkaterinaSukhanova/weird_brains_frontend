import HomeContainer from './containers/HomeContainer';
import ArticleContent from './components/ArticleContent';
import InterestingContent from './components/InterestingContent';
import ShopContent from './components/ShopContent';
import AboutContent from './components/AboutContent';

export default [
    {
        path: '/',
        component: HomeContainer,
        exact: true,
    },
    {
        path: '/articles',
        component: ArticleContent,
        exact: true,
    },
    {
        path: '/interesting',
        component: InterestingContent,
        exact: true,
    },
    {
        path: '/shop',
        component: ShopContent,
        exact: true,
    },
    {
        path: '/about',
        component: AboutContent,
        exact: true,
    }
]