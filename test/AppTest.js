const assert = require("chai").assert;
const groupArrayElements = require("../app.js").groupArrayElements;

describe("App", () => {
    describe("groupArrayElements", () => {
        it("should return empty array if input array is nullable", function () {
            assert.deepEqual(groupArrayElements(undefined, 2), []);
        });
        
        it("should return empty array if input divider is nullable", function () {
            assert.deepEqual(groupArrayElements([1, 2, 3], undefined), []);
        });
        
        it("should return empty array if input divider is 0", function () {
            assert.deepEqual(groupArrayElements([1, 2, 3, 4], 0), []);
        });
        
        it("should return empty array if divider is a negative integer", function () {
            assert.deepEqual(groupArrayElements([1, 2, 3], -1), []);
        });
        
        it("should return empty array if input divider is a not an integer", function () {
            assert.deepEqual(groupArrayElements([1, 2, 3], 2.5), []);
        });
        
        it("should return an array of original array if the divider equals the number of elements in the original array", function () {
            assert.deepEqual(groupArrayElements([1, 2, 3], 3), [[1, 2, 3]]);
        });

        it("should return an array of original array if the divider is greater than number of the elements in the original array", function () {
            assert.deepEqual(groupArrayElements([1, 2, 3], 4), [[1, 2, 3]]);
        });

        it("should return array of elements grouped by positive integer", function () {
            assert.deepEqual(groupArrayElements([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
        });

        it("should have as last an array with number of elements equal to the reminder", function () {
            assert.deepEqual(groupArrayElements([1, 2, 3, 4, 5], 3), [[1, 2, 3], [4, 5]]);
        });
    });
});
