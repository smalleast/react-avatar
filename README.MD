# react-avatar
```
基于react的图片显示组件
```

## 技术栈
react + react-dom + ES6/ES7 + webpack + sass + nodejs

## 项目运行
 1. node v8.1.2
 2. npm 5.0.3
 3. react 15.4.1
 4. react-dom 15.4.1
```
#克隆，或者直接下载
git clone https://github.com/smalleast/react-avatar.git

进入文件夹
cd react-avatar

安装依赖
npm install
```

### 编译环境
```
开启本地服务器
npm run dev    开发
npm run build  正式
```


## 代码使用说明
```

## usage:
+ install:
```bash
npm install smalleast/react-avatar --save

```

+ code:
```javascript
import ReactAvatar from 'react-avatar';

 _alert() {
    alert('123456789')
  }

  render() {
    return (
      <div className="hello-react-avatar">
        <ReactAvatar size="50px" url="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c723db0023244.jpg"
                     class-name="test1"/>
        <ReactAvatar size="80px" url="http://img1.gtimg.com/19/1919/191993/19199387_980x1200_0.jpg" class-name="test2"/>
        <ReactAvatar size="100px" url="http://img1.gtimg.com/19/1919/191993/19199387_980x1200_0.jpg"
                     class-name="test3"/>
        <ReactAvatar size={{width: '300px', height: '100px'}} onClick={this._alert.bind()} radius="5px"
                     url="http://img1.gtimg.com/19/1919/191993/19199387_980x1200_0.jpg" class-name="test3"/>
      </div>
    );
  }
```

## props:
| name | type | value | description |
| :----| :----| :----| :----|
| className  | string | '' | Customize css class |
| url  | string | 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c723db0023244.jpg' | Image url |
| title  | string | 'My picture' | Image title |
| size  | string | '30px' | Image size(width/height) |
| radius  | string | '10px' | border radius for image |



## 说明
```
>  如有问题或者遇到坑请直接在 Issues 中提，或者可以加我的QQ 382026180

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

```

## 项目布局
```
|-- build				// webpack的配置目录
|   |-- site.config.js				// 模块入口的路径配置文件
|   |-- webpack.base.conf.js				// webpack编译文件的配置文件
|   |-- webpack.dev.conf.js				// 开发使用的编译文件 npm run dev
|   |-- webpack.prod.conf.js				// 打包生产编译包的文件 npm run build
|-- config				// 环境的配置目录
|-- src				// 静态源码目录
|   |-- components				// 组件
|       |-- react-components-template.js				// 实现组件的具体js
|       |-- react-components-template-ctrl.js				// 包装组件的dom外框js
|       |-- styles.css				// 组件样式
|   |-- div.js				// 测试组件的js入口
|   |-- dev.scss				//	测试组件的样式
|   |-- main.js				// 组件的封装js
|-- .babelrc				// ES6语法编译配置
|-- .editorconfig				// 代码编写规格
|-- .gitignore				// git忽略的文件
|-- .npmrc				// npm配置管理及设置代理
|-- index.html				// 入口html文件
|-- package.json				// 项目及工具的依赖配置文件
|-- webpack.config.js				// webpack 配置文件
|-- README.md				// 说明
```


