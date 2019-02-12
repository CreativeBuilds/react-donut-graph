function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { reverse } from 'lodash';

var DonutChart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DonutChart, _React$Component);

  function DonutChart() {
    _classCallCheck(this, DonutChart);

    return _possibleConstructorReturn(this, _getPrototypeOf(DonutChart).apply(this, arguments));
  }

  _createClass(DonutChart, [{
    key: "render",
    value: function render() {
      var _this = this;

      var size = this.props.size;
      var offset = 0 * (365 / 100);
      var halfsize = size * 0.5;
      var radius = halfsize - this.props.strokewidth * 0.5;
      var circumference = 2 * Math.PI * radius;
      var strokeval = this.props.value * circumference / 100;
      var dashval = strokeval + ' ' + circumference;
      var trackstyle = {
        strokeWidth: this.props.strokewidth
      };
      var indicatorstyle = {
        strokeWidth: this.props.strokewidth,
        strokeDasharray: dashval
      };
      this.props.stroke ? indicatorstyle.stroke = this.props.stroke : null;
      var rotateval = "rotate(".concat(-90 + offset, " ") + halfsize + ',' + halfsize + ')';
      var data = [].concat(this.props.data);
      return React.createElement("svg", {
        width: this.props.size,
        height: this.props.size,
        className: "donutchart"
      }, React.createElement("circle", {
        r: radius,
        cx: halfsize,
        cy: halfsize,
        transform: rotateval,
        style: trackstyle,
        className: "donutchart-track"
      }), reverse(data || []).map(function (obj, index) {
        var size2 = size;
        var halfsize = size2 * 0.5;
        var radius = halfsize - _this.props.strokewidth * 0.5;
        obj.value = parseFloat(obj.value);
        obj.offset = parseFloat(obj.offset || 0);
        var offset = 0;
        var strokeval = (obj.value + obj.offset) * circumference / 100;
        var dashval = strokeval + ' ' + circumference;
        var indicatorstyle = {
          strokeWidth: _this.props.strokewidth,
          strokeDasharray: dashval
        };
        obj.stroke ? indicatorstyle.stroke = obj.stroke : _this.props.stroke ? indicatorstyle.stroke = _this.props.stroke : null;
        var rotateval = "rotate(".concat(-90 + offset, " ") + halfsize + ',' + halfsize + ')';
        return React.createElement("circle", {
          key: index,
          r: radius,
          cx: halfsize,
          cy: halfsize,
          transform: rotateval,
          style: indicatorstyle,
          className: "donutchart-indicator"
        });
      }), React.createElement("text", {
        className: "donutchart-text",
        x: halfsize,
        y: halfsize,
        style: Object.assign(this.props.donutchartTextStyle || {}, {
          textAnchor: 'middle'
        })
      }, React.createElement("tspan", {
        className: "donutchart-text-val ",
        style: this.props.donutchartTextValStyle || {}
      }, this.props.text), React.createElement("tspan", {
        className: "donutchart-text-label",
        style: this.props.donutchartTextLabelStyle || {},
        x: halfsize,
        y: halfsize + 10
      }, this.props.valuelabel)));
    }
  }]);

  return DonutChart;
}(React.Component);

_defineProperty(DonutChart, "propTypes", {
  valuelabel: PropTypes.string,
  // label for the chart
  size: PropTypes.number,
  // diameter of chart
  data: PropTypes.array,
  // array of data
  text: PropTypes.string,
  // Text inside the chart
  strokewidth: PropTypes.number,
  // width of chart line
  donutchartTextValStyle: PropTypes.object,
  donutchartTextLabelStyle: PropTypes.object,
  donutchartTextStyle: PropTypes.object
});

DonutChart.defaultProps = {
  data: [],
  valuelabel: 'ValueLabel',
  size: 150,
  strokewidth: 20
};
export default DonutChart;