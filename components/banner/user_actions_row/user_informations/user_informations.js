"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInformations = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui/");

var _avatar = require("../../../commons/avatar/avatar");

var _column = require("../../../commons/column/column");

var _user_informations_styles = require("./user_informations_styles");

var _contexts = require("../../../../utils/context/contexts");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _reactJss.createUseStyles)(_user_informations_styles.styles);

var UserInformationsComponent = function UserInformationsComponent() {
  var _data$basics, _data$basics2, _data$basics3;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data;

  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_avatar.Avatar, {
    src: (_data$basics = data.basics) === null || _data$basics === void 0 ? void 0 : _data$basics.picture
  }), _react.default.createElement(_column.Column, {
    customClasses: {
      container: classes.textColumn
    }
  }, _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.name
    },
    variant: "h3",
    component: "h3"
  }, (_data$basics2 = data.basics) === null || _data$basics2 === void 0 ? void 0 : _data$basics2.name), _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.description
    },
    variant: "h4",
    component: "h4"
  }, (_data$basics3 = data.basics) === null || _data$basics3 === void 0 ? void 0 : _data$basics3.label)));
};

var UserInformations = UserInformationsComponent;
exports.UserInformations = UserInformations;