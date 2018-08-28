function genSidebarConfig (title) {
    return [{
        title: 'Html 专题',
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
                ['/doc/js/1','网页与浏览器'],
                ['/doc/js/2','js作用域'],
                ['/doc/js/3','js 继承的四种方式'],
                ['/doc/js/4','事件'],
                ['/doc/js/5','js 常用小技巧'],
            ]
        },{
            title: 'CSS 专题',
            collapsable: false,
            children: [
                ['/doc/css/1','清除浮动']
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
            ]
        },{
            title: 'Node 专题',
            collapsable: false,
            children: [
                ['/doc/node/1','用node撸一个前端自动化发布工具']
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


