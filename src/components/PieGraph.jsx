import {Pie} from 'react-chartjs-2'

//required things for line graph
//import {Chart,CategoryScale,LinearScale,LineElement,PointElement,Title,Tooltip,Legend} from 'chart.js'

import {Chart,Tooltip,Legend,ArcElement} from 'chart.js'
import { pieChartData } from '../dummy-data/pie_dataset'

Chart.register(Tooltip,Legend,ArcElement)

function PieGraph() {
    const option={}
  return (
    <div>
      <Pie data={pieChartData} options={option}/>
    </div>
  )
}

export default PieGraph
