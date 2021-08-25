

export const fileUpload = async (file)=>{

// nota: este url lo tengo de claudinary y ya lo probe en postman 
    const cloudUrl ='https://api.cloudinary.com/v1_1/daklqpkaq/upload'

        //creo mi form data para pasar pares de valores a claudinery
    const formData = new FormData()
    formData.append('upload_preset', 'react-journal')
    formData.append('file', file)

    try {
        const resp = await fetch(cloudUrl, {
            method:'POST',
            body: formData
        });
        if (resp.ok) {
            const clouResp = await resp.json()
            return clouResp.secure_url;
        } else {
            throw await resp.json();
        }
        
    } catch (error) {
        throw error;
    }
}