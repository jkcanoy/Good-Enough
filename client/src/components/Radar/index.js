import React, {Component} from 'react';

import { CircularGridLines, RadarChart } from 'react-vis';

const DATA = [
  {
    Goal1: 7,
    Goal2: 15,
    Goal3: 8,
    Goal4: 12,
    Goal5: 30
  }
];

const DOMAIN = [
  {name: 'Goal1', domain: [0, 40]},
  {name: 'Goal2', domain: [0, 40]},
  {name: 'Goal3', domain: [0, 40]},
  {name: 'Goal4', domain: [0, 40]},
  {name: 'Goal5', domain: [0, 40]}
];

function generateData() {
  return [
    Object.keys(DATA[0]).reduce((acc, key) => {
      acc[key] = DATA[0][key] + 5 * (Math.random() - 0.5);
      return acc;
    }, {})
  ];
}

export default class AnimatedRadar extends Component {
  state = {
    data: DATA
  };

  render() {
    const {data} = this.state;

    return (
      <div className="centered-and-flexed">
        <RadarChart
          animation
          data={data}
          domains={DOMAIN}
          style={{
            polygons: {
              fillOpacity: 0,
              strokeWidth: 3
            },
            axes: {
              text: {
                opacity: 1
              }
            },
            labels: {
              textAnchor: 'middle'
            }
          }}
          margin={{
            left: 50,
            top: 50,
            bottom: 50,
            right: 50
          }}
          tickFormat={t => ''}
          width={475}
          height={475}
        >
          <CircularGridLines
            tickValues={[...new Array(10)].map((v, i) => i / 10 - 1)}
          />
        </RadarChart>
        
      </div>
    );
  }
}