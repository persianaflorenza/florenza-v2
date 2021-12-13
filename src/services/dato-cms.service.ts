import { DocumentNode } from 'graphql';
import { GraphQLClient } from 'graphql-request';

interface Props<Vars> {
  query: string | DocumentNode;
  variables?: Vars;
  preview?: boolean;
}

export class DatoCmsService {
  constructor(private graphQlClient: GraphQLClient) {}

  query<T, Vars extends Record<string, unknown>>({ query, variables }: Props<Vars>): Promise<T> {
    return this.graphQlClient.request(query, variables);
  }
}
