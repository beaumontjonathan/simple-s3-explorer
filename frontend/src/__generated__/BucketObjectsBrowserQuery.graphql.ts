/**
 * @generated SignedSource<<f6d193a4b398fa4546a71fb40c3d1d67>>
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
};
export type BucketObjectsBrowserQuery$data = {
  readonly bucket: {
    readonly prefix: {
      readonly commonPrefixes: ReadonlyArray<{
        readonly __typename: "BucketCommonPrefix";
        readonly prefix: string;
      }>;
      readonly objects: ReadonlyArray<{
        readonly __typename: "ListedBucketObject";
        readonly etag: string;
        readonly key: string;
        readonly lastModified: string;
        readonly size: number;
        readonly storageClass: string;
      }>;
    } | null;
  } | null;
};
export type BucketObjectsBrowserQuery = {
  response: BucketObjectsBrowserQuery$data;
  variables: BucketObjectsBrowserQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "bucketName"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "prefix"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "bucketName"
      }
    ],
    "concreteType": "Bucket",
    "kind": "LinkedField",
    "name": "bucket",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "prefix",
            "variableName": "prefix"
          }
        ],
        "concreteType": "BucketPrefix",
        "kind": "LinkedField",
        "name": "prefix",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BucketCommonPrefix",
            "kind": "LinkedField",
            "name": "commonPrefixes",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "prefix",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ListedBucketObject",
            "kind": "LinkedField",
            "name": "objects",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "key",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "etag",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "size",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "storageClass",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastModified",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BucketObjectsBrowserQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BucketObjectsBrowserQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "a1ea50cd88a13b0bb1083c2393801a88",
    "id": null,
    "metadata": {},
    "name": "BucketObjectsBrowserQuery",
    "operationKind": "query",
    "text": "query BucketObjectsBrowserQuery(\n  $bucketName: String!\n  $prefix: String!\n) {\n  bucket(name: $bucketName) {\n    prefix(prefix: $prefix) {\n      commonPrefixes {\n        __typename\n        prefix\n      }\n      objects {\n        __typename\n        key\n        etag\n        size\n        storageClass\n        lastModified\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "157be41188461466701cc50888afb419";

export default node;
