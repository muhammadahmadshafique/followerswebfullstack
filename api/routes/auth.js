// routes/auth.js
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Order = require("../models/Order");
const sendMail = require("../utils/sendMail");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const axios = require("axios");
require("dotenv").config();

const stripe = require("stripe")(
  process.env.STRIPE_SECRET_KEY
);

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const alreadyEmail = await User.findOne({ email: email });
    if (alreadyEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    // Save the user to the database
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      res.status(200).json({ message: "Login successful", userinfo: user });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

// create activation token
const createActivationToken = (user) => {
  return jwt.sign(user, "sdfsdfsdgsdgsdg", {
    expiresIn: "5m",
  });
};
router.post("/resetpassword", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const finaluser = {
    email: user.email,
    name: user.name,
  };

  const activationToken = createActivationToken(finaluser);
  console.log(
    "🚀 ~ file: auth.js:80 ~ router.post ~ activationToken:",
    activationToken
  );

  const activationUrl = `https://followerstudio.fr/changepassword/${activationToken}`;
  
  try {
    await sendMail({
      email: user.email,
      subject: "Réinitialisez votre mot de passe en cliquant sur le lien ci-dessous",
      message: `Bonjour ${user.name}, veuillez cliquer sur le lien pour activer votre compte : ${activationUrl}`,
    });
    res.status(201).json({
      success: true,
      message: `Merci de consulter vos emails:- ${user.email} Pour activer votre compte!`,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

router.post("/verifyToken", async (req, res) => {
  try {
    const { activation_token, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const verify = jwt.verify(activation_token, "sdfsdfsdgsdgsdg");

    if (!verify) {
      return res.status(400).json({ message: "Invalid token" });
    }

    const email = verify.email;
    const filter = { email: email };
    const update = { password: hashedPassword };

    let user = await User.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.status(200).json({
      message: "Mot de passe mis à jour avec succès",
      updateuser: user,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: error.message, error: error.message });
  }
});

router.post("/create-checkout-session", async (req, res) => {
  const { finalprice, link, service } = req.body;
  console.log("🚀 ~ file: auth.js:140 ~ router.post ~ finalprice:", finalprice);
  const lineItem = {
    price_data: {
      currency: "eur",

      product_data: {
        name: service,
        description: `You purchase ${service} service for ${finalprice} EUR and your social media link is ${link}`, // Description of the product (optional)
      },
      unit_amount: finalprice * 100,
    },
    quantity: 1,
  };
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [lineItem],
      mode: "payment",

      success_url: "https://followerstudio.fr/success",
      cancel_url: "https://followerstudio.fr/error",
    });

    res.json({ message: session.url });
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
});

const currentDateTime = moment().format("DD MMM YYYY hh:mm A");

//Create order
router.post("/createorder", async (req, res) => {
  const { email, servicetype, price, id, name, link, quantity,serviceNumber } = req.body;
  console.log(email, servicetype, price, id, name, quantity, link);
  try {
    const order = new Order({
      id,
      name,
      email,
      servicetype,
      price,
      quantity,
      link,
      serviceNumber:serviceNumber,
      currentDateTime: currentDateTime,
    });
    await order.save();
    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

//find all orders of user if id is equal to req.body.id

router.post("/findordersofusers", async (req, res) => {
  const { id, filter } = req.body;
  console.log("🚀 ~ file: auth.js:204 ~ router.post ~ filter:", filter);
  console.log("🚀 ~ file: auth.js:204 ~ router.post ~ id:", id);
  try {
    let filterObject = { id: id };

    // If the filter is "all," do not apply any date range filter
    if (filter !== "all") {
      let startDate;

      // Determine the start date based on the filter parameter
      switch (filter) {
        case "7days":
          startDate = moment().subtract(7, "days").toDate();
          break;
        case "15days":
          startDate = moment().subtract(15, "days").toDate();
          break;
        case "30days":
          startDate = moment().subtract(30, "days").toDate();
          break;
        default:
          startDate = null; // Invalid filter, will not apply date range filter
      }

      // If a start date is specified, add it to the filter
      if (startDate) {
        filterObject.createdAt = { $gte: startDate };
      }
    }

    const orders = await Order.find(filterObject);

    res.status(200).json({ message: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// find order by params url id
router.get("/findorder/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    res.status(200).json({ message: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// write a api to change passowrd of a user base of id which is req.body.id
router.post("/changeprofilepassword", async (req, res) => {
  const { id, password } = req.body;
  try {
    const user = await User.findById(id);
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ message: "Mot de passe mis à jour avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

//write get request to fetch data from this api=> https://dripfeedpanel.com/api/v2
const services = async () => {
  try {
    const response = await axios.post("https://dripfeedpanel.com/api/v2", {
      key: "a0864f8e1f390d732bc2e02cac405baf",
      action: "services",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
router.post("/api/services", async (req, res) => {
  try {
    const serviceList = await services();
    res.json(serviceList);
  } catch (error) {
    console.error("Error fetching services:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

//add order

const order = async (req, res) => {
  const { servicetype, quantity, link } = req.body;
  console.log("servicetype type is", servicetype)
  try {
    const response = await axios.post("https://dripfeedpanel.com/api/v2", {
      key: "a0864f8e1f390d732bc2e02cac405baf",
      action: "add",
      service: servicetype,
      link: link,
      quantity: quantity,
    });
    return response.data;
  } catch (error) { 
    throw error;
  }
};
router.post("/api/createorderinapi", async (req, res) => {
  try {
    const ordercreated = await order(req,res);
    console.log("🚀 ~ file: auth.js:307 ~ router.post ~ ordercreated:", ordercreated)
    
    res.json({
      ordercreated: ordercreated,
      message: "Commande créée avec succès. Veuillez attendre 2 à 5 jours pour obtenir vos résultats", 
    });
  } catch (error) {
    console.error("Error fetching services:", error.message);
    res.status(500).json({message: error.message}); 
  }
});


router.post("/editusername", async (req, res) => {
  const { id ,name} = req.body;

  console.log( id, name);
  
  try {
    //change username
    const user = await User.findByIdAndUpdate(id, {
      name: name
    },
      { new: true }
    )
   
    res.status(200).json({ message: "Nom d'utilisateur mis à jour avec succès",user:user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});
router.get("/ahmad1", async (req, res) => {
  res.json('Hello World!')
});





module.exports = router;
