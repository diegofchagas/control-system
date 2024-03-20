
import { format, addMonths, startOfMonth, endOfMonth } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

export const MontButton = ({month}:{month:number}) => {

  const {changeStartDate,changeEndDate} = useContext(DataContext)

  const nameMonth = (n:number) => {
    const date = addMonths(new Date() , n)
    return format(date, 'MMMM', {locale:ptBR})
  }

  const setMounth = (n: number) => {
    const date = addMonths(new Date(), n);
    const firstDay = format(startOfMonth(date), 'yyyy-MM-dd');
    const lastDay = format(endOfMonth(date),'yyyy-MM-dd');
    changeStartDate(firstDay);
    changeEndDate(lastDay);
  }

  return (
    <button onClick={()=> setMounth(month)}>{nameMonth(month)}</button>
  )
}
