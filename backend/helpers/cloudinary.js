const cloudinary = reequire('cloudianary').v2
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret:process.env.CLOUDINARY_APISECRET
})

const uploadMediaToCloudinary = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type:"auto"
        })
        return result;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to upload")
    }
}


const deleteMediaFromCloudinary = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId)
    } catch (error) {
        console.log(error)
        throw new Error("Failed to delete  ")
    }
}