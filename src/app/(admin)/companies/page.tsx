import React from 'react';
import CompanyTable from '@/app/components/company-table';
import CompanyRow from '@/app/components/company-row';
import { CompanyStatus } from '@/lib/api';

function Page() {
  return (
    <CompanyTable>
      <CompanyRow
        id="1"
        category="Products"
        company="Costco"
        status={CompanyStatus.Pending}
        promotion={true}
        country="USA"
        joinedDate="02.19.2023"
      />
    </CompanyTable>
  );
}

export default Page;
