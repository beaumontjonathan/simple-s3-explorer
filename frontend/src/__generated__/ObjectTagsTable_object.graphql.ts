/**
 * @generated SignedSource<<d75365bd93c4373ce2148379dd7cd063>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type ObjectTagsTable_object$data = {
  readonly tags: ReadonlyArray<{
    readonly key: string;
    readonly value: string;
  }>;
  readonly ' $fragmentType': 'ObjectTagsTable_object';
};
export type ObjectTagsTable_object$key = {
  readonly ' $data'?: ObjectTagsTable_object$data;
  readonly ' $fragmentSpreads': FragmentRefs<'ObjectTagsTable_object'>;
};

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'ObjectTagsTable_object',
  selections: [
    {
      alias: null,
      args: null,
      concreteType: 'BucketObjectTag',
      kind: 'LinkedField',
      name: 'tags',
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
          name: 'value',
          storageKey: null,
        },
      ],
      storageKey: null,
    },
  ],
  type: 'BucketObject',
  abstractKey: null,
};

(node as any).hash = '95b5492fcfa78052bafa3894e8d8118c';

export default node;
