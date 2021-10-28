import { FC, useCallback, useState } from 'react';
import { cn } from '@bem-react/classname';
import { cnUser } from '../User/User';
import { INITIAL_STATUSES } from './StatusDashboard.const';
import { StatusesDashboardForm } from './Form/StatusesDashboardForm';
import { Status } from '../Status/Status.types';
import { Status as StatusView } from '../Status/Status';

export const cnStatusesDashboard = cn('StatusesDashboard');

export const StatusesDashboard: FC = () => {
  const [statuses, setStatuses] = useState(INITIAL_STATUSES);

  const deleteStatusHandler = (id: string) => {
    setStatuses(prev => prev.filter(status => status.id !== id));
  };

  const formSubmitHandle = (data: Status) => {
    setStatuses(prev => [...prev, data]);
  }

  return (
    <div className={cnStatusesDashboard({ length: statuses.length })}>
      {statuses.map(status => (
        <StatusView key={status.id} status={status} onDelete={deleteStatusHandler}/>
      ))}
      <StatusesDashboardForm onSubmit={formSubmitHandle} />
    </div>
  )
}
