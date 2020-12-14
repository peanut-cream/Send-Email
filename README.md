# nodejs定时任务发送邮件

## install
NPM
```
npm install
```

## USE
```js
const toeamil=""//发送到的邮箱
const fromeamil=""//自己邮箱
const config = {
    host: "smtp.qq.com",
    port: 587,
    secure: false,
    auth: {
      user: fromeamil, // 用户账号
      pass: "", //授权码,通过QQ获取
    },
}
```
> 注意：qq邮箱的pass（授权码）需要进入 qq邮箱 的【设置】-【账户】，开启smtp.

## Execute
```
node ./index.js
```