'use client';

import React from 'react';
import CompanyRow from '@/app/components/company-row';
import { CompanyStatus } from '@/lib/api';

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];

export default function CompanyTable() {
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
        <tbody>
          {[
            {
              id: '1',
              title: 'EPAM',
              description: 'The dynamic outsource company',
              status: CompanyStatus.Active,
              joinedDate: '2021-07-01',
              hasPromotions: true,
              categoryId: '1',
              categoryTitle: 'Outsource',
              countryId: '1',
              countryTitle: 'Ukraine',
            },
          ].map((company) => (
            <CompanyRow key={company.id} company={company} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
