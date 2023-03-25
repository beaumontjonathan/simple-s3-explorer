/**
 * @generated SignedSource<<a815e01c0a6593ca7d393cddc27d7453>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type BucketObjectDownloadMutation$variables = {
  bucketName: string;
  objectKey: string;
};
export type BucketObjectDownloadMutation$data = {
  readonly generateObjectDownloadUrl: string;
};
export type BucketObjectDownloadMutation = {
  response: BucketObjectDownloadMutation$data;
  variables: BucketObjectDownloadMutation$variables;
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
        alias: null,
        args: [
          {
            kind: 'Variable',
            name: 'bucket',
            variableName: 'bucketName',
          },
          {
            kind: 'Variable',
            name: 'key',
            variableName: 'objectKey',
          },
        ],
        kind: 'ScalarField',
        name: 'generateObjectDownloadUrl',
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'BucketObjectDownloadMutation',
      selections: v1 /*: any*/,
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'BucketObjectDownloadMutation',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: '022b5734e49c7948caaab35b4307cbdc',
      id: null,
      metadata: {},
      name: 'BucketObjectDownloadMutation',
      operationKind: 'mutation',
      text: 'mutation BucketObjectDownloadMutation(\n  $bucketName: String!\n  $objectKey: String!\n) {\n  generateObjectDownloadUrl(bucket: $bucketName, key: $objectKey)\n}\n',
    },
  };
})();

(node as any).hash = '313f22c751efd5f04f66aca8a1d4b8a9';

export default node;
