#!/usr/bin/env bash

# 依赖安装
# nvm use 8.9.4
npm install
if [ $? -eq 0 ];then
    echo "============================================="
    echo "依赖安装成功!"
    echo "============================================="
else
    echo "============================================="
    echo "依赖安装失败!"
    echo "============================================="
    exit 1;
fi

# 资源编译

if [ $ENV == 'online_master' ] || [ $ENV == 'online_slaves' ] || [ $ENV == 'perf' ] || [ $ENV == 'stage' ] || [ $ENV == 'product' ] || [ $ENV == 'testing' ];then
    packge_env="product"
else
    packge_env=${ENV}
fi

echo "环境:${ENV}"
echo "编译参数:${packge_env}"

# 资源编译
npm run production-build -- --env $packge_env
if [ $? -eq 0 ];then
    echo "============================================="
    echo "资源编译成功!"
    echo `date +%s` > ./md5
    echo `date +%s` > ./release
    echo "============================================="
else
    echo "============================================="
    echo "资源编译失败!"
    echo "============================================="
    exit 1;
fi
# 项目启动
npm start
