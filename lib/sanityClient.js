import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'rbt9uwmx',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skOeCNbbjObqdMapdlovJKZHNygarHJD9X6dYnkwOXuPLKtIcb8TPPyw83YReCUjuEAL2kxg2nTqrKurNZYS5pmzCA0JeaJsEhfdeAknTks0dKpfRtxQYbREkdWJMSJAzSXeJXRjvvyjqO5rmDTGlw5iRcNMfceYq2Pz1ebMp0Bd0wk6ON6k',
  useCdn: false,
})