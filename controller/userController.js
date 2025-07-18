
import user from '../model/userModel.js'

//post user logic
export const create = async (req, res) => {

    try {
        const userData = new user(req.body);
        const { email } = userData;

        const userExit = await user.findOne({ email })
        if (userExit) {
            return res.status(400).json({ message: "user already exist" })
        }
        const saveUser = await userData.save();
        res.status(200).json(saveUser);
    } catch (err) {
        res.status(500).json({ error: "internal server error" });
    }

}


//get user logic
export const get = async (req, res) => {
    try {
        const users = await user.find();
        if (users.length === 0) {
            return res.status(404).json({ message: "user not found" })
        }
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })

    }

};

//update user logic
export const update = async (req, res) => {
    try {
        const id = req.params.id.trim();

        const userExit = await user.findOne({ _id: id })
        if (!userExit) {
            return res.status(404).json({ message: "user not found" })
        }
        const updateUser = await user.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(201).json(updateUser);
    } catch (error) {

        return res.status(500).json({ error: "internal server error" })
    }
};

//delete user logic
export const deleteUser = async (req,res) => {
    try {
        const id = req.params.id.trim();

        const userExit = await user.findOne({ _id: id })
        if (!userExit) {
            return res.status(404).json({ message: "user not found" })
        }
        await user.findByIdAndDelete(id);
        res.status(201).json({ message: "user deleted successfully" })

    } catch (error) {
        return res.status(500).json({ error: "internal server error" })
    }
}