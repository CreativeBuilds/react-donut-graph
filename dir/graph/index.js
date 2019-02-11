import React from 'react';
import './Graph.css';
import { reverse } from 'lodash';
var DonutChart = React.createClass({
  displayName: "DonutChart",
  propTypes: {
    valuelabel: React.PropTypes.string,
    // label for the chart
    size: React.PropTypes.number,
    // diameter of chart
    data: React.PropTypes.array,
    // array of data
    text: React.PropTypes.string,
    // Text inside the chart
    strokewidth: React.PropTypes.number,
    // width of chart line
    donutchartTextValStyle: React.PropTypes.object,
    donutchartTextLabelStyle: React.PropTypes.object,
    donutchartTextStyle: React.PropTypes.object
  },
  getDefaultProps: function getDefaultProps() {
    return {
      data: [],
      valuelabel: 'ValueLabel',
      size: 150,
      strokewidth: 20
    };
  },
  render: function render() {
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
});
export default DonutChart;