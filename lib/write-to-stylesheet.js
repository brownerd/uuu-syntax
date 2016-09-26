'use babel';

export default (pathToFile, data, encoding) => {
  return new Promise(function (resolve, reject) {
    fs.writeFile(pathToFile, data, encoding,
      (error, data) => {
        if (error) {
          reject(atom.notifications.addWarning(error));
        }
        resolve(data);
      });
    }
  )
}
