/**
 * @generated SignedSource<<95a276d74d716a4eed11769f5f3a1c36>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ObjectDownloadButtonMutation$variables = {
  bucketName: string;
  objectKey: string;
};
export type ObjectDownloadButtonMutation$data = {
  readonly generateObjectDownloadUrl: string;
};
export type ObjectDownloadButtonMutation = {
  response: ObjectDownloadButtonMutation$data;
  variables: ObjectDownloadButtonMutation$variables;
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
      name: 'ObjectDownloadButtonMutation',
      selections: v1 /*: any*/,
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'ObjectDownloadButtonMutation',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: '1941b46710e6c2f866f058e4eb07e793',
      id: null,
      metadata: {},
      name: 'ObjectDownloadButtonMutation',
      operationKind: 'mutation',
      text: 'mutation ObjectDownloadButtonMutation(\n  $bucketName: String!\n  $objectKey: String!\n) {\n  generateObjectDownloadUrl(bucket: $bucketName, key: $objectKey)\n}\n',
    },
  };
})();

(node as any).hash = 'eedbc7e3cd88a5d67deaae1409987f61';

export default node;
