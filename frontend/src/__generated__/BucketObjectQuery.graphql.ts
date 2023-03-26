/**
 * @generated SignedSource<<ffecda5edb7d7732c4144b80a0054939>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type BucketObjectQuery$variables = {
  bucketName: string;
  objectKey: string;
};
export type BucketObjectQuery$data = {
  readonly bucket: {
    readonly name: string;
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
    readonly region: string;
  } | null;
};
export type BucketObjectQuery = {
  response: BucketObjectQuery$data;
  variables: BucketObjectQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'bucketName',
      },
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'objectKey',
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
    },
    v4 = [
      {
        kind: 'Variable',
        name: 'objectKey',
        variableName: 'objectKey',
      },
    ],
    v5 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'key',
      storageKey: null,
    },
    v6 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'etag',
      storageKey: null,
    },
    v7 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'size',
      storageKey: null,
    },
    v8 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'storageClass',
      storageKey: null,
    },
    v9 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'lastModified',
      storageKey: null,
    },
    v10 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'value',
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'BucketObjectQuery',
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
              args: v4 /*: any*/,
              concreteType: 'BucketObject',
              kind: 'LinkedField',
              name: 'object',
              plural: false,
              selections: [
                v5 /*: any*/,
                v6 /*: any*/,
                v7 /*: any*/,
                v8 /*: any*/,
                v9 /*: any*/,
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'ObjectTagsTable_object',
                },
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'ObjectMetadataTable_object',
                },
              ],
              storageKey: null,
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
      name: 'BucketObjectQuery',
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
              args: v4 /*: any*/,
              concreteType: 'BucketObject',
              kind: 'LinkedField',
              name: 'object',
              plural: false,
              selections: [
                v5 /*: any*/,
                v6 /*: any*/,
                v7 /*: any*/,
                v8 /*: any*/,
                v9 /*: any*/,
                {
                  alias: null,
                  args: null,
                  concreteType: 'BucketObjectTag',
                  kind: 'LinkedField',
                  name: 'tags',
                  plural: true,
                  selections: [v5 /*: any*/, v10 /*: any*/],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'BucketObjectMetadataItem',
                  kind: 'LinkedField',
                  name: 'metadata',
                  plural: true,
                  selections: [
                    v5 /*: any*/,
                    v10 /*: any*/,
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'userDefined',
                      storageKey: null,
                    },
                  ],
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
      cacheID: 'f575b68de5ded9ac633aca869b98912a',
      id: null,
      metadata: {},
      name: 'BucketObjectQuery',
      operationKind: 'query',
      text: 'query BucketObjectQuery(\n  $bucketName: String!\n  $objectKey: String!\n) {\n  bucket(name: $bucketName) {\n    name\n    region\n    object(objectKey: $objectKey) {\n      key\n      etag\n      size\n      storageClass\n      lastModified\n      ...ObjectTagsTable_object\n      ...ObjectMetadataTable_object\n    }\n  }\n}\n\nfragment ObjectMetadataTable_object on BucketObject {\n  metadata {\n    key\n    value\n    userDefined\n  }\n}\n\nfragment ObjectTagsTable_object on BucketObject {\n  tags {\n    key\n    value\n  }\n}\n',
    },
  };
})();

(node as any).hash = 'd3bcd28712c8952511e42101fa798f32';

export default node;
