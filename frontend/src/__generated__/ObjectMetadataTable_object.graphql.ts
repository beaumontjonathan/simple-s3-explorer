/**
 * @generated SignedSource<<2cf25057f56fd52a81e28136afe6e5ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ObjectMetadataTable_object$data = {
  readonly metadata: ReadonlyArray<{
    readonly key: string;
    readonly userDefined: boolean;
    readonly value: string;
  }>;
  readonly " $fragmentType": "ObjectMetadataTable_object";
};
export type ObjectMetadataTable_object$key = {
  readonly " $data"?: ObjectMetadataTable_object$data;
  readonly " $fragmentSpreads": FragmentRefs<"ObjectMetadataTable_object">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ObjectMetadataTable_object",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "BucketObjectMetadataItem",
      "kind": "LinkedField",
      "name": "metadata",
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
          "name": "value",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "userDefined",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "BucketObject",
  "abstractKey": null
};

(node as any).hash = "e3b15e2836e871d6252b6b9ab0fd4b1a";

export default node;
