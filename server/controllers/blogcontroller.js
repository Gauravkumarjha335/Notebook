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
        const blogdata = await notemodel.findById(req.params.id);

        if (!blogdata || blogdata.length === 0) {
            return res.status(404).json({ message: "No blog posts found" });
        }
        res.status(200).json(blogdata);
    } catch (error) {
        console.error();
    }
}


export const deleteblogdata = async (req, res) => {

    try {
        const blogdata = await notemodel.findById(req.params.id);

        if (!blogdata) {
            return res.status(404).json({ message: "No blog posts found" });
        } else {
            const deletedBlog = await notemodel.findByIdAndDelete(req.params.id);


            return res.status(200).json({ message: "Blog post deleted successfully", deletedBlog });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}



export const updateblogdata = async (req, res) => {
    const { title, description, tag } = req.body;

    try {

        const newNote = {};
        if (title) {
            newNote.title = title
        };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        let note = await notemodel.findById(req.params.id);

        if (!note) {
            return res.status(404).json({ message: 'Blog note found' })
        } else {
            note.set(newNote);
            await note.save();

            return res.status(200).json({ message: 'Blog Post Updated Sussfully' })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}



