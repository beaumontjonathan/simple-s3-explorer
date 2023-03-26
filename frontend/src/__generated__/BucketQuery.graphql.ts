/**
 * @generated SignedSource<<9f70576749a7d860696f1e5e3065e4dd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type BucketQuery$variables = {
  bucketName: string;
};
export type BucketQuery$data = {
  readonly bucket: {
    readonly name: string;
    readonly region: string;
    readonly ' $fragmentSpreads': FragmentRefs<'ObjectsTable_bucket'>;
  } | null;
};
export type BucketQuery = {
  response: BucketQuery$data;
  variables: BucketQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'bucketName',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'name',
        variableName: 'bucketName',
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'name',
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'region',
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'BucketQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'Bucket',
          kind: 'LinkedField',
          name: 'bucket',
          plural: false,
          selections: [
            v2 /*: any*/,
            v3 /*: any*/,
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'ObjectsTable_bucket',
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'BucketQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'Bucket',
          kind: 'LinkedField',
          name: 'bucket',
          plural: false,
          selections: [
            v2 /*: any*/,
            v3 /*: any*/,
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
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: 'd4cab9745e2e21a12d662c27638e0097',
      id: null,
      metadata: {},
      name: 'BucketQuery',
      operationKind: 'query',
      text: 'query BucketQuery(\n  $bucketName: String!\n) {\n  bucket(name: $bucketName) {\n    name\n    region\n    ...ObjectsTable_bucket\n  }\n}\n\nfragment ObjectsTable_bucket on Bucket {\n  name\n  objects {\n    key\n    etag\n    size\n    storageClass\n    lastModified\n  }\n}\n',
    },
  };
})();

(node as any).hash = '7593b1640d3af8ecfb1040131c5997a9';

export default node;
