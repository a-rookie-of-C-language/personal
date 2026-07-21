# C语言学习----常用函数

> 原创 已于 2024-08-04 20:28:56 修改 · 公开 · 740 阅读 · 27 · 5 · 本内容遵循CC 4.0 BY-SA版权协议 版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。 GEO检测 · 编辑
> 文章链接：https://blog.csdn.net/weixin_59727843/article/details/140908618



### 1.输入输出：

scanf输入

printf输出

格式：

```cpp
scanf("格式控制符",变量的地址);
printf(“格式控制符”,变量);
```

注意变量的地址和变量不同，变量的地址用取址符&加变量名组成例如 &a；

```cpp
int a;
scanf("%d",&a);
printf("%d",a);
```

这段代码会要求从控制台输入一个整数，然后输出它。

#### 格式控制符：

1. %d：用于输出十进制整数。

2. %ld：用于输出长整型。

3. %f：用于输出浮点数。

4. %lf：用于输出双精度浮点数。

5. %c：用于输出字符。

6. %s：用于输出字符串。

7. %p：用于输出指针地址。

8. %x：用于输出十六进制整数，小写字母。

9. %X：用于输出十六进制整数，大写字母。

10. %o：用于输出八进制整数。

11. %u：用于输出无符号十进制整数。

12. %e：用于输出以科学计数法表示的浮点数，小写字母。

13. %E：用于输出以科学计数法表示的浮点数，大写字母。

14. %g：用于输出浮点数，根据数值的大小自动选择以%f或%e表示。

15. %G：用于输出浮点数，根据数值的大小自动选择以%f或%E表示。

16. %%：用于输出百分号（%）。

### 2.数学函数：

注意，要使用C语言自带的数学函数需要导入头文件math.h

#### abs，fabs

取绝对值，abs为取整数的绝对值，fabs为取浮点数的绝对值

```cpp
int a=-1;
double b=-1.01;
printf("%d",abs(a));//1
printf("%lf",fabs(b));//1.01
```

#### sqrt，pow

开根号和幂函数

格式：

```cpp
sqrt(要开根号的数);
pow(a,b);//a的b次方
```

```cpp
int a=10;
int b=4;
printf("%d",sqrt(b));//2
printf("%d",pow(a,b));//10000
```

### 字符串函数：

使用字符串函数时要导入string.h头文件

#### strlen

获取字符串的长度

```cpp
char *str="hello";
printf("%d",strlen(str));//6
```

#### strcmp strncmp

strcmp比较两个字符串是否相等 strncmp,前n个字符组成的字符串是否相同

```cpp
char *a="hello";
char *b="hello";
char *c="hello world";
printf("%d",strcmp(a,b));//1
printf("%d",strcmp(a,c));//0
printf("%d",strncmp(a,c,5));//1
printf("%d",strncmp(a,c,7));//0
```

#### strcat

把一个字符串拼接在另一个字符串后面

```cpp
char *a="hello";
char *b="world";
printf("%s",strcat(a,b));//helloworld
```

#### strchar strstr

在主串中找子串，找到了返回头指针，否则返回空指针st

```cpp
char *a="hello";
char *b="hello world";
char *c="world";
printf("%d",strstr(b,a)-b);//0
printf("%d",strstr(b,c)-b);//-1
```

#### atoi atof

将字符串转换为整数（浮点数）

```cpp
char *a="110";
printf("%d",atoi(a));//110
printf("%f",atof(a));//110.00
```