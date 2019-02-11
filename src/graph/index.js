import React from 'react';
import './Graph.css';
import { reverse } from 'lodash';

module.exports = DonutChart;

const DonutChart = React.createClass({
  propTypes: {
    valuelabel: React.PropTypes.string, // label for the chart
    size: React.PropTypes.number, // diameter of chart
    data: React.PropTypes.array, // array of data
    strokewidth: React.PropTypes.number, // width of chart line
    donutchartTextValStyle: React.PropTypes.object,
    donutchartTextLabelStyle: React.PropTypes.object,
    donutchartTextStyle: React.PropTypes.object
  },
  getDefaultProps() {
    return {
      data: [],
      valuelabel: 'ValueLabel',
      size: 150,
      strokewidth: 20
    };
  },
  render() {
    let size = this.props.size;
    const offset = 0 * (365 / 100);
    const halfsize = size * 0.5;
    const radius = halfsize - this.props.strokewidth * 0.5;
    const circumference = 2 * Math.PI * radius;
    const strokeval = (this.props.value * circumference) / 100;
    const dashval = strokeval + ' ' + circumference;

    const trackstyle = { strokeWidth: this.props.strokewidth };
    let indicatorstyle = {
      strokeWidth: this.props.strokewidth,
      strokeDasharray: dashval
    };
    this.props.stroke ? (indicatorstyle.stroke = this.props.stroke) : null;
    let rotateval = `rotate(${-90 + offset} ` + halfsize + ',' + halfsize + ')';
    let data = [].concat(this.props.data);

    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        className='donutchart'
      >
        <circle
          r={radius}
          cx={halfsize}
          cy={halfsize}
          transform={rotateval}
          style={trackstyle}
          className='donutchart-track'
        />

        {reverse(data || []).map((obj, index) => {
          let size2 = size;
          let halfsize = size2 * 0.5;
          let radius = halfsize - this.props.strokewidth * 0.5;
          obj.value = parseFloat(obj.value);
          obj.offset = parseFloat(obj.offset || 0);
          let offset = 0;
          let strokeval = ((obj.value + obj.offset) * circumference) / 100;
          let dashval = strokeval + ' ' + circumference;
          let indicatorstyle = {
            strokeWidth: this.props.strokewidth,
            strokeDasharray: dashval
          };
          obj.stroke
            ? (indicatorstyle.stroke = obj.stroke)
            : this.props.stroke
            ? (indicatorstyle.stroke = this.props.stroke)
            : null;
          let rotateval =
            `rotate(${-90 + offset} ` + halfsize + ',' + halfsize + ')';
          return (
            <circle
              key={index}
              r={radius}
              cx={halfsize}
              cy={halfsize}
              transform={rotateval}
              style={indicatorstyle}
              className='donutchart-indicator'
            />
          );
        })}
        <text
          className='donutchart-text'
          x={halfsize}
          y={halfsize}
          style={Object.assign(this.props.donutchartTextStyle || {}, {
            textAnchor: 'middle'
          })}
        >
          <tspan
            className='donutchart-text-val '
            style={this.props.donutchartTextValStyle || {}}
          >
            {this.props.tickets}/100
          </tspan>
          <tspan
            className='donutchart-text-label'
            style={this.props.donutchartTextLabelStyle || {}}
            x={halfsize}
            y={halfsize + 10}
          >
            {this.props.valuelabel}
          </tspan>
        </text>
      </svg>
    );
  }
});
