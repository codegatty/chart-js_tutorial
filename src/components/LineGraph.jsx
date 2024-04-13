import {Line} from 'react-chartjs-2'
import {Chart,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js'
import { lineChartData } from '../dummy-data/line_dataset'

Chart.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend)
function LineGraph() {
    const options={
      responsive: true,
      plugins:{
        legend:{
          position:"bottom"
        },
        title:{
          display:true,
          text:"checking use of options   "
        }
      }
    }
  return (
    <div>
      <Line data={lineChartData} options={options}/>
    </div>
  )
}

export default LineGraph
