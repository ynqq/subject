
module.exports = {
    title: "测试文档",
    description: "简介",
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    plugins: ['autobar'],
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        nav: [
            { text: "GitHub", link: '/test/' },
        ],
        sidebar: 'auto'
        // sidebar: {
        //     '/subject/': [
        //         {
        //             title: "前端",
        //             children: [
        //                 {
        //                     title: "html",
        //                     path: "/subject/html/",
        //                     children: [

        //                     ]
        //                 },
        //                 {
        //                     title: "css",
        //                     path: "/subject/css/",
        //                     children: []
        //                 },
        //                 {
        //                     title: "netWork",
        //                     path: "/subject/netWork/",
        //                     children: [
        //                         {
        //                             title: "01.说下crsf 和 xss，分别举例说明，各有什么解决办法？",
        //                             path: "/subject/netWork/01/",
        //                         },
        //                         {
        //                             title: "02.Cookie的同源策略是怎么样的，跨域情况下如何携带Cookie",
        //                             path: "/subject/netWork/02/",
        //                         },
        //                     ]
        //                 },
        //                 {
        //                     title: "javascript",
        //                     path: "/subject/javascript/",
        //                     children: [
        //                         {
        //                             title: "01.Vue 和 React的区别是什么？你觉得哪个好？",
        //                             path: "/subject/javascript/01/",
        //                         },
        //                         {
        //                             title: "02.假设有一个非常复杂耗时的逻辑，代码逻辑已经最优了前提下要你优化，你有哪些办法？",
        //                             path: "/subject/javascript/02/",
        //                         },
        //                         {
        //                             title: "03.说下浏览器的进程、线程模型，chrome浏览器有多少个进程？线程模型中的每个线程都是干嘛用的？",
        //                             path: "/subject/javascript/03/",
        //                         },
        //                         {
        //                             title: "04.说下 js的内存泄漏，什么情况容易出现内存泄漏？怎么解决？垃圾回收机制是怎么样的？",
        //                             path: "/subject/javascript/04/",
        //                         },

        //                         {
        //                             title: "05.用二分法移除掉一个字符串中所有的字母字符。",
        //                             path: "/subject/javascript/05/",
        //                         },
        //                     ]
        //                 },
        //                 {
        //                     title: "vue",
        //                     path: "/subject/vue/",
        //                     children: [

        //                     ]
        //                 },
        //                 {
        //                     title: "react",
        //                     path: "/subject/react/",
        //                     children: [
        //                         {
        //                             title: "01.redux主要解决了什么问题？它的工作原理是什么？与mobx的区别是什么？你觉得redux 和 mobx哪个更好？",
        //                             path: "/subject/react/01/",
        //                         },
        //                         {
        //                             title: "02.react中state有层级很深，比如a.b.c.d，如果只更新c属性有哪些办法？immutable.js实现的原理是什么？",
        //                             path: "/subject/react/02/",
        //                         },
        //                     ]
        //                 },
        //                 {
        //                     title: "reactNative",
        //                     path: "/subject/reactNative/",
        //                     children: [
        //                         {
        //                             title: "01.有用过哪些跨平台框架，react-native中原生端和js端怎么进行通信的？",
        //                             path: "/subject/reactNative/01/",
        //                         },
        //                     ]
        //                 },
        //                 {
        //                     title: "webpack",
        //                     path: "/subject/webpack/",
        //                     children: [
        //                         {
        //                             title: "01.自己的项目做了哪些性能优化？除了webpack打包之类的优化外，http层面有做了哪些优化？gzip如何开启？gzip有多少个级别？",
        //                             path: "/subject/webpack/01/",
        //                         },
        //                     ]
        //                 },
        //                 {
        //                     title: "babel",
        //                     path: "/subject/babel/",
        //                     children: [

        //                     ]
        //                 },

        //             ]
        //         }
        //     ]
        // }
    }
}