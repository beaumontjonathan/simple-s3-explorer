/**
 * @generated SignedSource<<23e3425b6270de0ca657e0c0fddaeaca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BucketsQuery$variables = {
  profileName: string;
};
export type BucketsQuery$data = {
  readonly profile: {
    readonly buckets: ReadonlyArray<{
      readonly name: string;
    }>;
    readonly name: string | null;
  } | null;
};
export type BucketsQuery = {
  response: BucketsQuery$data;
  variables: BucketsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "profileName"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
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
      (v1/*: any*/),
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 100
          }
        ],
        "concreteType": "ListedBucket",
        "kind": "LinkedField",
        "name": "buckets",
        "plural": true,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": "buckets(first:100)"
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
    "name": "BucketsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BucketsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "4a27a43c24f2de5f6bdea534a0f8f650",
    "id": null,
    "metadata": {},
    "name": "BucketsQuery",
    "operationKind": "query",
    "text": "query BucketsQuery(\n  $profileName: String!\n) {\n  profile(name: $profileName) {\n    name\n    buckets(first: 100) {\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0586b841fdcd71d331dd07191404742a";

export default node;
