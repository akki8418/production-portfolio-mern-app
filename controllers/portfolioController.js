const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

//transport
const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth: {
            api_key: proccess.env.API_SENDGRID
        }
    })
);

const sendEmailController = (req, res) => {

    try {

        const { name, email, msg } = req.body

        //validation
        if (!name || !email || !msg) {
            return res.status(500).send({
                success: false,
                message: 'please provide all fields'
            })
        }

        //email matter
        transporter.sendMail({
            to: "pandeyankit6112004@gmail.com",
            from: "pandeyankit6112004@gmail.com",
            subject: "regarding mern portfolio app",
            html: `
             <h5>Detail Informaition</h5>
             <ul>
             <li><p>Name: ${name}</p></li>
             <li><p>Name: ${email}</p></li>
             <li><p>Name: ${msg}</p></li>
             </ul>
            
            `

        })

        return res.status(200).send({
            success: true,
            message: "your message send successfully",
        });

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "send email API error",
            error
        })
    }
}

module.exports = { sendEmailController };