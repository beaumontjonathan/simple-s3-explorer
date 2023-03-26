/**
 * @generated SignedSource<<43f289dc948f715beac0176f5360bec5>>
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
  profileName: string;
};
export type BucketObjectsListQuery$data = {
  readonly profile: {
    readonly bucket: {
      readonly name: string;
      readonly region: string;
      readonly ' $fragmentSpreads': FragmentRefs<'ObjectsTable_bucket'>;
    } | null;
  };
};
export type BucketObjectsListQuery = {
  response: BucketObjectsListQuery$data;
  variables: BucketObjectsListQuery$variables;
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
      name: 'profileName',
    },
    v2 = [
      {
        kind: 'Variable',
        name: 'name',
        variableName: 'profileName',
      },
    ],
    v3 = [
      {
        kind: 'Variable',
        name: 'name',
        variableName: 'bucketName',
      },
    ],
    v4 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'name',
      storageKey: null,
    },
    v5 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'region',
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: [v0 /*: any*/, v1 /*: any*/],
      kind: 'Fragment',
      metadata: null,
      name: 'BucketObjectsListQuery',
      selections: [
        {
          kind: 'RequiredField',
          field: {
            alias: null,
            args: v2 /*: any*/,
            concreteType: 'Profile',
            kind: 'LinkedField',
            name: 'profile',
            plural: false,
            selections: [
              {
                alias: null,
                args: v3 /*: any*/,
                concreteType: 'Bucket',
                kind: 'LinkedField',
                name: 'bucket',
                plural: false,
                selections: [
                  v4 /*: any*/,
                  v5 /*: any*/,
                  {
                    args: null,
                    kind: 'FragmentSpread',
                    name: 'ObjectsTable_bucket',
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          action: 'THROW',
          path: 'profile',
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [v1 /*: any*/, v0 /*: any*/],
      kind: 'Operation',
      name: 'BucketObjectsListQuery',
      selections: [
        {
          alias: null,
          args: v2 /*: any*/,
          concreteType: 'Profile',
          kind: 'LinkedField',
          name: 'profile',
          plural: false,
          selections: [
            {
              alias: null,
              args: v3 /*: any*/,
              concreteType: 'Bucket',
              kind: 'LinkedField',
              name: 'bucket',
              plural: false,
              selections: [
                v4 /*: any*/,
                v5 /*: any*/,
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
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '2d7d34962a346aed8cbfce27d8e4a9a9',
      id: null,
      metadata: {},
      name: 'BucketObjectsListQuery',
      operationKind: 'query',
      text: 'query BucketObjectsListQuery(\n  $profileName: String!\n  $bucketName: String!\n) {\n  profile(name: $profileName) {\n    bucket(name: $bucketName) {\n      name\n      region\n      ...ObjectsTable_bucket\n    }\n  }\n}\n\nfragment ObjectsTable_bucket on Bucket {\n  name\n  objects {\n    key\n    etag\n    size\n    storageClass\n    lastModified\n  }\n}\n',
    },
  };
})();

(node as any).hash = '8d0799a38ab1f81e7e8af6c970eb211d';

export default node;
