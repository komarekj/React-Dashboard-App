import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DashboardCard from './DashboardCard';
import {
  XYPlot,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';

import 'react-vis/dist/style.css';

const DashboardSyncGraph = ({ data }) => {
  const graphWrapRef = useRef();
  const [graphWidth, setGraphWidth] = useState(0);

  useEffect(() => {
    if (graphWrapRef.current) {
      const width = graphWrapRef.current.offsetWidth;
      setGraphWidth(width);
    }
  }, [graphWrapRef]);

  const invoiceSuccessData = data.map(item => ({
    x: moment(item.day).format('M/D'),
    y: item.invoice,
  }));

  const invoiceFailData = data.map(item => ({
    x: moment(item.day).format('M/D'),
    y: item.total - item.invoice,
  }));

  const spreadsheetSuccessData = data.map(item => ({
    x: moment(item.day).format('M/D'),
    y: item.spreadsheet,
  }));

  const spreadsheetFailData = data.map(item => ({
    x: moment(item.day).format('M/D'),
    y: item.total - item.spreadsheet,
  }));

  return (
    <DashboardCard title="Order Sync Status">
      <div ref={graphWrapRef}>
        <XYPlot height={380} width={graphWidth} xType="ordinal">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis tickLabelAngle={35} tickSize={25} tickPadding={15} />
          <YAxis />
          <VerticalBarSeries
            data={invoiceSuccessData}
            cluster="invoice"
            color="#f44336"
          />
          <VerticalBarSeries
            data={invoiceFailData}
            cluster="invoice"
            color="#773737"
          />
          <VerticalBarSeries
            data={spreadsheetSuccessData}
            cluster="spreadsheet"
            color="#ad382f"
          />
          <VerticalBarSeries
            data={spreadsheetFailData}
            cluster="spreadsheet"
            color="#773737"
          />
        </XYPlot>
      </div>
    </DashboardCard>
  );
};

DashboardSyncGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default DashboardSyncGraph;
