
# kkk-validate 验证器

### 如何使用?

#### 1. npm
```javascript
    npm install kkk-validate //安装包

    const Rule = requere('kkk-validate') //引入
```

#### 2. 下载代码
通过git下载代码, 将kkk-validate.js放入项目目录中
```javascript
    const Rule = require('./kkk-validate.js') //引入
```

#### 3. 使用
```javascript
    //案例1
    // adorn参数是对错误信息的修饰, 可以不填
    const validate1 = Rule.isAllCnChar("吴南aa", "真实姓名")
    // 验证不通过, 进入if
    if(validate1) {
        console.log(validate1)
        // 输出 "真实姓名只能输入汉字"
    }

    //案例2
    const validate2 = Rule.isMinNumber(9, 10, "金额")
    // 验证不通过, 进入if
    if(validate2) {
        console.log(validate2)
        // 输出 "金额不能小于10"
    }
```

#### 4. 组合验证
```javascript
    const password = "123456"
    const rePassword = "123456"
    // 验证密码格式 + 两次输入是否一致
    // 两个验证都通过返回false, 否则返回错误信息
    Rule.group(Rule.isPassword(password, "密码"), Rule.isRepeat(password, rePassword, "密码"))
    
    
```


### 函数
|  名称   |  功能
|  ----  | ----
| isNumber (data, decimal, adorn) | 验证数字
| isMinNumber (data, min_number, decimal, adorn) | 验证数值最小范围
| isMaxNumber (data, max_number, decimal, adorn) | 验证最数值最大
| isMinMaxNumber (data, min_number, max_number, decimal, adorn) | 验证数值范围
| isNumberSL (data, max_length, adorn) | 验证x位小数
| isMinLength (data, min_length, adorn) | 验证字符串最小长度
| isMaxLength (data, max_length, adorn) | 验证字符串最大长度
| isLength (data, min_length, max_length, adorn) | 验证字符串长度范围
| isNull (data, adorn)| 验证空字符串
| isSpace (data, adorn) | 验证包含空格
| isNoCnChar (data, adorn) | 验证包含汉字
| isAllCnChar (data, adorn) | 验证全为汉字
| isEnNumUline (data, adorn) | 验证英文 数字 下划线
| isEmail (data) | 验证邮箱格式
| isUrl (data) | 验证url格式
| isPhone (data) | 验证手机号格式
| isIdCard (data) | 验证身份证格式
| isPassword (data, p_min, p_max, adorn) | 验证密码格式
| isRepeat (data, re_data, adorn) | 重复验证
| group (fn) | 组合验证

### 参数
| 名称 | 必填 | 默认值 | 类型 | 参数说明
| --- | --- | --- | --- | ---
| data | 是 |  | string\number | 被验证值
| decimal | 否 | true | Boole | 为true验证包含小数, 为false只能验证整数
| adorn | 否 |  | string | 错误提示修饰
| min_number | 是 |  | number | 最小数值范围
| max_number | 是 |  | number | 最大数值范围
| min_length | 是 |  | number | 最小长度
| max_length | 是 |  | number | 最大长度
| p_min | 否 | 6 | number | 最小长度
| p_max | 否 | 16 | number | 最大长度
| fn | 是 |  | function | 验证函数