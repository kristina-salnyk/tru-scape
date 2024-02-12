'use client';

import React, { useEffect } from 'react';
import { notFound } from 'next/navigation';
import CompanyInfo from '@/app/components/company-info';
import CompanyPromotions from '@/app/components/company-promotions';

export interface PageProps {
  params: { id: string };
}

// export function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }];
// }

function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);

  return (
    <div className="py-6 px-10 grid grid-cols-12 gap-5">
      <div className="col-span-3">
        <CompanyInfo companyId={params.id} />
      </div>
      <div className="col-span-9">
        <CompanyPromotions companyId={params.id} />
      </div>
    </div>
  );
}

export default Page;
