/**
 * @generated SignedSource<<18546412d264a62b98c32c15025566d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
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
      readonly metadata: ReadonlyArray<{
        readonly key: string;
        readonly userDefined: boolean;
        readonly value: string;
      }>;
      readonly size: number;
      readonly storageClass: string;
      readonly tags: ReadonlyArray<{
        readonly key: string;
        readonly value: string;
      }>;
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
    v1 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'key',
      storageKey: null,
    },
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'value',
      storageKey: null,
    },
    v3 = [
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
              v1 /*: any*/,
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
                alias: null,
                args: null,
                concreteType: 'BucketObjectTag',
                kind: 'LinkedField',
                name: 'tags',
                plural: true,
                selections: [v1 /*: any*/, v2 /*: any*/],
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
                  v1 /*: any*/,
                  v2 /*: any*/,
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
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'BucketObjectQuery',
      selections: v3 /*: any*/,
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'BucketObjectQuery',
      selections: v3 /*: any*/,
    },
    params: {
      cacheID: '44fe037509abda79a58e50f2f9c066ac',
      id: null,
      metadata: {},
      name: 'BucketObjectQuery',
      operationKind: 'query',
      text: 'query BucketObjectQuery(\n  $bucketName: String!\n  $objectKey: String!\n) {\n  bucket(name: $bucketName) {\n    name\n    region\n    object(objectKey: $objectKey) {\n      key\n      etag\n      size\n      storageClass\n      lastModified\n      tags {\n        key\n        value\n      }\n      metadata {\n        key\n        value\n        userDefined\n      }\n    }\n  }\n}\n',
    },
  };
})();

(node as any).hash = 'e123e713b2db693f842c97a83b4e897c';

export default node;
