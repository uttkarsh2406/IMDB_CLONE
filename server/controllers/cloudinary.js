const cloudinary = require("cloudinary");


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

exports.upload = async (req, res) => {

    await cloudinary.uploader
    .upload(req.body.image, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
    })
    .then((result) => {
      res.json({
        public_id: result.public_id,
        url: result.secure_url,
      });
    })
    .catch((err) => {
      console.log(err);
    });

};


exports.remove =  (req, res) => {
    let image_id=req.body.public_id;
    cloudinary.uploader.destroy(image_id,(err,result)=>{
        if(err){
            return res.json({Success:false,err});
        }
        res.send("OK");
    })
};
