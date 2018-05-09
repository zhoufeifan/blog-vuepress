#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
echo 'blog.zhoufeifan.tech' > CNAME

git init
git add -A
git commit -m 'deploy'


git push -f git@github.com:zhoufeifan/zhoufeifan.github.com.git master

cd -