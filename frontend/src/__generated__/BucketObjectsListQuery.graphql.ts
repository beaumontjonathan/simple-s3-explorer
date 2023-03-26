/**
 * @generated SignedSource<<5a8c5c9eccd84bc920200c2635066b59>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type BucketObjectsListQuery$variables = {
  bucketName: string;
};
export type BucketObjectsListQuery$data = {
  readonly bucket: {
    readonly name: string;
    readonly region: string;
    readonly ' $fragmentSpreads': FragmentRefs<'ObjectsTable_bucket'>;
  } | null;
};
export type BucketObjectsListQuery = {
  response: BucketObjectsListQuery$data;
  variables: BucketObjectsListQuery$variables;
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
      name: 'BucketObjectsListQuery',
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
      name: 'BucketObjectsListQuery',
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
      cacheID: '84f4271ab809902a8bd7a29e507ffcee',
      id: null,
      metadata: {},
      name: 'BucketObjectsListQuery',
      operationKind: 'query',
      text: 'query BucketObjectsListQuery(\n  $bucketName: String!\n) {\n  bucket(name: $bucketName) {\n    name\n    region\n    ...ObjectsTable_bucket\n  }\n}\n\nfragment ObjectsTable_bucket on Bucket {\n  name\n  objects {\n    key\n    etag\n    size\n    storageClass\n    lastModified\n  }\n}\n',
    },
  };
})();

(node as any).hash = '60663eba6a3aa60e21f31cb2adeb7e65';

export default node;
