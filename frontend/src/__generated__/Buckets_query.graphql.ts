/**
 * @generated SignedSource<<33aec9d35355c81a9a97f02f9066d2b3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Buckets_query$data = {
  readonly buckets: ReadonlyArray<{
    readonly name: string;
  }>;
  readonly " $fragmentType": "Buckets_query";
};
export type Buckets_query$key = {
  readonly " $data"?: Buckets_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"Buckets_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Buckets_query",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Bucket",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "e53a0aeb051ddcd1d3bad15b5477fba2";

export default node;
