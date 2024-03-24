import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { DataSalesProps } from '../../context/DataContext'

type DataChartSalesProps = {
  data: DataSalesProps[]
}

type SaleDayProps={
  data:string;
  pago:number;
  processando:number;
  falha:number
}


const transformDataCharts = (data:DataSalesProps[]) : SaleDayProps[] => {
  const days = data.reduce((acc: { [key: string]: SaleDayProps }, item) => {
    const day = item.data.split(" ")[0];
    
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[day][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(days).map((day) => ({
    ...day,
    data: day.data.substring(5),
  }));
}

export const SalesCharts = ({data}:DataChartSalesProps) => {
  const transformedData = transformDataCharts(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
    <LineChart data={transformedData}>
      <XAxis dataKey="data" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pago" stroke="#19A6EF" strokeWidth={3} />
      <Line
        type="monotone"
        dataKey="processando"
        stroke="#214889"
        strokeWidth={3}
      />
      <Line
        type="monotone"
        dataKey="falha"
        stroke="#000000"
        strokeWidth={3}
      />
    </LineChart>
  </ResponsiveContainer>
  )
}
