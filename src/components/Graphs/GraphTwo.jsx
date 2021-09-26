import {Line} from 'react-chartjs-2';

const GraphTwo = () => {
  const data = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12],
    datasets: [
      {
        label: 'Quantidade de transações',
        data: [
          24, 13, 52, 10,
          34, 3, 35, 9,
          44, 23, 15, 7

        ],
        fill: false,
        backgroundColor: [
          'rgba(120, 0, 50, 1)',
        ],
        borderColor: [
          'rgba(120, 0, 50, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    indexAxis: 'x',
    maintainAspectRatio: false,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <>
      <div style={{backgroundColor: 'white', padding: '10px', borderRadius: '5px'}}>
        <Line
          data={data}
          height={300}
          options={options}
        />
      </div>
    </>
  )
}

export default GraphTwo;