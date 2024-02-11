import React from 'react';
import Header from '@/app/components/header';
import Toolbar from '@/app/components/toolbar';
import AddCompanyButton from '@/app/components/add-company-button';
import CompanyTable from '@/app/components/company-table';
import SearchInput from '@/app/components/search-input';

function Page() {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput placeholder="Search companies" />
      </Toolbar>
      <CompanyTable />
    </>
  );
}

export default Page;
