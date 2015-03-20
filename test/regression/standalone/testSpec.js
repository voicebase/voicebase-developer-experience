'use strict';

module.exports = function() {
  it('should be varible equal true', function () { // demo test
    var a = true;
    browser.get('http://localhost:9000/directive-minimum.html');
    expect(a).toBe(true);
  });
};
