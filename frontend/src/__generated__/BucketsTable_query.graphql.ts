/**
 * @generated SignedSource<<4febdd122823862c66f6f77af1f4f01b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type BucketsTable_query$data = {
  readonly buckets: ReadonlyArray<{
    readonly createdAt: string;
    readonly name: string;
  }>;
  readonly ' $fragmentType': 'BucketsTable_query';
};
export type BucketsTable_query$key = {
  readonly ' $data'?: BucketsTable_query$data;
  readonly ' $fragmentSpreads': FragmentRefs<'BucketsTable_query'>;
};

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'BucketsTable_query',
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
  type: 'Query',
  abstractKey: null,
};

(node as any).hash = 'fc684f4e0bbd33e225a286ea42efbe46';

export default node;
