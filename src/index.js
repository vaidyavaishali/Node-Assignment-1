const fs = require('fs/promises')
let myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try {
        console.log("File is created")
        return await fs.writeFile(fileName, fileContent)
    } catch (err) {
        console.log(err);
    }
}
const  myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile(fileName, {encoding:"utf-8"})
	console.log (data)
  
}
const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try {
        console.log("File is Update")
        return await fs.appendFile(fileName, fileContent)
    } catch (err) {
        console.log(err);
    }
	// fs.appendFile(fileName, fileContent, (err)=>{
	// 	console.log(err)
	// })
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	try {
        console.log("File is deleted")
        return await fs.unlink(fileName)
    } catch (err) {
        console.log(err);
    }
	// fs.unlink(fileName, (err)=>{
	// 	console.log(err)
		
	// })
}
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }