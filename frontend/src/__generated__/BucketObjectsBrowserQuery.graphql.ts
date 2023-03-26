/**
 * @generated SignedSource<<f130380596871969d38f5ba196b6a174>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BucketObjectsBrowserQuery$variables = {
  bucketName: string;
  prefix: string;
  profileName: string;
};
export type BucketObjectsBrowserQuery$data = {
  readonly profile: {
    readonly bucket: {
      readonly prefix: {
        readonly commonPrefixes: ReadonlyArray<{
          readonly __typename: 'BucketCommonPrefix';
          readonly prefix: string;
        }>;
        readonly objects: ReadonlyArray<{
          readonly __typename: 'ListedBucketObject';
          readonly etag: string;
          readonly key: string;
          readonly lastModified: string;
          readonly size: number;
          readonly storageClass: string;
        }>;
      } | null;
    } | null;
  };
};
export type BucketObjectsBrowserQuery = {
  response: BucketObjectsBrowserQuery$data;
  variables: BucketObjectsBrowserQuery$variables;
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
      name: 'prefix',
    },
    v2 = {
      defaultValue: null,
      kind: 'LocalArgument',
      name: 'profileName',
    },
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: '__typename',
      storageKey: null,
    },
    v4 = {
      alias: null,
      args: [
        {
          kind: 'Variable',
          name: 'name',
          variableName: 'profileName',
        },
      ],
      concreteType: 'Profile',
      kind: 'LinkedField',
      name: 'profile',
      plural: false,
      selections: [
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
              args: [
                {
                  kind: 'Variable',
                  name: 'prefix',
                  variableName: 'prefix',
                },
              ],
              concreteType: 'BucketPrefix',
              kind: 'LinkedField',
              name: 'prefix',
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'BucketCommonPrefix',
                  kind: 'LinkedField',
                  name: 'commonPrefixes',
                  plural: true,
                  selections: [
                    v3 /*: any*/,
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'prefix',
                      storageKey: null,
                    },
                  ],
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
                    v3 /*: any*/,
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
          storageKey: null,
        },
      ],
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: [v0 /*: any*/, v1 /*: any*/, v2 /*: any*/],
      kind: 'Fragment',
      metadata: null,
      name: 'BucketObjectsBrowserQuery',
      selections: [
        {
          kind: 'RequiredField',
          field: v4 /*: any*/,
          action: 'THROW',
          path: 'profile',
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [v2 /*: any*/, v0 /*: any*/, v1 /*: any*/],
      kind: 'Operation',
      name: 'BucketObjectsBrowserQuery',
      selections: [v4 /*: any*/],
    },
    params: {
      cacheID: '87e5112c2481f5abb0840e0b82ca3952',
      id: null,
      metadata: {},
      name: 'BucketObjectsBrowserQuery',
      operationKind: 'query',
      text: 'query BucketObjectsBrowserQuery(\n  $profileName: String!\n  $bucketName: String!\n  $prefix: String!\n) {\n  profile(name: $profileName) {\n    bucket(name: $bucketName) {\n      prefix(prefix: $prefix) {\n        commonPrefixes {\n          __typename\n          prefix\n        }\n        objects {\n          __typename\n          key\n          etag\n          size\n          storageClass\n          lastModified\n        }\n      }\n    }\n  }\n}\n',
    },
  };
})();

(node as any).hash = '2fb3f0aeabae17cc27d87bdd3dabb5bc';

export default node;
