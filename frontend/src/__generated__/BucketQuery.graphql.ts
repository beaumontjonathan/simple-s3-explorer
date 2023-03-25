/**
 * @generated SignedSource<<47591cfa835b404a674405eb82b4d9c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BucketQuery$variables = {
  bucketName: string;
};
export type BucketQuery$data = {
  readonly bucket: {
    readonly name: string;
    readonly objects: ReadonlyArray<{
      readonly etag: string;
      readonly key: string;
      readonly lastModified: string;
      readonly size: number;
      readonly storageClass: string;
    }>;
    readonly region: string;
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
        alias: null,
        args: [
          {
            kind: 'Variable',
            name: 'name',
            variableName: 'bucketName',
          },
        ],
        concreteType: 'Bucket',
        kind: 'LinkedField',
        name: 'bucket',
        plural: false,
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
            name: 'region',
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
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'BucketQuery',
      selections: v1 /*: any*/,
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'BucketQuery',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: '95c08c614e99128b99fe45404a889168',
      id: null,
      metadata: {},
      name: 'BucketQuery',
      operationKind: 'query',
      text: 'query BucketQuery(\n  $bucketName: String!\n) {\n  bucket(name: $bucketName) {\n    name\n    region\n    objects {\n      key\n      etag\n      size\n      storageClass\n      lastModified\n    }\n  }\n}\n',
    },
  };
})();

(node as any).hash = 'b2b0733f0472202ef62d0ee5f6900049';

export default node;
