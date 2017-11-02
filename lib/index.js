"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 正規表現URLディスパッチ
 */
var UrlDispatcher = function () {
    function UrlDispatcher() {
        _classCallCheck(this, UrlDispatcher);

        this.routes = [];
    }

    _createClass(UrlDispatcher, [{
        key: "addRoute",
        value: function addRoute(path, func) {
            this.routes.push([path, func]);
        }
    }, {
        key: "run",
        value: function run(path) {
            for (var i = 0; i < this.routes.length; ++i) {
                var func = this.routes[i];
                var match = path.match(func[0]);

                match && func[1](match);
            }
        }
    }]);

    return UrlDispatcher;
}();

exports.default = UrlDispatcher;
module.exports = exports["default"];