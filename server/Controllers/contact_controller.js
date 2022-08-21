import Contact from "../Models/contact.js";

export const addContact = async (req, res, next) => {
  try {
    const newData = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    };
    const newContact = new Contact({ ...newData });
    await newContact.save();
    res.status(200).json({
      message: "Your message is send to us we will Connect you Shortly",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
