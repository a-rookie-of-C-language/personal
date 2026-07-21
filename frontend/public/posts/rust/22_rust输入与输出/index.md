# rust输入与输出

> 原创 已于 2025-08-01 23:06:10 修改 · 公开 · 328 阅读 · 1 · 0 · 本内容遵循CC 4.0 BY-SA版权协议 版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。 GEO检测 · 编辑
> 文章链接：https://blog.csdn.net/weixin_59727843/article/details/149842951

## 控制台输入和输入

### 控制台输入输出示例

#### 读取用户输入

```rust

fn main() {
    let a = 1;
    let mut b = String::new();
    
    // 读取用户输入
    std::io::stdin().read_line(&mut b)
        .ok()
        .expect("Failed to read line");
    
    // 解析输入，失败时使用默认值 0
    let c = b.trim()
        .parse()
        .unwrap_or_else(|_| 0);
    
    // 使用 Debug 格式输出
    println!("{:?} {:?}", a, c);
}
```

 ![输入与输出](./22_1.png)

#### println!宏的格式化参数

- `{:?}` : Debug 格式，用于调试输出

- `{}` : Display 格式，用户友好输出

- `{:#?}` : 美化的 Debug 格式

#### 最后

关于 mut,以及一些其他的语法在后续解释