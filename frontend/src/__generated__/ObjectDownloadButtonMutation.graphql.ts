/**
 * @generated SignedSource<<95559b44c1bc0a3a8ca8231a2230db52>>
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
  profileName: string;
};
export type ObjectDownloadButtonMutation$data = {
  readonly generateObjectDownloadUrl: string;
};
export type ObjectDownloadButtonMutation = {
  response: ObjectDownloadButtonMutation$data;
  variables: ObjectDownloadButtonMutation$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = {
      defaultValue: null,
      kind: 'LocalArgument',
      name: 'bucketName',
    },
    v1 = {
      defaultValue: null,
      kind: 'LocalArgument',
      name: 'objectKey',
    },
    v2 = {
      defaultValue: null,
      kind: 'LocalArgument',
      name: 'profileName',
    },
    v3 = [
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
          {
            kind: 'Variable',
            name: 'profile',
            variableName: 'profileName',
          },
        ],
        kind: 'ScalarField',
        name: 'generateObjectDownloadUrl',
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: [v0 /*: any*/, v1 /*: any*/, v2 /*: any*/],
      kind: 'Fragment',
      metadata: null,
      name: 'ObjectDownloadButtonMutation',
      selections: v3 /*: any*/,
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [v2 /*: any*/, v0 /*: any*/, v1 /*: any*/],
      kind: 'Operation',
      name: 'ObjectDownloadButtonMutation',
      selections: v3 /*: any*/,
    },
    params: {
      cacheID: 'c6a0da276cbd1668cefe79e5b771536a',
      id: null,
      metadata: {},
      name: 'ObjectDownloadButtonMutation',
      operationKind: 'mutation',
      text: 'mutation ObjectDownloadButtonMutation(\n  $profileName: String!\n  $bucketName: String!\n  $objectKey: String!\n) {\n  generateObjectDownloadUrl(profile: $profileName, bucket: $bucketName, key: $objectKey)\n}\n',
    },
  };
})();

(node as any).hash = '8dedf634337aac25f96a3f4daf1ec8d9';

export default node;
