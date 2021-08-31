import React, {Component} from 'react';

import {CircularGridLines, RadialChart} from 'react-vis';
import 'react-vis/dist/style.css';

const DATA = [
  {
    angle: 1,
    id: 1,
    radius: 10
  },
  {
    angle: 2,
    label: 'Super Custom label',
    subLabel: 'With annotation',
    id: 2,
    radius: 20
  },
  {
    angle: 5,
    id: 3,
    radius: 5,
    label: 'Alt Label'
  },
  {
    angle: 3,
    id: 4,
    radius: 14
  },
  {
    angle: 5,
    id: 5,
    radius: 12,
    subLabel: 'Sub Label only'
  }
];

function mapData(hoveredSection) {
  return DATA.map((row, index) => {
    return {
      ...row,
      innerRadius: hoveredSection === index + 1 ? row.radius - 1 : null,
      opacity: !hoveredSection || hoveredSection === index + 1 ? 1 : 0.6
    };
  });
}

export default class Graphs extends Component {
  state = {
    hoveredSection: false
  };

  render() {
    const {hoveredSection} = this.state;
    return (
      <RadialChart
        animation
        showLabels
        radiusDomain={[0, 20]}
        data={mapData(hoveredSection)}
        labelsAboveChildren
        onValueMouseOver={row => this.setState({hoveredSection: row.id})}
        onMouseLeave={() => this.setState({hoveredSection: false})}
        width={600}
        height={300}
      >
        <CircularGridLines tickTotal={20} rRange={[0, 150]} />
      </RadialChart>
    );
  }
}