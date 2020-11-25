"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../routes");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require("../components/ContributeForm");

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