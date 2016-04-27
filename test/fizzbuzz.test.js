"use strict";

var assert = require("chai").assert;
var codecheck = require("codecheck");

function fizzbuzz(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 5 === 0)  return "Buzz";
  if (n % 3 === 0)  return "Fizz";
  return n.toString();
}

describe("FizzBuzz", function() {
  var app = codecheck.consoleApp(process.env.APP_COMMAND);

  it("1 -> 1", function() {
    return app.run(1).spread(function(code, stdOut) {
      assert.equal(code, 0);
      assert.equal(stdOut.length, 1);
      assert.equal(stdOut[0], "1");
    });
  });

  it("2 -> 2", function() {
    return app.run(2).spread(function(code, stdOut) {
      assert.equal(code, 0);
      assert.equal(stdOut.length, 1);
      assert.equal(stdOut[0], "2");
    });
  });

  it("3 -> Fizz", function() {
    return app.run(3).spread(function(code, stdOut) {
      assert.equal(code, 0);
      assert.equal(stdOut.length, 1);
      assert.equal(stdOut[0], "Fizz");
    });
  });

  // 4 to 100
  for (var i=4; i<=100; i++) {
    (function(n) {
      it(n + " to " + fizzbuzz(n), function() {
        return app.run(n).spread(function(code, stdOut) {
          assert.equal(code, 0);
          assert.equal(stdOut.length, 1);
          assert.equal(stdOut[0], fizzbuzz(n));
        });
      })
    })(i);
  }
});