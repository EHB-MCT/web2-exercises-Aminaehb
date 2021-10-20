//const api = ('https://www.filestackapi.com/api/file');

const client = filestack.init("AxN8ROZz3T8azRC4SxHcQz");
const picker = client.picker({
    fromSources: ["local_file_system", "instagram", "facebook"],
    uploadInBackground: false,
    accept: ["image/*"],
    transformations: {
        crop: false,
        circle: true,
        rotate: true
    },
    exposeOriginalFile: true,

});

picker.open();
//import * as filestack from 'filestack-js';

fetch('https://www.filestackapi.com/api/store/S3?key=AxN8ROZz3T8azRC4SxHcQz', {
        method: 'POST',
        body: 'formData'
    }).then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(response => {
        console.log("error")
    })