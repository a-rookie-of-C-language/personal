# C语言学习----数据类型

> 原创 于 2024-08-04 15:32:52 发布 · 公开 · 526 阅读 · 5 · 1 · 本内容遵循CC 4.0 BY-SA版权协议 版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。 GEO检测 · 编辑
> 文章链接：https://blog.csdn.net/weixin_59727843/article/details/140905535

### 1.整型

整型是32位，8位1字节，所以整型占4个字节.

整型的定义

```cobol
int a=0;
```

这里的a就是整型变量。

整型最大存储2^31-1大的数，为2147483647

int型的存储范围为-2147483648~2147483647

### 2.短整型

短整型是16位，占两个字节

```cpp
short a=0；
```

### 3.长整型

长整型是64位，占8个字节

```cpp
long long a=0；
```

long long：-9223372036854775808~9223372036854775807

### 4.单精度浮点型

float占四个字节，float只能提供6位有效数字，一般来说绝对6位，可能7为应该是6~7位

```cpp
float a=1.0;
printf("%f",a);//1.000000;
float b=1.00000001;
printf("%f",b)//1.000000 有效位数只有6~7位，超过的截断
```

### 5.双精度浮点型

double占8个字节，double可提供16位有效数字。

```cpp
double a=1.0;
printf("%lf",a);//1.000000
double b=1.000000000001;
printf("%lf",b);//1.000000000001
float c=1.000000000001;
printf("%f",c);//1.000000;
```

### 6.字符型

char类型占一个字节，用于存放字符列入‘a’，‘b’，等等注意一个char类型只能放一个字符

```cpp
char a='a';
printf("%c",a);//a
char b='h';
printf("%c",b);//h
char str="hello";//error 只能存放一个字符
```

在这里要区分字符和字符串，字符是单个的，字符串是多个字符组成的，字符是单引号，字符串是双引号

### 7.bool型

bool类型占一个字节且只有了两个值，true和false。

在C语言中我们定义0，空指针为false，其他的为true。

在printf中输出true和false是用整型输出，true为1，false为0；

注意要使用bool值要导入stdbool头文件

```cpp
​
#include<stdbool.h>
bool a=true;
printf("%d",a);//1
bool b=false;
printf("%d",b);//0
 
​int *p=NULL;
printf("%d",p);//0
```

这里的p为空指针为false，所以输出0；指针在后面会讲到的。

### 8.空类型

void类型表示不是任何类型，void型指针可以转换成任何类型的指针。