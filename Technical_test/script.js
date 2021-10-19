const client = filestack.init('AxN8ROZz3T8azRC4SxHcQz');
const api = ('https://www.filestackapi.com/api/file');
const options = {
    fromSources: ["local_file_system", "instagram", "facebook"],
    accept: ["image/*"],
    uploadConfig: {
        retry: 5,
        timeout: 60000
    },
    onFileSelected: file => {
        // If you throw any error in this function it will reject the file selection.
        // The error message will be displayed to the user as an alert.
        if (file.size > 1000 * 1000) {
            throw new Error('File too big, select something smaller than 1MB');
        }
    }
};

client.picker(options).open();