# pet
基于 vue3.0 + typescript + vant-ui 开发的移动端宠物webapp


## git分支计划
- 一开始单独开发项目的,本计划志用一个分支的。考虑到如果多人合作开发的情况,那就已当前代码基础,拆分成每个功能分支、z最后再合并
- master 基础分支,生产
- release 测试分支
- bug     bug处理分支
- develop    开发基础分支
- feature-xxx 基于dev拉取的功能需求分支


## 运行项目前,优先更换`.env`环境配置
## 安装依赖
```
yarn install
```
### 测试运行
```
yarn serve
```
### 工程打包
```
yarn build
# 参数
--report  顺带生成打包html报告
--report-json  顺带生成打包json报告
--modern  面向现代浏览器带自动回退地构建应用
```
### eslint代码格式化
```
yarn lint
```
