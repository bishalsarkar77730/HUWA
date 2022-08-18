import Form from "../Models/form.js";
import User from "../Models/users.js";

export const addCompany = async (req, res, next) => {
  const newForm = new Form({ userId: req.user.id, ...req.body });
  try {
    const saveForm = await newForm.save();
    res.status(200).json(saveForm);
  } catch (error) {
    next(error);
  }
};

export const updateCompany = async (req, res, next) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form)
      return res.status(200).json({
        messaage: "Company not Found",
        success: false,
      });
    if (req.user.id === form.userId) {
      const updatedform = await Form.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedform);
    } else {
      return res.status(403).json({
        messaeg: "you can update only your company",
        success: false,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteCompany = async (req, res, next) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form)
      return res.status(404).json({
        message: "form not found",
        success: false,
      });
    if (req.user.id === form.userId) {
      await Form.findByIdAndDelete(req.params.id);
      res.status(200).json("the Company has been deleted");
    } else {
      return res.status(403).json({
        message: "you can Delete only your details",
        success: false,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getCompany = async (req, res, next) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form)
      return res.status(404).json({
        message: "form not found",
        success: false,
      });
    if (req.user.id === form.userId) {
      const company = await Form.findById(req.params.id);
      res.status(200).json(company);
    } else {
      return res.status(403).json({
        message: "you can View only your details",
        success: false,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getAllUserCompany = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const Id = user._id;
    const form = await Form.find({ userId: Id });
    res.status(200).json(form);
  } catch (error) {
    next(error);
  }
};

// Admin routes

export const getallCompany = async (req, res, next) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    next(error);
  }
};

export const getsingleCompany = async (req, res, next) =>{
  try {
    const company = await Form.findById(req.params.id);
    res.status(200).json(company);
  } catch (error) {
    next(error)
  }
}
