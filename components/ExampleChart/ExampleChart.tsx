import React from 'react';

import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineMarkSeries,
    AreaSeries
  } from 'react-vis';
  
  export default function AreaChartElevated() {
    return (
      <XYPlot width={200} height={150}>
        <XAxis/>
        <YAxis/>
        <AreaSeries
          className="area-elevated-series-1"
          color="#79c7e3"
          data={[
            {x: 1, y: 10, y0: 1},
            {x: 2, y: 25, y0: 5},
            {x: 3, y: 15, y0: 3}
          ]}
        />
        <AreaSeries
          className="area-elevated-series-2"
          color="#12939a"
          data={[
            {x: 1, y: 5, y0: 6},
            {x: 2, y: 20, y0: 11},
            {x: 3, y: 10, y0: 9}
          ]}
        />
      </XYPlot>
    );
  }