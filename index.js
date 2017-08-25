const fs = require("fs")
require('chai').should()

describe("fs.statSync", () => {
    it("should equal to fs.stat", (callback) => {
        fs.stat(__filename, (err, stat) => {
            if (err !== null) {
                throw err;
            }
            stat.should.eql(fs.statSync(__filename));
            callback();
        })
    })
});
