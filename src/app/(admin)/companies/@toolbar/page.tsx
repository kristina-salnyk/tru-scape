import React from 'react';
import Toolbar from '@/app/components/toolbar';
import AddCompanyButton from '@/app/components/add-company-button';
import SearchInput from '@/app/components/search-input';

function Page() {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput placeholder="Search companies" />
    </Toolbar>
  );
}

export default Page;
