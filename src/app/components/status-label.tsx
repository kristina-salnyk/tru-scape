import React from 'react';
import clsx from 'clsx';
import { CompanyStatus } from '@/lib/api';

export enum Status {
  Active = 'active',
  NotActive = 'not-active',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  status: CompanyStatus;
  disabled?: boolean;
  styled?: boolean;
}

const labelByStatus = {
  [CompanyStatus.Active]: 'Active',
  [CompanyStatus.NotActive]: 'Not Active',
  [CompanyStatus.Pending]: 'Pending',
  [CompanyStatus.Suspended]: 'Suspended',
};

function StatusLabel({ status, disabled, styled = true }: StatusLabelProps) {
  const label = labelByStatus[status];
  if (!styled) return <>{label}</>;

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 py-1 px-3.5 rounded-3xl text-sm font-medium',
        status === CompanyStatus.Active && 'text-green-700 bg-green-100',
        status === CompanyStatus.NotActive && 'text-red-700 bg-red-100',
        status === CompanyStatus.Pending && 'text-orange-700 bg-orange-100',
        status === CompanyStatus.Suspended && 'text-blue-700 bg-blue-100',
        { ['opacity-75 cursor-not-allowed']: disabled },
      )}
    >
      <div className="w-1 h-1 nr-2 rounded-full bg-current" />
      {label}
    </span>
  );
}

export default StatusLabel;
