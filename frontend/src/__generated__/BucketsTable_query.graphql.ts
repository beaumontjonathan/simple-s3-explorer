/**
 * @generated SignedSource<<13b3d40c8f8f6f8264431af68c6528d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BucketsTable_query$data = {
  readonly buckets: ReadonlyArray<{
    readonly createdAt: string;
    readonly name: string;
  }>;
  readonly " $fragmentType": "BucketsTable_query";
};
export type BucketsTable_query$key = {
  readonly " $data"?: BucketsTable_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"BucketsTable_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BucketsTable_query",
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
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "2243fbd925bac91f5fceb0098cba7599";

export default node;
