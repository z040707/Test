# react

## 组件

组件的名称需要遵从大驼峰写法

组件就是自定义标签

### 函数组件

函数组件就是一个返回 jsx 对象的函数

普通函数和箭头函数都可以

```jsx
export const 组件名 = () => {
  return <></>;
};
```

### 类组件

类组件是 React.Component 的子类，声明类组件时必须定义 render 函数，并且必须返回一个 jsx 对象，作为组件的视图结构

```
export class 组件名 extends Component {
  render() {
    return <></>;
  }
}
```

两种方式的组件使用方法是一样的，都可以使用单标签或双标签写法

可以使用空标签作为根标签，实现多标签组件，空标签实际是 Fragment 组件的简写

## 插值

### 内容插值

jsx 语法允许使用单花括号的方式在标签内容区域进行插值，具体插入的内容可以是字面量值，也可以是变量，甚至是表达式

插入的内容在进行页面显示时都会强制转换为字符串，一般插值的最后结果要求是基本类型数据。除了数字和字符串以为，其它的基本类型是不显示内容的

对象不可以作为插值内容使用。简单数组（只包含基本类型的数组）可以作为插值内容，其它的不可以

插值内容也可以是函数的执行

标签字符串默认是按照纯文本处理

### 属性插值

需要将整个属性值作为插值区域，省略引号

普通标签的插值都会作为行内属性展示到页面上

## 条件判断

条件判断就是根据某些条件控制指定标签显示/隐藏，创建/删除

## 循环

循环处理的重点就是将数据数组转换成由 jsx 对象组成的数组

.filter 过滤

.map 循环

不要忘记加 key
