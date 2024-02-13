export interface SummaryStats {
  promotions: number;
  categories: number;
  ['new-companies']: number;
  activeCompanies: number;
}

export interface SummarySales {
  id: string;
  companyId: string;
  companyTitle: string;
  sold: number;
  income: number;
}

export interface Country {
  id: string;
  title: string;
}

export interface Category {
  id: string;
  title: string;
}

export enum CompanyStatus {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface Company {
  id: string;
  title: string;
  description: string;
  status: CompanyStatus;
  joinedDate: string;
  hasPromotions: boolean;
  categoryId: string;
  categoryTitle: string;
  countryId: string;
  countryTitle: string;
  avatar?: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: number;
  companyId: string;
  companyTitle: string;
  avatar?: string;
}

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

const buildUrl = (...paths: string[]) => {
  return `https://${PROJECT_TOKEN}.mockapi.io/api/v1/${paths.join('/')}`;
};

const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};

export const getSummaryStats = (init?: RequestInit) => {
  // return sendRequest<SummaryStats>(buildUrl('summary-stats', '1'), init);
  const stats = {
    promotions: 10,
    categories: 4,
    ['new-companies']: 4,
    activeCompanies: 4,
  };
  return Promise.resolve(stats);
};

export const getSummarySales = (init?: RequestInit) => {
  // return sendRequest<SummarySales[]>(buildUrl('summary-sales'), init);
  const sales = [
    {
      id: '1',
      companyId: '1',
      companyTitle: 'McDonalds',
      sold: 100,
      income: 1000,
    },
    {
      id: '2',
      companyId: '2',
      companyTitle: 'Nike',
      sold: 200,
      income: 2000,
    },
    {
      id: '3',
      companyId: '3',
      companyTitle: 'Apple',
      sold: 300,
      income: 3000,
    },
    {
      id: '4',
      companyId: '4',
      companyTitle: 'IKEA',
      sold: 400,
      income: 4000,
    },
  ];
  return Promise.resolve(sales);
};

export const getCountries = (init?: RequestInit) => {
  // return sendRequest<Country[]>(buildUrl('countries'), init);
  const countries = [
    { id: '1', title: 'USA' },
    { id: '2', title: 'Canada' },
    { id: '3', title: 'Germany' },
    { id: '4', title: 'France' },
  ];
  return Promise.resolve(countries);
};

export const getCategories = (init?: RequestInit) => {
  // return sendRequest<Category[]>(buildUrl('categories'), init);
  const categories = [
    { id: '1', title: 'Food' },
    { id: '2', title: 'Clothing' },
    { id: '3', title: 'Electronics' },
    { id: '4', title: 'Furniture' },
  ];
  return Promise.resolve(categories);
};

export const getCompanies = (init?: RequestInit) => {
  // return sendRequest<Company[]>(buildUrl('companies'), init);
  const companies = [
    {
      id: '1',
      title: 'McDonalds',
      description: 'Fast food restaurant',
      status: CompanyStatus.Active,
      joinedDate: '2021-01-01',
      hasPromotions: true,
      categoryId: '1',
      categoryTitle: 'Food',
      countryId: '1',
      countryTitle: 'USA',
    },
    {
      id: '2',
      title: 'Nike',
      description: 'Sportswear company',
      status: CompanyStatus.Active,
      joinedDate: '2021-02-01',
      hasPromotions: true,
      categoryId: '2',
      categoryTitle: 'Clothing',
      countryId: '1',
      countryTitle: 'USA',
    },
    {
      id: '3',
      title: 'Apple',
      description: 'Technology company',
      status: CompanyStatus.Active,
      joinedDate: '2021-03-01',
      hasPromotions: true,
      categoryId: '3',
      categoryTitle: 'Electronics',
      countryId: '1',
      countryTitle: 'USA',
    },
    {
      id: '4',
      title: 'IKEA',
      description: 'Furniture company',
      status: CompanyStatus.Active,
      joinedDate: '2021-04-01',
      hasPromotions: true,
      categoryId: '4',
      categoryTitle: 'Furniture',
      countryId: '1',
      countryTitle: 'USA',
    },
  ];
  return Promise.resolve(companies);
};

export const getCompany = (id: string, init?: RequestInit) => {
  // return sendRequest<Company>(buildUrl('companies', id), init);
  const company = {
    id: '1',
    title: 'McDonalds',
    description: 'Fast food restaurant',
    status: CompanyStatus.Active,
    joinedDate: '2021-01-01',
    hasPromotions: true,
    categoryId: '1',
    categoryTitle: 'Food',
    countryId: '1',
    countryTitle: 'USA',
    avatar: '',
  };
  return Promise.resolve(company);
};

export const getPromotions = async (
  params: Record<string, string> = {},
  init?: RequestInit,
) => {
  // return sendRequest<Promotion[]>(
  //   `${buildUrl('promotions')}?${stringifyQueryParams(params)}`,
  //   init,
  // );
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
  return Promise.resolve(promotions);
};

export const createCompany = async (
  data: Omit<Company, 'id' | 'hasPromotions'>,
  init?: RequestInit,
) => {
  // return sendRequest<Company>(buildUrl('companies'), {
  //   ...init,
  //   method: 'POST',
  //   body: JSON.stringify(data),
  //   headers: {
  //     ...(init && init.headers),
  //     'content-type': 'application/json',
  //   },
  // });
  const company = {
    id: '5',
    hasPromotions: false,
    ...data,
  };
  return Promise.resolve(company);
};

export const createPromotion = async (
  data: Omit<Promotion, 'id'>,
  init?: RequestInit,
) => {
  // return sendRequest<Promotion>(buildUrl('promotions'), {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  //   headers: {
  //     ...(init && init.headers),
  //     'content-type': 'application/json',
  //   },
  // });
  const promotion = {
    id: '5',
    ...data,
  };
  return Promise.resolve(promotion);
};
