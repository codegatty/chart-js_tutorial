import {Bar} from 'react-chartjs-2'

//required things for line graph
//import {Chart,CategoryScale,LinearScale,LineElement,PointElement,Title,Tooltip,Legend} from 'chart.js'

import {Chart,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js'
import { lineChartData } from '../dummy-data/line_dataset'
import { barChartData } from '../dummy-data/bar_dataset'

Chart.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend)

function BarGraph() {
    const option={}
  return (
    <div>
      <Bar data={barChartData} options={option}/>
    </div>
  )
}

export default BarGraph
