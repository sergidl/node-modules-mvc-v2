import fs from 'fs';

export default JSON.parse(fs.readFileSync("./data/movies.json", "utf8"))


// afegiu codi per llegir './data/movies.json'
