const fs = require("fs")
const path = require("path")

describe("fs.statSync", () => {
    it("should equal to fs.stat", () => {
        fs.stat(__filename, (err, stat) => {
            if (err !== null) {
                throw err;
            }
            stat.should.eql(fs.statSync(__filename));
        })
    })
});
