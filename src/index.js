const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  try {
    // create a new file with the given name and content
    await fs.writeFile(fileName, fileContent);
    console.log("File created successfully!");
  } catch (err) {
    console.error(err);
  }
};

module.exports = { writeFile };
