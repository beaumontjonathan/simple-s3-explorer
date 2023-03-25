/**
 * @generated SignedSource<<4d8db770db6d3db2dfb97515f69ce00f>>
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
      readonly key: string;
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
            concreteType: 'BucketObject',
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
      cacheID: '67fc77204cbd119e545cf7f92ec130cb',
      id: null,
      metadata: {},
      name: 'BucketQuery',
      operationKind: 'query',
      text: 'query BucketQuery(\n  $bucketName: String!\n) {\n  bucket(name: $bucketName) {\n    name\n    region\n    objects {\n      key\n    }\n  }\n}\n',
    },
  };
})();

(node as any).hash = 'de5068241d16f6e4375ed303bc9d4a31';

export default node;
