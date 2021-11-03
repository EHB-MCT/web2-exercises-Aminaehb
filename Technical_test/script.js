//const api = ('https://www.filestackapi.com/api/file');


window.addEventListener('DOMContentLoaded', function () {
    const apikey = 'AxN8ROZz3T8azRC4SxHcQz';
    const client = filestack.init(apikey);
    const options = {
        maxFiles: 20,
        uploadInBackground: false,
        onOpen: () => console.log('opened!'),
        onUploadDone: (res) => console.log(res),
    };
    client.picker(options).open();
});

//import * as filestack from './filestack';