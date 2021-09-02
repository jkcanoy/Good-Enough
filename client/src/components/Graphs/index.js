import React, {Component, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME, QUERY_GOALS } from '../../utils/queries';


import {CircularGridLines, ContinuousSizeLegend, RadialChart,  DiscreteColorLegend} from 'react-vis';
import 'react-vis/dist/style.css';

const RenderGraph = () => {
  const { email: userParam } = useParams();
  const { loading, error, data } = useQuery(QUERY_GOALS, {
    variables: { email: userParam }
  });
  const goals = data?.goals || [];

  let arr=[];
  let lengthArr=[];

  goals.forEach( (goal) => {
    let i = 0
    let length = Object.keys(goal.metrics).length
    let label = goal.description

    let dataPoint ={
      angle: 1,
      id: i, 
      radius: length,
      label: label
    }
    arr.push(dataPoint);
    lengthArr.push(length);
    i++
    return arr
  })

  const style={
    width: '40%'
  }

  const maxRadius = Math.max.apply(Math, lengthArr) + 10

  console.log(arr)
  console.log(lengthArr)
  console.log(typeof lengthArr[0])
  console.log(maxRadius)
  
  const [ hoveredSection, setHoveredSection]= useState(false);
  const [ graphRadius, setGraphRadius] = useState(maxRadius);

  function mapData(hoveredSection) {
    return arr.map((row, index) => {
      return {
        ...row,
        innerRadius: hoveredSection === index + 1 ? row.radius - 1 : null,
        opacity: !hoveredSection || hoveredSection === index + 1 ? 1 : 0.6
      };
    });
  }

  return (
    <>
    <Row>
    <Col sm>  
      <DiscreteColorLegend items={arr.map(d => d.label)} />
    </Col>
    <Col style={style}>
      <RadialChart
          animation
          radiusDomain={[0, graphRadius]}
          data={mapData(hoveredSection)}
          labelsAboveChildren
          onValueMouseOver={row => setHoveredSection(row.id)}
          onMouseLeave={() => setHoveredSection(false)}
          width={200}
          height={200}
        >
          <CircularGridLines tickTotal={maxRadius} rRange={[0, 150]} />
      </RadialChart>
      </Col>
      </Row>
    </>
  )
}

export default RenderGraph;

