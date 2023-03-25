/**
 * @generated SignedSource<<c5257a33bdf4d25dc25ab521cf64ec41>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type BucketsQuery$variables = {};
export type BucketsQuery$data = {
  readonly ' $fragmentSpreads': FragmentRefs<'Buckets_query'>;
};
export type BucketsQuery = {
  response: BucketsQuery$data;
  variables: BucketsQuery$variables;
};

const node: ConcreteRequest = {
  fragment: {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: null,
    name: 'BucketsQuery',
    selections: [
      {
        args: null,
        kind: 'FragmentSpread',
        name: 'Buckets_query',
      },
    ],
    type: 'Query',
    abstractKey: null,
  },
  kind: 'Request',
  operation: {
    argumentDefinitions: [],
    kind: 'Operation',
    name: 'BucketsQuery',
    selections: [
      {
        alias: null,
        args: null,
        concreteType: 'ListedBucket',
        kind: 'LinkedField',
        name: 'buckets',
        plural: true,
        selections: [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'name',
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ],
  },
  params: {
    cacheID: '4d922ca0230b6b4389b6116ef959faf5',
    id: null,
    metadata: {},
    name: 'BucketsQuery',
    operationKind: 'query',
    text: 'query BucketsQuery {\n  ...Buckets_query\n}\n\nfragment Buckets_query on Query {\n  buckets {\n    name\n  }\n}\n',
  },
};

(node as any).hash = '33de14b961c90710bac2d64cb7a578e7';

export default node;
