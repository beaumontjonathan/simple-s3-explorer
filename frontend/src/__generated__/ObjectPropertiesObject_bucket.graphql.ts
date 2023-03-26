/**
 * @generated SignedSource<<76ab2e197b054d580df66c4e7ad1b23d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type ObjectPropertiesObject_bucket$data = {
  readonly object: {
    readonly etag: string;
    readonly key: string;
    readonly lastModified: string;
    readonly size: number;
    readonly storageClass: string;
    readonly ' $fragmentSpreads': FragmentRefs<
      'ObjectMetadataTable_object' | 'ObjectTagsTable_object'
    >;
  } | null;
  readonly ' $fragmentType': 'ObjectPropertiesObject_bucket';
};
export type ObjectPropertiesObject_bucket$key = {
  readonly ' $data'?: ObjectPropertiesObject_bucket$data;
  readonly ' $fragmentSpreads': FragmentRefs<'ObjectPropertiesObject_bucket'>;
};

const node: ReaderFragment = {
  argumentDefinitions: [
    {
      kind: 'RootArgument',
      name: 'objectKey',
    },
  ],
  kind: 'Fragment',
  metadata: null,
  name: 'ObjectPropertiesObject_bucket',
  selections: [
    {
      alias: null,
      args: [
        {
          kind: 'Variable',
          name: 'objectKey',
          variableName: 'objectKey',
        },
      ],
      concreteType: 'BucketObject',
      kind: 'LinkedField',
      name: 'object',
      plural: false,
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
        {
          kind: 'Defer',
          selections: [
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'ObjectTagsTable_object',
            },
          ],
        },
        {
          kind: 'Defer',
          selections: [
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'ObjectMetadataTable_object',
            },
          ],
        },
      ],
      storageKey: null,
    },
  ],
  type: 'Bucket',
  abstractKey: null,
};

(node as any).hash = 'd973e5d0914143cfc2011354d665a90d';

export default node;
