'use client';

import React, { useState } from 'react';
import Button from '@/app/components/button';
import dynamic from 'next/dynamic';

const CompanyFormModal = dynamic(() => import('./company-from-modal'), {
  ssr: false,
});

function AddCompanyButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Add Company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}

export default AddCompanyButton;
