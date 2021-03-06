function genSidebarConfig (title) {
    return [{
        title: 'CSS 专题',
        collapsable: false,
        children: [
            ['/doc/css/1','css 常用知识点'],
            ['/doc/css/2','清除浮动'],
            ['/doc/css/3','三大经典问题'],
        ]
    },{
        title: 'HTML 专题',
        collapsable: false,
        children: [
                ['/doc/html/1','浏览器解析流程'],
                ['/doc/html/2','viewport原理'],
                ['/doc/html/3','meta标签'],
            ]   
        },{
            title: 'JS 专题',
            collapsable: false,
            children: [
                ['/doc/js/1-1','堆栈调用（上篇）'],
                ['/doc/js/1-2','堆栈调用（下篇）'],
                ['/doc/js/2','作用域与闭包'],
                ['/doc/js/3','this绑定解析'],
                ['/doc/js/4-1','call、apply原理与使用场景'],
                ['/doc/js/4-2','bind 的原理与使用场景'],
                ['/doc/js/5-1','浅拷贝概念以及实现原理'],
                ['/doc/js/5-2','深拷贝概念以及实现原理'],
                ['/doc/js/6-1','原型与继承之基本概念'],
                ['/doc/js/6-2','原型与继承之（6种继承方案）'],
                ['/doc/js/7','事件机制'],
            ]
        },{
            title: '工具函数 专题',
            collapsable: false,
            children: [
                ['/doc/utils/1','常见的JS方法'],
                ['/doc/utils/2','常见的正则表达式'],
                ['/doc/utils/3','常用的时间处理方法'],
                ['/doc/utils/4','常用的金额处理方法'],
                ['/doc/utils/5','继承和原型链demo'],
            ]
        },{
            title: 'HTTP 专题',
            collapsable: false,
            children: [
                ['/doc/http/1','常见的14种响应状态码'],
                ['/doc/http/2','Http首部字段'],
                ['/doc/http/3','Https介绍'],
                ['/doc/http/4','Web的攻击技术'],
                ['/doc/http/5','Http 发展历史'],
            ]
        },{
            title: 'Vue 专题',
            collapsable: false,
            children: [
                ['/doc/vue/1','Vue 双向绑定的原理'],
                ['/doc/vue/2','Vue 踩坑总结'],
                ['/doc/vue/3','Vue 生命周期详解'],
                ['/doc/vue/4','Vuex 基本用法']
            ]
        },{
            title: 'Node 专题',
            collapsable: false,
            children: [
                ['/doc/node/1','用node撸一个前端自动化发布工具']
            ]
        },{
            title: '项目总结',
            collapsable: false,
            children: [
                ['/doc/project/1','H5项目总结'],
                ['/doc/project/2','首页优化项目总结'],
                ['/doc/project/3','vue 输入限制'],
                ['/doc/project/4','搜车库项目总结']
            ]
        }
    ]
};


module.exports = {
    title: '周非凡个人博客',
    description: 'Vue 驱动的静态网站生成器',
    serviceWorker: true,
    themeConfig: {
        navbar: false,
        sidebar: genSidebarConfig()
    }
};


