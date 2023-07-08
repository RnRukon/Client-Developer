import axios from "axios";

const imageUploader = async (img) => {
    let body = new FormData()
    body.set('key', 'a3f5f39b0663ddb18e246a65faf8a647')
    body.append('image', img)
    const result = await axios({
        method: 'post',
        url: 'https://api.imgbb.com/1/upload',
        data: body
    });

    return result?.data?.data?.url;
};

export default imageUploader;