import React, {Component, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { ADD_METRIC } from '../../utils/mutations';

import {CircularGridLines, RadialChart} from 'react-vis';
import 'react-vis/dist/style.css';

const RenderGraph = (props) => {

  const { email: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { email: userParam},
  });

  const user = data?.me.goals || data?.user.goals || {};

  const [ hoveredSection, setHoveredSection]= useState(false);


  
  // console.log('User: ' + user)

  let DATA1= [user]
  let DATA2 = []

  // console.log("data1: " + DATA1)

  // createGoalArray(DATA1)

  // function createGoalArray(array) {
  //   array.map((goal) => {
    
      
    
  //   })
  // }

  // createData(user.goals)
  function createData(array) {
    array.forEach((goal) => {
      let i=0
      const metricLength = goal.metrics.length

      const dataPoint = {
        angle: 1,
        id: i, 
        radius: metricLength
      }

      i++

      DATA2.push(dataPoint);

      return DATA2;
    }
  )
  // console.log(DATA2)
  }


  function mapData(hoveredSection) {
    return DATA2.map((row, index) => {
      return {
        ...row,
        innerRadius: hoveredSection === index + 1 ? row.radius - 1 : null,
        opacity: !hoveredSection || hoveredSection === index + 1 ? 1 : 0.6
      };
    });
  }

  return (

    <RadialChart
        animation
        showLabels
        radiusDomain={[0, 20]}
        data={mapData(hoveredSection)}
        labelsAboveChildren
        onValueMouseOver={row => setHoveredSection(row.id)}
        onMouseLeave={() => setHoveredSection(false)}
        width={600}
        height={300}
      >
        <CircularGridLines tickTotal={20} rRange={[0, 150]} />
      </RadialChart>

  )
}

export default RenderGraph;

// const DATA1 = [
//   {
//     angle: 1,
//     id: 1,
//     radius: 10
//   },
//   {
//     angle: 2,
//     label: 'Super Custom label',
//     subLabel: 'With annotation',
//     id: 2,
//     radius: 20
//   },
//   {
//     angle: 5,
//     id: 3,
//     radius: 5,
//     label: 'Alt Label'
//   },
//   {
//     angle: 3,
//     id: 4,
//     radius: 14
//   },
//   {
//     angle: 5,
//     id: 5,
//     radius: 12,
//     subLabel: 'Sub Label only'
//   }
// ];

// function mapData(hoveredSection) {
//   return DATA1.map((row, index) => {
//     return {
//       ...row,
//       innerRadius: hoveredSection === index + 1 ? row.radius - 1 : null,
//       opacity: !hoveredSection || hoveredSection === index + 1 ? 1 : 0.6
//     };
//   });
// }

// export default class Graphs extends Component {
//   state = {
//     hoveredSection: false
//   };

//   render() {
//     const {hoveredSection} = this.state;
//     return (
//       <RadialChart
//         animation
//         showLabels
//         radiusDomain={[0, 20]}
//         data={mapData(hoveredSection)}
//         labelsAboveChildren
//         onValueMouseOver={row => this.setState({hoveredSection: row.id})}
//         onMouseLeave={() => this.setState({hoveredSection: false})}
//         width={600}
//         height={300}
//       >
//         <CircularGridLines tickTotal={20} rRange={[0, 150]} />
//       </RadialChart>
//     );
//   }
// }
