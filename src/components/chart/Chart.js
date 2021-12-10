import ChartBar from './ChartBar';

const Chart = (props) => {
  const maximumValue = props.dataPoints
    .map((dataPoint) => dataPoint.value)
    .reduce((partial, sum) => partial + sum, 0);

  return (
    <div className="chart">
      {props.dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={maximumValue}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
