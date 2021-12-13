import { DatoCmsService } from './dato-cms.service';
import { GraphQLClient } from 'graphql-request';

export const contentService = new DatoCmsService(
  new GraphQLClient(process.env.NEXT_PUBLIC_DATOCMS_API_URL as string, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_KEY}`,
    },
  }),
);
