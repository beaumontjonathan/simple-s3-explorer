/**
 * @generated SignedSource<<2edcf68cc27b4aff17dfbfec33ad5c96>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BucketsTable_query$data = {
  readonly profile: {
    readonly buckets: ReadonlyArray<{
      readonly createdAt: string;
      readonly name: string;
    }>;
  };
  readonly " $fragmentType": "BucketsTable_query";
};
export type BucketsTable_query$key = {
  readonly " $data"?: BucketsTable_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"BucketsTable_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "profileName"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "BucketsTable_query",
  "selections": [
    {
      "kind": "RequiredField",
      "field": {
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
            "args": null,
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
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      "action": "THROW",
      "path": "profile"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "ebcd0b97b0b5665c66b54c14e6ea85b3";

export default node;
