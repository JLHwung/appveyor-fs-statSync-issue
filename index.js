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
    it("should return dev >= 0", () => {
        fs.statSync(__filename).dev.should.be.above(0);
    })
});
describe("fs.stat", () => {
    it("should return dev >= 0", (callback) => {
        fs.stat(__filename, (err, stat) => {
            if (err !== null) {
                throw err;
            }
            stat.dev.should.be.above(0);
            callback();
        })
    })
})
