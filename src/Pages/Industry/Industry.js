import React from 'react';
import './Industry.css';
import { ComposableMap, Geographies, Geography, Annotation } from 'react-simple-maps';

// const geoUrl = '/maps/110m.json'; // Local path to your downloaded file
const geoUrl = 'https://unpkg.com/world-atlas@1.1.4/world/110m.json'; // Local path to your downloaded file

const annotations = [
  { coordinates: [-100, 40], label: '$20' }, // Adjust coordinates as needed
  { coordinates: [0, 0], label: '$10' },    // Adjust coordinates as needed
  { coordinates: [100, -30], label: '$5' }   // Adjust coordinates as needed
];

const Industry = () => {
  return (
    <div className='industry'>
      <div className='head'>
        <h1>Start Selling In A</h1>
        <h1 className='head2'>Rapidly Growing Industry</h1>
      </div>
      <div className="map">
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill='#DDD'
                />
              ))
            }
          </Geographies>
          {annotations.map((annotation, index) => (
            <Annotation
              key={index}
              subject={annotation.coordinates}
              dx={0}
              dy={0}
              connectorProps={{
                stroke: '#FF5733',
                strokeWidth: 2,
                strokeLinecap: 'round'
              }}
            >
              <text
                textAnchor="middle"
                alignmentBaseline="middle"
                fill="#FF5733"
              >
                {annotation.label}
              </text>
            </Annotation>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
}

export default Industry;
