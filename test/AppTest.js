const assert = require("chai").assert;
const groupArrayElements = require("../app.js").groupArrayElements;

describe("App", function () {
    describe("groupArrayElements", () => {
        it("should return empty array if input array is undefined", function () {
            assert.equal(groupArrayElements(undefined, 2), []);
        });
        it("should return empty array if input divider is undefined", function () {
            assert.equal(groupArrayElements([1, 2, 3], undefined), []);
        });
        it("should return empty array if input divider is 0", function () {
            assert.equal(groupArrayElements([1, 2, 3, 4], 0), [])
        })
        it("should return empty array if divider is a negative integer", function () {
            assert.equal(groupArrayElements([1, 2, 3], -1), []);
        });
        it("should return empty array if input divider is a not an integer", function () {
            assert.equal(groupArrayElements([1, 2, 3], 2.5), []);
        });
        it("should return original array if the divider equals the number of the elements in the original array", function () {
            assert.equal(groupArrayElements([1, 2, 3], 3), [1, 2, 3])
        })
        it("should return original array if the divider is greater than number of the elements in the original array", function () {
            assert.equal(groupArrayElements([1, 2, 3], 4), [1, 2, 3])
        })
        it("should have as last an array with number of elements equal to the reminder", function () {
            assert.equal(groupArrayElements([1, 2, 3, 4, 5, 6, 7], 2), [[1, 2], [3, 4], [5, 6], [7]])
        });
        it("should return array of elements grouped by positive integer N", function () {
            assert.equal(groupArrayElements([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
        });
    });
});
