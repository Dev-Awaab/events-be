import UserModel from "./event.model.js";
import nodemailer from "nodemailer";
import qr from "qrcode";

export const join = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (user)
      return res
        .status(400)
        .json({ msg: "User already registed for the event" });

    const newUser = new UserModel(req.body);
    await newUser.save();

    // if (newUser) {
    //   await sendEmail(
    //     newUser.email,
    //     "Thrive Agric Event", // Email subject
    //     "You are receiving this mail because you signed up for Thrive Agric Tech Event",
    //     SellEmailTemplate({
    //       name: `${newUser.firstName} ${newUser.lastName}`,
    //       email: newUser.email,
    //     })
    //   );
    // }

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const verify = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ msg: "Registered verified" });
    } else {
      return res.status(400).json({ msg: "Not Registered, Not verified" });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

async function sendEmail(recipientEmail, subject, text, html) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: proccess.env.gUser,
      pass: proccess.env.gPass,
    },
  });

  // Email data
  const mailOptions = {
    from: proccess.env.gUser,
    to: recipientEmail,
    subject,
    text,
    html,
  };

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error(`Error sending email: ${error}`);
    return { success: false, message: "Email could not be sent" };
  }
}
