# React Donut Graph
### A simple donut graph for React.JS.

------------

![Quickly change attributes of the graph](/examples/example.gif)

------------

Install `npm i donut-graph --save` Or Yarn `Yarn add donut-graph`

Use `import DonutGraph from 'graph-donut`

```javascript
let PropTypes = {
	data: React.PropTypes.array, // array of objects to use for data points | Default []
	valuelabel: React.PropTypes.string, // label for the chart  | Default ('ValueLabel')
	text: React.PropTypes.string, // text inside the chart | Default ('')
	size: React.PropTypes.number, // diameter of chart | Default (150)
	strokewidth: React.PropTypes.number, // width of chart line | Default (20)
	donutchartTextValStyle: React.PropTypes.object, //React CSS Object for Text Value | Default ({})
	donutchartTextLabelStyle: React.PropTypes.object, //React CSS Object for Text Label | Default ({})
	donutchartTextStyle: React.PropTypes.object //React CSS Object for Text | Default ({})
}
```

------------

## Example Usage
```javascript
import DonutGraph from 'graph-donut';
import React from 'react';

let data = [
	{
		"value": 10, // number out of 100
		"stroke": "blue",
		"offset": 0
	}
]

React.render(<DonutGraph data={data} valuelabel={"TICKETS ENTERED"} text={`${10}/100`} />, document.getElementById('main'))
```

