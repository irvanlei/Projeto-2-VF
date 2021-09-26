import GraphOne from '../../components/Graphs/GraphOne';
import GraphTwo from '../../components/Graphs/GraphTwo';

const Dashboard = () => {

  const graphOneData = [
    { label:'Zap', value:13000},
    { label:'BB', value:520},
    { label:'Itau', value:9000},
    { label:'Neon', value:7400}
  ]
  return (
    <>
      <div style={{backgroundColor: 'white', padding: '10px', borderRadius: '5px'}}>
        <GraphOne 
          title='Contas abertas'
          label='Quantidade de contas abertas'
          dataSet={graphOneData}
        />
        <hr />
        <GraphTwo />
      </div>
    </>
  )
}

export default Dashboard;


