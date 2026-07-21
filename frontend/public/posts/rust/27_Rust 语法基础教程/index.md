# Rust 语法基础教程

> 原创 已于 2025-08-16 09:15:10 修改 · 公开 · 507 阅读 · 14 · 5 · 本内容遵循CC 4.0 BY-SA版权协议 版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。 GEO检测 · 编辑
> 文章链接：https://blog.csdn.net/weixin_59727843/article/details/150440219

## Rust语法基础教程

Rust 是一门系统编程语言，以内存安全、零成本抽象和并发安全著称。本文将介绍 Rust 的基础语法。

### 1. 变量与可变性

#### 不可变变量

```rust
let x = 5;
// x = 6; // 错误：不能修改不可变变量
```

#### 可变变量

```rust
let mut y = 5;
y = 6; // 正确：可以修改可变变量
```

#### 常量

```rust
const MAX_POINTS: u32 = 100_000;
```

#### 变量遮蔽 (Shadowing)

```rust
let x = 5;
let x = x + 1; // 遮蔽前一个 x
let x = x * 2; // 再次遮蔽
```

### 2.数据类型

#### 标量类型

```rust
// 整数类型
let a: i32 = 42;
let b: u64 = 100;

// 浮点类型
let c: f64 = 3.14;
let d = 2.0; // f64 默认类型

// 布尔类型
let e: bool = true;
let f = false;

// 字符类型
let g: char = 'z';
let h = '😻';
```

#### 复合类型

```rust
// 元组
let tup: (i32, f64, u8) = (500, 6.4, 1);
let (x, y, z) = tup; // 解构
let first = tup.0; // 索引访问

// 数组
let arr: [i32; 5] = [1, 2, 3, 4, 5];
let same_value = [3; 5]; // [3, 3, 3, 3, 3]
let first_element = arr[0];
```

### 3. 函数

```rust
// 基本函数
fn greet(name: &str) {
    println!("Hello, {}!", name);
}

// 带返回值的函数
fn add(a: i32, b: i32) -> i32 {
    a + b // 表达式，无分号
}

// 多返回值
fn calculate(x: i32, y: i32) -> (i32, i32) {
    (x + y, x - y)
}
```

### 4. 控制流

#### if 表达式

```rust
let number = 6;

if number % 4 == 0 {
    println!("number is divisible by 4");
} else if number % 3 == 0 {
    println!("number is divisible by 3");
} else {
    println!("number is not divisible by 4 or 3");
}

// if 作为表达式
let condition = true;
let number = if condition { 5 } else { 6 };
```

#### 循环

```rust
// loop 循环
let mut counter = 0;
let result = loop {
    counter += 1;
    if counter == 10 {
        break counter * 2;
    }
};

// while 循环
let mut number = 3;
while number != 0 {
    println!("{}!", number);
    number -= 1;
}

// for 循环
let a = [10, 20, 30, 40, 50];
for element in a.iter() {
    println!("the value is: {}", element);
}

// 范围循环
for number in 1..4 {
    println!("{}!", number);
}
```

### 5. 所有权 (Ownership)

#### 基本规则

1. Rust 中的每一个值都有一个被称为其所有者的变量

2. 值在任一时刻有且只有一个所有者

3. 当所有者离开作用域，这个值将被丢弃

```rust
// 移动 (Move)
let s1 = String::from("hello");
let s2 = s1; // s1 被移动到 s2，s1 不再有效

// 克隆 (Clone)
let s1 = String::from("hello");
let s2 = s1.clone(); // 深拷贝

// 引用 (References)
let s1 = String::from("hello");
let len = calculate_length(&s1); // 借用

fn calculate_length(s: &String) -> usize {
    s.len()
}
```

### 6. 结构体 (Struct)

```rust
// 定义结构体
struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}

// 创建实例
let user1 = User {
    email: String::from("someone@example.com"),
    username: String::from("someusername123"),
    active: true,
    sign_in_count: 1,
};

// 元组结构体
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

// 方法
impl User {
    fn new(email: String, username: String) -> User {
        User {
            email,
            username,
            active: true,
            sign_in_count: 1,
        }
    }
    
    fn is_active(&self) -> bool {
        self.active
    }
}
```

### 7. 枚举 (Enum)

```rust
// 基本枚举
enum IpAddrKind {
    V4,
    V6,
}

// 带数据的枚举
enum IpAddr {
    V4(u8, u8, u8, u8),
    V6(String),
}

// Option 枚举
let some_number = Some(5);
let some_string = Some("a string");
let absent_number: Option<i32> = None;

// match 表达式
fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}
```

### 8. 错误处理

```rust
// Result 类型
use std::fs::File;
use std::io::ErrorKind;

let f = File::open("hello.txt");
let f = match f {
    Ok(file) => file,
    Err(error) => match error.kind() {
        ErrorKind::NotFound => match File::create("hello.txt") {
            Ok(fc) => fc,
            Err(e) => panic!("Problem creating the file: {:?}", e),
        },
        other_error => panic!("Problem opening the file: {:?}", other_error),
    },
};

// unwrap 和 expect
let f = File::open("hello.txt").unwrap();
let f = File::open("hello.txt").expect("Failed to open hello.txt");
```

### 9. 泛型、Trait 和生命周期

```rust
// 泛型函数
fn largest<T: PartialOrd + Copy>(list: &[T]) -> T {
    let mut largest = list[0];
    for &item in list {
        if item > largest {
            largest = item;
        }
    }
    largest
}

// Trait 定义
trait Summary {
    fn summarize(&self) -> String;
}

// Trait 实现
struct NewsArticle {
    headline: String,
    content: String,
}

impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("{}: {}", self.headline, self.content)
    }
}
```

### 总结

Rust 的语法设计注重安全性和性能，通过所有权系统、类型系统和借用检查器确保内存安全。掌握这些基础语法是学习 Rust 的重要第一步。关于泛型,trait,所有权,生命周期在后面会详细讲解