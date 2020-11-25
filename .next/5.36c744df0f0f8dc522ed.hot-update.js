webpackHotUpdate(5,{

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(581);

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = __webpack_require__(469);

var _Layout = __webpack_require__(1390);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(580);

var _web = __webpack_require__(499);

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = __webpack_require__(1416);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/abbasattar/Documents/BlockDeepNet/pages/index.js?entry";


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: "renderCampaigns",
    value: function renderCampaigns() {

      var address = this.props.campaigns[0];
      var name = this.props.campaigns[1];
      var desc = this.props.campaigns[2];
      var donation = this.props.campaigns[3];
      var minimum = this.props.campaigns[4];
      var items = [];
      console.log(address, name, desc, minimum, donation);

      for (var i = 0; i < this.props.campaigns[0].length; i++) {
        items.push({
          header: name[i],
          description: _react2.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          }, _react2.default.createElement("div", { style: { fontsize: "18px" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          }, _react2.default.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          }, _react2.default.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }), _react2.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }, "Address: ", address[i]), _react2.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }, "Minimum: ", minimum[i], " wei"), _react2.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }, "Required Donation: ", _web2.default.utils.fromWei(donation[i], "ether"), " ether"))), _react2.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }, _react2.default.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }), _react2.default.createElement(_ContributeForm2.default, { address: address[i], __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          }), _react2.default.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          }), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address[i], __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }, "View Campaign")))),
          meta: _react2.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }, _react2.default.createElement("i", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }, desc[i])),
          fluid: true
        });
      }

      // const items = address.map((item) => {
      //   return {
      //     header: item,
      //     description: (
      //         <Link route={`/campaigns/${item}`}>
      //           <a>View Campaign</a>
      //         </Link>
      //     ),
      //     fluid: true,
      //   };
      // });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Projects"), this.renderCampaigns()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt("return", { campaigns: campaigns });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJMYXlvdXQiLCJMaW5rIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiQ2FtcGFpZ25JbmRleCIsImFkZHJlc3MiLCJwcm9wcyIsImNhbXBhaWducyIsIm5hbWUiLCJkZXNjIiwiZG9uYXRpb24iLCJtaW5pbXVtIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwiaSIsImxlbmd0aCIsInB1c2giLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImZvbnRzaXplIiwidXRpbHMiLCJmcm9tV2VpIiwibWV0YSIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUzs7QUFDVCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7Ozs7Ozs7O0lBRXJCLEE7Ozs7Ozs7Ozs7O3NDQU1jLEFBRWhCOztVQUFNLFVBQVUsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUEzQixBQUFnQixBQUFxQixBQUNyQztVQUFNLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUF4QixBQUFhLEFBQXFCLEFBQ2xDO1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQXhCLEFBQWEsQUFBcUIsQUFDbEM7VUFBTSxXQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBNUIsQUFBaUIsQUFBcUIsQUFDdEM7VUFBTSxVQUFVLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBM0IsQUFBZ0IsQUFBcUIsQUFDckM7VUFBTSxRQUFOLEFBQWMsQUFDZDtjQUFBLEFBQVEsSUFBUixBQUFZLFNBQVosQUFBcUIsTUFBckIsQUFBMkIsTUFBM0IsQUFBaUMsU0FBakMsQUFBMEMsQUFFMUM7O1dBQUksSUFBSSxJQUFSLEFBQVksR0FBRyxJQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixHQUF2QyxBQUEwQyxRQUExQyxBQUFrRCxLQUFJLEFBQ3BEO2NBQUEsQUFBTTtrQkFDSSxLQURDLEFBQ0QsQUFBSyxBQUNiO3VDQUNFLGNBQUE7O3dCQUFBOzBCQUFBLEFBQ0U7QUFERjtBQUFBLFdBQUEsa0JBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBQyxVQUFiLEFBQVksQUFBWTt3QkFBeEI7MEJBQUEsQUFDRTtBQURGOzZCQUNFLGNBQUE7O3dCQUFBOzBCQUFBLEFBQ0U7QUFERjtBQUFBOzt3QkFDRTswQkFERixBQUNFLEFBQ0Y7QUFERTtBQUFBLDhCQUNGLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUFlLHFCQUZmLEFBRUEsQUFBZSxBQUFRLEFBQ3ZCLHFCQUFBLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUFlLHFCQUFmLEFBQWUsQUFBUSxJQUh2QixBQUdBLEFBQ0EseUJBQUEsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBQXlCLHFDQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsU0FBbkIsQUFBbUIsQUFBUyxJQUFyRCxBQUF5QixBQUErQixVQU41RCxBQUNFLEFBQ0UsQUFJQSxBQUdGLDZCQUFBLGNBQUE7O3dCQUFBOzBCQUFBLEFBQ0U7QUFERjtBQUFBOzt3QkFDRTswQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLDhCQUNBLEFBQUMsMENBQWUsU0FBUyxRQUF6QixBQUF5QixBQUFRO3dCQUFqQzswQkFGRixBQUVFLEFBQXVDO0FBQXZDOzs7d0JBQXVDOzBCQUZ6QyxBQUV5QyxBQUN2QztBQUR1QztBQUFBLDhCQUN2QyxBQUFDLDhCQUFLLHVCQUFxQixRQUEzQixBQUEyQixBQUFRO3dCQUFuQzswQkFBQSxBQUNFO0FBREY7NkJBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBaEJDLEFBR1AsQUFTRSxBQUdFLEFBQ0UsQUFLUjtnQ0FBTyxjQUFBOzt3QkFBQTswQkFBQSxBQUFLO0FBQUw7QUFBQSxXQUFBLGtCQUFLLGNBQUE7O3dCQUFBOzBCQUFBLEFBQUk7QUFBSjtBQUFBLGtCQXJCSCxBQXFCRixBQUFLLEFBQUksQUFBSyxBQUNyQjtpQkF0QkYsQUFBVyxBQXNCRixBQUdWO0FBekJZLEFBQ1Q7QUEwQko7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7MkNBQU8sQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNDLGtCQUpQLEFBQ0UsQUFDRSxBQUVHLEFBQUssQUFJYjs7Ozs7Ozs7Ozs7O3VCQWxFeUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBQUF1QyxBOzttQkFBekQ7QTtpREFDQyxFQUFFLFdBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUhpQixBLEFBdUU1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hYmJhc2F0dGFyL0RvY3VtZW50cy9CbG9ja0RlZXBOZXQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/abbasattar/Documents/BlockDeepNet/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/abbasattar/Documents/BlockDeepNet/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zNmM3NDRkZjBmMGY4ZGM1MjJlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/M2UxMmY5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtXCI7XHJcblxyXG5jbGFzcyBDYW1wYWlnbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xyXG4gICAgcmV0dXJuIHsgY2FtcGFpZ25zIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXJDYW1wYWlnbnMoKSB7XHJcblxyXG4gICAgY29uc3QgYWRkcmVzcyA9IHRoaXMucHJvcHMuY2FtcGFpZ25zWzBdO1xyXG4gICAgY29uc3QgbmFtZSA9IHRoaXMucHJvcHMuY2FtcGFpZ25zWzFdO1xyXG4gICAgY29uc3QgZGVzYyA9IHRoaXMucHJvcHMuY2FtcGFpZ25zWzJdO1xyXG4gICAgY29uc3QgZG9uYXRpb24gPSB0aGlzLnByb3BzLmNhbXBhaWduc1szXTtcclxuICAgIGNvbnN0IG1pbmltdW0gPSB0aGlzLnByb3BzLmNhbXBhaWduc1s0XTtcclxuICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICBjb25zb2xlLmxvZyhhZGRyZXNzLCBuYW1lLCBkZXNjLCBtaW5pbXVtLCBkb25hdGlvbik7XHJcblxyXG4gICAgZm9yKHZhciBpID0gMDsgaTwgdGhpcy5wcm9wcy5jYW1wYWlnbnNbMF0ubGVuZ3RoOyBpKyspe1xyXG4gICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICBoZWFkZXI6IG5hbWVbaV0sXHJcbiAgICAgICAgZGVzY3JpcHRpb246IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250c2l6ZSA6IFwiMThweFwifX0+XHJcbiAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICA8ZGl2PkFkZHJlc3M6IHthZGRyZXNzW2ldfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+TWluaW11bToge21pbmltdW1baV19IHdlaTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+UmVxdWlyZWQgRG9uYXRpb246IHt3ZWIzLnV0aWxzLmZyb21XZWkoZG9uYXRpb25baV0sXCJldGhlclwiKX0gZXRoZXI8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIDxDb250cmlidXRlRm9ybSBhZGRyZXNzPXthZGRyZXNzW2ldfSAvPjxici8+XHJcbiAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7YWRkcmVzc1tpXX1gfT5cclxuICAgICAgICAgICAgICAgIDxhPlZpZXcgQ2FtcGFpZ248L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICksXHJcbiAgICAgICAgbWV0YTogKDxkaXY+PGk+e2Rlc2NbaV19PC9pPjwvZGl2PiksXHJcbiAgICAgICAgZmx1aWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBpdGVtcyA9IGFkZHJlc3MubWFwKChpdGVtKSA9PiB7XHJcbiAgICAvLyAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgaGVhZGVyOiBpdGVtLFxyXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uOiAoXHJcbiAgICAvLyAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke2l0ZW19YH0+XHJcbiAgICAvLyAgICAgICAgICAgPGE+VmlldyBDYW1wYWlnbjwvYT5cclxuICAgIC8vICAgICAgICAgPC9MaW5rPlxyXG4gICAgLy8gICAgICksXHJcbiAgICAvLyAgICAgZmx1aWQ6IHRydWUsXHJcbiAgICAvLyAgIH07XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj5Qcm9qZWN0czwvaDI+XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJDYW1wYWlnbnMoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7OztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBeEJBO0FBMEJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FBN0RBO0FBQ0E7QUFEQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9