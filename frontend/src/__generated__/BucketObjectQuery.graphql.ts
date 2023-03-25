/**
 * @generated SignedSource<<f728a9b3d853ab882cc4377eb1abdd90>>
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
      readonly size: number;
      readonly storageClass: string;
    } | null;
    readonly region: string;
  } | null;
};
export type BucketObjectQuery = {
  response: BucketObjectQuery$data;
  variables: BucketObjectQuery$variables;
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
    "name": "objectKey"
  }
],
v1 = [
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
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "region",
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "objectKey",
            "variableName": "objectKey"
          }
        ],
        "concreteType": "BucketObject",
        "kind": "LinkedField",
        "name": "object",
        "plural": false,
        "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BucketObjectQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BucketObjectQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d9dd69cd295528a4656660bbf04bd594",
    "id": null,
    "metadata": {},
    "name": "BucketObjectQuery",
    "operationKind": "query",
    "text": "query BucketObjectQuery(\n  $bucketName: String!\n  $objectKey: String!\n) {\n  bucket(name: $bucketName) {\n    name\n    region\n    object(objectKey: $objectKey) {\n      key\n      etag\n      size\n      storageClass\n      lastModified\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "092af4060a16fe148d08adb56b8fb7fa";

export default node;
