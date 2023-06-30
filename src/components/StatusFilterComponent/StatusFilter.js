// Імпортуємо хук
import { useSelector } from 'react-redux';
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from 'redux/constants';
// Імпортуємо компонент
import { Button } from 'components/ButtonComponent/Button';

import { getStatusFilter } from 'redux/selectors';

import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(getStatusFilter);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
