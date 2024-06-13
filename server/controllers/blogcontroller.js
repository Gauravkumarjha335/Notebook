import notemodel from '../models/notemodel.js';


// Multer storage configuration

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads');
//     },
//     filename: function (req, file, cb) {
//       const ext = path.extname(file.originalname);
//       const id = uuidv4();
//       cb(null, `${id}${ext}`);
//     }
//   });


//   // Multer upload configuration


//   const upload = multer({
//     storage: storage,
//     limits: {
//       fileSize: 1024 * 1024 * 10 // 10 MB max file size
//     },
//     fileFilter: function (req, file, cb) {
//       checkFileType(file, cb);
//     }
//   }).single('image');


//   // Check file type
// function checkFileType(file, cb) {
//     // Allowed ext
//     const filetypes = /jpeg|jpg|png|gif/;
//     // Check ext
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     // Check mime
//     const mimetype = filetypes.test(file.mimetype);
  
//     if (mimetype && extname) {
//       return cb(null, true);
//     } else {
//       cb('Error: Images Only!');
//     }
//   }






export const createblog = async (req, res) => {
    const { title, description, date } = req.body;

    try {
        const newblog = new notemodel({ title, description, date });
        await newblog.save();
        res.status(200).json({ message: "Blog created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const Showblogdata = async (req, res) => {
    try {
        const blogdata = await notemodel.find({}); // Changed to an empty object to retrieve all blog posts

        if (!blogdata || blogdata.length === 0) {
            return res.status(404).json({ message: "No blog posts found" });
        }
        res.status(200).json(blogdata);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const deleteblogdata = async (req, res) => {
    try {
        const blogdata = await notemodel.findById(req.params.id);

        if (!blogdata) {
            return res.status(404).json({ message: "Blog post not found" });
        } else {
            const deletedBlog = await notemodel.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "Blog post deleted successfully", deletedBlog });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const updateblogdata = async (req, res) => {
    const { title, description, tag } = req.body;

    try {
        const newNote = {};
        if (title) newNote.title = title;
        if (description) newNote.description = description;
        if (tag) newNote.tag = tag;

        const note = await notemodel.findById(req.params.id);

        if (!note) {
            return res.status(404).json({ message: 'Blog note not found' });
        } else {
            note.set(newNote);
            await note.save();
            return res.status(200).json({ message: 'Blog Post Updated Successfully' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
