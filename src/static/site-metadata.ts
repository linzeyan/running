interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://linzeyan.github.io',
  logo: 'https://avatars.githubusercontent.com/u/28521870?v=4',
  description: 'Personal running',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Home',
      url: 'https://linzeyan.github.io',
    },
    {
      name: 'Activities',
      url: 'https://linzeyan.github.io/activities',
    },
    {
      name: 'Running',
      url: 'https://linzeyan.github.io/running',
    },
  ],
};

export default data;
