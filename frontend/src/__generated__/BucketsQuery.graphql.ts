/**
 * @generated SignedSource<<c09d8db18563cde81ac59b07e618ae99>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BucketsQuery$variables = {};
export type BucketsQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"BucketsTable_query">;
};
export type BucketsQuery = {
  response: BucketsQuery$data;
  variables: BucketsQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BucketsQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "BucketsTable_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BucketsQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 10
          }
        ],
        "concreteType": "ListedBucket",
        "kind": "LinkedField",
        "name": "buckets",
        "plural": true,
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
            "name": "createdAt",
            "storageKey": null
          }
        ],
        "storageKey": "buckets(first:10)"
      }
    ]
  },
  "params": {
    "cacheID": "b24b12aeee6cc7180b924802ac4a7d57",
    "id": null,
    "metadata": {},
    "name": "BucketsQuery",
    "operationKind": "query",
    "text": "query BucketsQuery {\n  ...BucketsTable_query\n}\n\nfragment BucketsTable_query on Query {\n  buckets(first: 10) {\n    name\n    createdAt\n  }\n}\n"
  }
};

(node as any).hash = "44a623f17d2bc152eebe2d412ff9a26d";

export default node;
