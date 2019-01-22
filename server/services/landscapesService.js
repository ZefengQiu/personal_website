const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

module.exports = class LandscapesService {
    constructor(datafile) {
        this.datafile = datafile;
    };

    async getData() {
        const data = await readFile(this.datafile, 'utf8');
        if (!data) return [];
        return JSON.parse(data).landscapes;
    };

    async getArtworksForAlbum() {
        
    }
};