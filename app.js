const express = require('express');
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();

app.use(express.static(path.resolve(__dirname, "./frontend/build")));
app.use(express.json({ extended: true }));

app.post('/mail/send', async (req, res) => {
    try {
        const text = req.body.text;
        const subject = req.body.subject;
        const email = req.body.email;
        const transport = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        await transport.sendMail({
            from: process.env.MAIL_FROM,
            to: email,
            subject: subject,
            html: `<div><p>${text}</p></div>`
        });
        res.status(200).json({message: 'Сообщение отправлено'});      
        console.log('Сообщение отправлено');
    } catch (error) {
        res.status(500).json(error);
    }
})

app.listen(process.env.PORT || 4000, () => {
    console.log(`Сервер запущен с портом ${process.env.PORT}`);
});