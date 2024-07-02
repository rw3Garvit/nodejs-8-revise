const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "rw3.garvit.rd@gmail.com",
        pass: "bbawdecelkumyrpw",
    },
});



let sendEmail = (to, subject, data) => {

    return transporter.sendMail({
        from: '"Hello👻" <rw3.garvit.rd@gmail.com>', // sender address
        to: to, // list of receivers
        subject: subject,
        text: data, // plain text body

    });

}


module.exports = sendEmail