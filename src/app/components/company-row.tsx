import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import StatusLabel from '@/app/components/status-label';
import { CompanyStatus } from '@/lib/api';

export interface CompanyRowProps {
  id: string;
  category: string;
  company: string;
  status: CompanyStatus;
  promotion: boolean;
  country: string;
  joinedDate: string;
}

export default function CompanyRow({
  id,
  category,
  company,
  status,
  promotion,
  country,
  joinedDate,
}: CompanyRowProps) {
  return (
    <tr className="h-14 text-center text-gray-900 bg-white">
      <td className="text-xs font-medium text-blue-700 rounded-l border-l-4 border-blue-700">
        {category}
      </td>
      <td>
        <Link href={`/companies/${id}`}>{company}</Link>
      </td>
      <td>
        <StatusLabel status={status} />
      </td>
      <td>
        <div className="inline-flex items-center gap-1">
          <Image
            width={16}
            height={16}
            src={`/icons/${promotion ? 'check' : 'x-mark'}.svg`}
            alt="promotion icon"
          />
          <span
            className={clsx(
              'text-sm font-medium',
              promotion ? 'text-green-700' : 'text-red-700',
            )}
          >
            {promotion ? 'Yes' : 'No'}
          </span>
        </div>
      </td>
      <td>{company}</td>
      <td className="rounded-r">
        {new Date(joinedDate).toLocaleDateString('uk-UA')}
      </td>
    </tr>
  );
}
