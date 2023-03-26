/**
 * @generated SignedSource<<bb86480f601b1400c0adc0bd74c1fa53>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type ObjectsTable_bucket$data = {
  readonly name: string;
  readonly objects: ReadonlyArray<{
    readonly etag: string;
    readonly key: string;
    readonly lastModified: string;
    readonly size: number;
    readonly storageClass: string;
  }>;
  readonly ' $fragmentType': 'ObjectsTable_bucket';
};
export type ObjectsTable_bucket$key = {
  readonly ' $data'?: ObjectsTable_bucket$data;
  readonly ' $fragmentSpreads': FragmentRefs<'ObjectsTable_bucket'>;
};

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'ObjectsTable_bucket',
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
      concreteType: 'ListedBucketObject',
      kind: 'LinkedField',
      name: 'objects',
      plural: true,
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'key',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'etag',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'size',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'storageClass',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'lastModified',
          storageKey: null,
        },
      ],
      storageKey: null,
    },
  ],
  type: 'Bucket',
  abstractKey: null,
};

(node as any).hash = 'f4c8672994131f521606e2f9bb84c10f';

export default node;
