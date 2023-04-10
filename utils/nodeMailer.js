import { createTransport } from 'nodemailer';
import logger from "./winston.js";
import dotenv from 'dotenv';
dotenv.config();

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});




export const sendUserEmail = async (username, password) => {

    const UserMailOptions = {
        from: 'santi.iztli@gmail.com',
        to: username,
        subject: '✅ Pokedex successful registration!',
        html: `
        <h3 style="color:green;">✅ Successful registration! Pokedex</h3>
        <h2>Welcome to Pokedex BySanti.dev Crew</h2>
        <p><strong>Username:</strong>${username}</p>
        <p><strong>Password:</strong>${password}</p>
        <p>Your password is encrypted and only you can see it</p>
        `,
    }

    try {
        const info = await transporter.sendMail(UserMailOptions)
        logger.log('info', `✅ email has been sent to ${username}`)
    } catch (err) {
        logger.log('error', `❌ cant sent mail to ${username}`)
    }
}

export const sendAdminEmail = async (newUserName) => {

    const adminMailOptions = {
        from: 'santi.iztli@gmail.com',
        to: 'santi.iztli@gmail.com',
        subject: '✅ New user at Pokedex!',
        html: `<h3 style="color:green;">✅ Successful registration! Pokedex</h3>
        <p><strong>New user:</strong>${newUserName}</p>`,
    }

    try {
        const info = await transporter.sendMail(adminMailOptions)
        logger.log('info', `✅ email has been sent to admin!`)
    } catch (err) {
        logger.log('error', `❌ cant sent mail to admin!`)
    }
}

