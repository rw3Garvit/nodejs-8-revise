const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'dcplihwz2',
    api_key: '926812223792445',
    api_secret: 'aPBZOE3ScYTkf7fRdeUzXOjC3AQ'
});


let uploadImage = (path) => {
    return cloudinary.uploader.upload(path,
        { public_id: "olympic_flag" },
        function (error, result) { return result });
}

module.exports = uploadImage