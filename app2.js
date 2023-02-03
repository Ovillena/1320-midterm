const fs = require("fs");

const renamePromise = (file, newName) => {
    return new Promise((reject, resolve) => {
        fs.rename(file, newName, (err) => {
            if (err) {
                reject(err);
            }
            resolve('The file has been renamed')
        })
    })
}

renamePromise("file.txt", "renamed.txt",)
.then((message) => console.log(message))
.catch((reject) => console.log(reject));