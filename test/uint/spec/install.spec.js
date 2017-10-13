import { install } from '../../../src/install'


describe("InstallTest", function() {
    var foo;
    beforeEach(function() {
        foo = 0;
        foo += 1;
    });

    afterEach(function() {
        foo = 0;
    });

    it("1. 测试install", function() {
        install()
    });
});