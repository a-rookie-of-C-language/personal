# C语言学习----结构体

> 原创 已于 2024-08-17 19:15:00 修改 · 公开 · 327 阅读 · 3 · 0 · 本内容遵循CC 4.0 BY-SA版权协议 版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。 GEO检测 · 编辑
> 文章链接：https://blog.csdn.net/weixin_59727843/article/details/140957769

### 结构体

我们以前学习的数组，只能存放相同类型的数据，那么是否有一种结构能存放不同的数据类型吗？

答案是有的就是结构体和共用体

#### 结构体怎么定义

```cpp
struct name {
  type name;
  type name;
  ........
};
```

```cpp
​
struct node {
  int val;
  char c;
  char* str;
};
 
​
```

这里我们定义了一个结构体，叫node，里面有三个变量。

#### 结构体的访问：

我们怎么访问，我们先声明一个结构体变量

```cpp
struct node Node;
```

然后通过结构体名称.变量名来访问

```cpp
Node.val;
Node.c;
```



```cpp
#include <stdio.h>
 
struct node{
    int val;
    char c;
    char*str;
};
int main(){
    struct node Node;
    Node.val=1;
    printf("%d",Node.val);//1
}
```

注：在结构体内部能对变量进行赋值。