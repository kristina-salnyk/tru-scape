'use client';

import React from 'react';
import Promotion from '@/app/components/promotion';

export interface CompanyPromotionsProps {
  companyId: string;
}

export default function CompanyPromotions({
  companyId,
}: CompanyPromotionsProps) {
  const promotions = [
    {
      id: '1',
      title: 'Big Mac',
      description: 'Get 2 Big Macs for the price of 1',
      discount: 50,
      companyId: '1',
      companyTitle: 'McDonalds',
    },
    {
      id: '2',
      title: 'Air Max',
      description: 'Get 2 Air Max shoes for the price of 1',
      discount: 50,
      companyId: '2',
      companyTitle: 'Nike',
    },
    {
      id: '3',
      title: 'iPhone 12',
      description: 'Get 2 iPhone 12 for the price of 1',
      discount: 50,
      companyId: '3',
      companyTitle: 'Apple',
    },
    {
      id: '4',
      title: 'Billy',
      description: 'Get 2 Billy bookcases for the price of 1',
      discount: 50,
      companyId: '4',
      companyTitle: 'IKEA',
    },
  ];

  // const { data } = useQuery({
  //   queryKey: ['promotions', companyId],
  //   queryFn: () => getPromotions({ companyId }),
  //   staleTime: 10 * 1000,
  // });

  return (
    <div className="grid grid-cols-12 gap-5">
      {promotions.map((promotion) => (
        <div key={promotion.id} className="col-span-4">
          <Promotion promotion={promotion} />
        </div>
      ))}
    </div>
  );
}
