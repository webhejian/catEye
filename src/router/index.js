import Cinema from "../views/cinema";
import Movies from "../views/movies";
import My from "../views/my";
import HotMovies from "../views/movies/hotMovies";
import Upcoming from "../views/movies/upComing";
import Position from "../views/movies/position";
import Search from "../views/movies/search";
import Login from "../views/Login";

export default [
    {
        path: "/movie",
        //exact: false,
        component: Movies,
        nameStr: "电影",
        ifFooter: true,
        child: [
            {
                path: "/movie/position",
                exact: false,
                component:Position,
                nameStr: "定位",
                ifFooter: true,
            },
            {
                path: "/movie",
                //exact: true,
                component: HotMovies,
                nameStr: "正在热映",
                ifFooter: true,
            },
            {
                path: "/movie/upComing",
                exact: false,
                component:Upcoming,
                nameStr: "即将上映",
                ifFooter: true,
            },
           
            {
                path: "/movie/search",
                exact: false,
                component:Search,
                nameStr: "搜索",
                ifFooter: true,
            }
        ]
    },
    {
        path: "/movie/search",
        exact: false,
        component:Search,
        nameStr: "搜索",
        ifFooter: true,
    },
    {
        path: "/movie/position",
        exact: false,
        component:Position,
        nameStr: "定位",
        ifFooter: true,
    },
    {
        path: "/movie",
        exact:false,
        component: HotMovies,
        nameStr: "正在热映",
        ifFooter: true,
    },
    {
        path: "/movie/upComing",
        exact: false,
        component:Upcoming,
        nameStr: "即将上映",
        ifFooter: true,
    },
    {
        path: "/login",
        exact: false,
        component:Login,
        nameStr: "登陆",
        ifFooter: false,
    },



    {
        path: "/Cinema",
        exact: false,
        component: Cinema,
        nameStr: "影院",
        ifFooter: true,
        child: [
            {
                path: "/cinema/position",
                exact: true,
                component:Position,
                nameStr: "定位",
                ifFooter: true,
            },
            {
                path: "/cinema/search",
                exact: true,
                component:Search,
                nameStr: "搜索",
                ifFooter: true,
            }

        ]
    },
    {
        path: "/cinema/position",
        exact: true,
        component:Position,
        nameStr: "定位",
        ifFooter: true,
    },
    {
        path: "/cinema/search",
        exact: true,
        component:Search,
        nameStr: "搜索",
        ifFooter: true,
    },
    {
        path: "/My",
        exact: false,
        nameStr: "我的",
        component: My,
        ifFooter: false,
        child: [
         
            {
                path: "/cinema/search",
                exact: true,
                component:Search,
                nameStr: "搜索",
                ifFooter: true,
            },
          

        ]
    }
]