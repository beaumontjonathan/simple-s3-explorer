/**
 * @generated SignedSource<<f6d52487f819ab492616ff3581d14925>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type BucketsQuery$variables = {
  profileName: string;
};
export type BucketsQuery$data = {
  readonly ' $fragmentSpreads': FragmentRefs<'BucketsTable_query'>;
};
export type BucketsQuery = {
  response: BucketsQuery$data;
  variables: BucketsQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
    {
      defaultValue: null,
      kind: 'LocalArgument',
      name: 'profileName',
    },
  ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'BucketsQuery',
      selections: [
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'BucketsTable_query',
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'BucketsQuery',
      selections: [
        {
          alias: null,
          args: [
            {
              kind: 'Variable',
              name: 'name',
              variableName: 'profileName',
            },
          ],
          concreteType: 'Profile',
          kind: 'LinkedField',
          name: 'profile',
          plural: false,
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
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'createdAt',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '1075e6cdb3cb34c9d024a9da72fa0b6c',
      id: null,
      metadata: {},
      name: 'BucketsQuery',
      operationKind: 'query',
      text: 'query BucketsQuery(\n  $profileName: String!\n) {\n  ...BucketsTable_query\n}\n\nfragment BucketsTable_query on Query {\n  profile(name: $profileName) {\n    buckets {\n      name\n      createdAt\n    }\n  }\n}\n',
    },
  };
})();

(node as any).hash = 'cb57b8ab3c5047e467fc296ce2a0154d';

export default node;
