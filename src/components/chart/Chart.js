import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...dataPointValues);

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
