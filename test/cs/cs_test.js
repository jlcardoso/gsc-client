/**
 * Created by zava on 3.2.2016.
 */

var exports = exports || {};

exports.testSomething = function(test){
    test.expect(1);
    test.ok(true, "this assertion should pass");
    test.done();
};
