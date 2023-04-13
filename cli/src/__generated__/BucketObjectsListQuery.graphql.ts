/**
 * @generated SignedSource<<aee03024b64eedc002c699795a1a106c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BucketObjectsListQuery$variables = {
  bucketName: string;
  profileName: string;
};
export type BucketObjectsListQuery$data = {
  readonly profile: {
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
};
export type BucketObjectsListQuery = {
  response: BucketObjectsListQuery$data;
  variables: BucketObjectsListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "bucketName"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "profileName"
},
v2 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "name",
      "variableName": "profileName"
    }
  ],
  "concreteType": "Profile",
  "kind": "LinkedField",
  "name": "profile",
  "plural": false,
  "selections": [
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
          "args": null,
          "concreteType": "ListedBucketObject",
          "kind": "LinkedField",
          "name": "objects",
          "plural": true,
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
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "BucketObjectsListQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": (v2/*: any*/),
        "action": "THROW",
        "path": "profile"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "BucketObjectsListQuery",
    "selections": [
      (v2/*: any*/)
    ]
  },
  "params": {
    "cacheID": "041e421ddb5a5b4d02df4bc4dc153ad8",
    "id": null,
    "metadata": {},
    "name": "BucketObjectsListQuery",
    "operationKind": "query",
    "text": "query BucketObjectsListQuery(\n  $profileName: String!\n  $bucketName: String!\n) {\n  profile(name: $profileName) {\n    bucket(name: $bucketName) {\n      name\n      region\n      objects {\n        key\n        etag\n        size\n        storageClass\n        lastModified\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "911c606f714fb394597dfe9ca6c20d1f";

export default node;
