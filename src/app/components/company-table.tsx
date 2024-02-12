'use client';

import React from 'react';

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];

export interface CompanyTableProps {
  children: React.ReactNode;
}

export default function CompanyTable({ children }: CompanyTableProps) {
  // const { data } = useQuery({
  //   queryKey: ['companies'],
  //   queryFn: () => getCompanies(),
  //   staleTime: 10 * 1000,
  // });

  return (
    <div className="py-8 px-10 bg-gray-100">
      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="pb-5 text-sm font-light text-gray-900">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
