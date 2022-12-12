let {myFileWriter, myFileReader, myFileUpdater, myFileDeleter} = require('./index')
const path = require('path')

myFileWriter('MyFile.txt', "Hello, Here is an content ")

myFileReader(path.join(__dirname, "MyFile.txt"))

myFileUpdater(path.join(__dirname, "MyFile.txt"), "\nUpdating Content" )

myFileDeleter(path.join(__dirname, "MyFile1.txt"))

