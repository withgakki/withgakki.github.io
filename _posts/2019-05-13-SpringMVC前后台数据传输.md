---
layout:     post                    # 使用的布局（不需要改）
title:      前后台数据传输           # 标题 
subtitle:   总结一下       #副标题
date:       2019-05-13              # 时间
author:     KW                      # 作者
header-img: img/post-cat2.jpg       #这篇文章标题背景图片
catalog: true                       # 是否归档
tags:                               #标签
    - SpringMVC
---

> @RequestBody 与 @RequestParam

最近赶项目中，时不时在Ajax传数据的时候卡一会，这次下定决心总结一下。  
先介绍一下基础知识，还是以遇到的实例进行说明，希望以后能举一反三。

### 介绍

相信 @RequestParam 已经用的很多了，就不多说了，主要说一下 @RequestBody  
@RequestBody主要用来接收前端传递给后端的json字符串中的数据(请求体中的数据的)；GET方式无请求体，所以使用@RequestBody接收数据时，前端不能使用GET方式提交数据，而是用POST方式进行提交。在后端的同一个接收方法里，@RequestBody()与@RequestParam()可以同时使用，@RequestBody最多只能有一个，而@RequestParam()可以有多个。
> 一个请求，只有一个RequestBody；一个请求，可以有多个RequestParam。

当同时使用 @RequestParam 和 @RequestBody 时，@RequestParam 指定的参数可以是普通元素、数组、集合、对象等等(即,当 @RequestBody 与 @RequestParam 可以同时使用时，原 SpringMVC 接收参数的机制不变，只不过 **RequestBody 接收的是请求体里面的数据；而 RequestParam 接收的是 key-value 里面的参数**，所以它会被切面进行处理从而可以用普通元素、数组、集合、对象等接收)。  
如果参数前不写 @RequestParam(xx) 的话，那么就前端可以有可以没有对应的xx名字才行，如果有xx名的话，那么就会自动匹配；没有的话，请求也能正确发送。  
如果后端参数是一个对象，且该参数前是以@RequestBody修饰的，那么前端传递json参数时，必须满足以下要求：

+ 后台 @RequestBody 注解对应的类在将 HTTP 的输入流(含请求体)装配到目标类(即：@RequestBody 后面的类)时，会根据 json 字符串中的 key 来匹配对应实体类的属性，如果匹配一致且 json 中的该 key 对应的值符合(或可转换为)，这里会在下面详细分析，实体类的对应属性的类型要求时,会调用实体类的setter方法将值赋给该属性。
+ json 字符串中，如果value为 "" 的话，后端对应属性如果是 String 类型的，那么接受到的就是 ""，如果是后端属性的类型是 Integer、Double 等类型，那么接收到的就是 null。
+ json 字符串中，如果 value 为 null 的话，后端对应收到的就是 null。
+ 如果某个参数没有 value 的话，在传 json 字符串给后端时，要么干脆就不把该字段写到 json 字符串中；要么写 value 时，必须有值，null 或 "" 都行。

### 实例说明

User实体类：

```java
public class User {
    /** 姓名 */
    private String name;
    /** 年龄 */
    private String age;
    /** 性别 */
    private String gender;
    /** 备注 */
    private String remark;
    //getter,setter等省略...
}
```

Team实体类：

```java
public class Team {
    /** id */
    private Integer team;
    /** 名字 */
    private String teamName;
    /** 性别 */
    private List<String> honors;
    /** 备注 */
    private List<User> teamMembers;
    //getter,setter等省略...
}
```

@RequestBody 直接以 String 接收前端传过来的 json 数据：  
后端对应的 Controller：

```java
/**
 * 直接用String接收json数据
 * @param jsonString
 * @return
 */
@RequestMapping("mytest0")
public String test(@RequestBody String jsonString){
    System.out.println(jsonString);
    return jsonString;
}
```

![Postman测试](http://prfm9pn5e.bkt.clouddn.com/20180709160600561.png)

***

@RequestBody以简单对象接收前端传过来的json数据：  
后端对应的 Controller：

```java
/**
 * 用简单User对象接收json数据
 * @param user
 * @return user.toString()
 */
@RequestMapping("mytest1")
public String test(@RequestBody User user){
    System.out.println(user.toString());
    return user.toString();
}
```

使用PostMan测试：

![Postman测试](http://prfm9pn5e.bkt.clouddn.com/test1.png)

***

@RequestBody 以复杂对象接收前端传过来的 json 数据：  
后端对应的 Controller：

```java
/**
 * 用复杂Team对象接收json数据
 * @param tean
 * @return
 */
@RequestMapping("mytest2")
public String test(@RequestBody Team team){
    System.out.println(team.toString());
    return team.toString();
}
```

使用PostMan测试：

![Postman测试](http://prfm9pn5e.bkt.clouddn.com/test2.png)

***

@RequestBody 与简单的 @RequestParam 同时使用：  
后端对应的 Controller：

```java
/**
 * @RequestBody() 与简单的 @RequestParam() 同时使用,这里的对象用数组也ok
 * @param tean
 * @return
 */
@RequestMapping("/register/addStudent")
@ResponseBody
public ResponseData addP(@RequestBody RegisterStudent [] data,
@RequestParam("registerName") String registerName)
```

看下前端的Ajax：

```js
var data = [];//新建数组
$("form").each(function () {
    data.push($(this).serializeObject());
});
$.ajax({
    type:"POST",
    url: "/register/addStudent?registerName="+name,
    dataType: "json",
    contentType: "application/json", //这里很重要
    data: JSON.stringify(data), //只有这一个参数，json格式，后台解析为实体，后台可以直接用
    success: function(data){
        if (data.code === 200) {
            $.toast("提交成功");
        } else {
            $.toast("内部错误",data.msg);
        }
    }
});
```

对象数组+额外参数，这应该算是最复杂的吧。。。

***

@RequestBody接收请求体中的json数据；不加注解接收URL中的数据并组装为对象：  
后端对应的Controller：

```java
    /**
     * @RequestBody()装配请求
     * 第二个参数不加注解，装配 url 中的参数信息
     * @param user
     * @return
     */
    @RequestMapping("mytest4")
    public String test(@RequestBody User user1, User user2){
        System.out.println(user1.toString());
        System.out.println(user2.toString());
        return user1.toString() + "\n" + user2.toString();
    }
```

使用PostMan测试：

![PostMan测试](http://prfm9pn5e.bkt.clouddn.com/test4.png)

目前就这样，收工。