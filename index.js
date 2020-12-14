const schedule = require("node-schedule");//定时任务
const nodemailer = require("nodemailer");//邮件
const axios = require("axios");
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
async function sendemail(text) {
    let transporter = nodemailer.createTransport(config)//创建一个客户端
    let info =await transporter.sendMail({
        from: `<${fromeamil}>`, // sender address
        to: `亲爱的<${toeamil}>`, // list of receivers
        subject: "每日一夸", // Subject line
        text: text, // plain text body
    })
}
function start_timer() { 
    /**
        * * * * * *
        ┬ ┬ ┬ ┬ ┬ ┬
        │ │ │ │ │  |
        │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
        │ │ │ │ └───── month (1 - 12)
        │ │ │ └────────── day of month (1 - 31)
        │ │ └─────────────── hour (0 - 23)
        │ └──────────────────── minute (0 - 59)
        └───────────────────────── second (0 - 59, OPTIONAL)
     */
    schedule.scheduleJob('0 20 5 * * *', () => {
        // https://chp.shadiao.app/api.php 彩虹屁api
        axios.get("https://chp.shadiao.app/api.php").then(res => { 
            sendemail(res.data);
        })
    }); 
}
start_timer();