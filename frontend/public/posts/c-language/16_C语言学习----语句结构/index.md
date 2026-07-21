# C语言学习----语句结构

> 原创 于 2024-08-04 17:13:11 发布 · 公开 · 656 阅读 · 20 · 3 · 本内容遵循CC 4.0 BY-SA版权协议 版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。 GEO检测 · 编辑
> 文章链接：https://blog.csdn.net/weixin_59727843/article/details/140907836

### 1.顺序结构

从头一直运行到尾，没有分支与循环

```cpp
include<stdio.h>
int main(){
  int a=0;
  int b=0;
  int c=a+b;
  printf("%d",c);
  return 0;
}
```

这就是典型的顺序结构，从第一句一直执行到最后一句。

### 2.分支结构：

#### if-else:

格式：

```cpp
if(bool表达式){
//语句块1
}else{
//语句块2
}
```

如果bool表达式为true则执行语句块1，语句块2则不执行，反之执行语句块2，语句块1不执行

```cpp
#include<stdio.h>
int main(){
    int a=0;
    int b=1;
    if(a>b){
      printf("%d",a);
    }else{
      printf("%d",b);
    }//输出1
}
```

这是典型的找两个值最大值用了if-else分支语句

那如果有三个数找最大值呢？

我们可以使用if-else if-else语句

```cpp
​
#include<stdio.h>
int main(){
    int a=0;
    int b=1;
    int c=2;
    if(a>b&&a>c){
      printf("%d",a);
    }else if(b>a&&b>c){
      printf("%d",b);
    }else{
      printf("%d",c);
    }//输出2
}
 
​
```

如果是四个数就以此类推

#### switch语句：

switch语句用来处理多个分支问题

```cpp
int a=2;
switch(a){
    case 1:
      printf("%d",1);
      break;
    case 2:
      printf("%d",2);
      break;
    default:
      printf("%d",3);
}//输出2
```

注意每个case都要break；否则就会

```cpp
​
int a=2;
switch(a){
    case 1:
      printf("%d ",1);
    case 2:
      printf("%d",2);
      break;
    default:
      printf("%d",3);
}//输出1 2
 
​
```

default是case的何况都不满足时运行default的语句块。

### 3.循环结构

#### for循环

格式：

```cpp
for(变量的初值;循环结束的条件;每次循环结束后变量的改变值){
    //语句块
}
```

例如输出5次hello world

```cpp
 
for(int a=0;a<5;a++){
    printf("hello world");
}
//解释，a的初值为0，判断是否a<5，是，运行 printf("hello world");
//然后a++;则a==1，一直到a==5，则不满足a<5，就停止循环
```

#### while循环

格式：

```cpp
while(bool表达式){
//语句块
}
```

注意while循环中要更新bool表达式的值，否则就会形成死循环

我们任然输出5次hello world

```cpp
int a=0;
while(a<5){
printf("hello world");
a++；
}
```

注意，a++一定要写，否则就会一直输出hello world

#### do~while循环：

格式：

```cpp
do{
//语句块
}while(bool表达式)
```

do~while与while的区别就是do~while循环会先运行一次循环

我们任然输出5次hello world

```cpp
int a=0;
do{
printf("hello world");
a++;
}while(a<5)
```

总结三种循环都可以相互转化。

#### break与continue：

break与continue都是循环控制语句，break是直接跳出循环，continue是跳过本次循环

```cpp
for(int i=0;i<5;i++){
printf("%d ",i);
if(i==3){
    break;
 }
}
//i==3的时候跳出循环，则输出0，1，2
for(int i=0;i<5;i++){
printf("%d ",i);
if(i==3){
    continue；
 }
}
//i==3的时候，跳出本次循环，则输出0，1，2，4，
```

在while和do~while中使用方法相同。