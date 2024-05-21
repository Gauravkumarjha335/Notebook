import notemodel from '../models/notemodel.js'



export const createblog = async (req, res) => {

    const { title, description, date } = req.body;

    try {
        const newblog = new notemodel({ title, description, date });
        await newblog.save();
        res.status(200).json({ message: "blog created successfully" })
    } catch (error) {
        console.error();

    }
}


export const Showblogdata = async (req, res) => {

    try {
        const blogdata = await notemodel.find();

        if (!blogdata || blogdata.length === 0) {
            return res.status(404).json({ message: "No blog posts found" });
        }
        res.status(200).json(blogdata);
    } catch (error) {
        console.error();
    }
}


// export const deleteblog = async (req, res) => {
//     const { id } = req.params;

//     const blog = await notemodel.findById(req.params.id);
//     if (!blog) {

//         return res.status(404).send("Note is not avilable Found")
//     }
// }



