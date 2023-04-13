/**
 * @generated SignedSource<<4327b0de31b4cc3cbd7f1d7284c11d92>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ObjectPropertiesQuery$variables = {
  bucketName: string;
  objectKey: string;
  profileName: string;
};
export type ObjectPropertiesQuery$data = {
  readonly profile: {
    readonly bucket: {
      readonly name: string;
      readonly region: string;
      readonly " $fragmentSpreads": FragmentRefs<"ObjectPropertiesObject_bucket">;
    } | null;
  };
};
export type ObjectPropertiesQuery = {
  response: ObjectPropertiesQuery$data;
  variables: ObjectPropertiesQuery$variables;
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
  "name": "objectKey"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "profileName"
},
v3 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "profileName"
  }
],
v4 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "bucketName"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "region",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "key",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ObjectPropertiesQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v3/*: any*/),
          "concreteType": "Profile",
          "kind": "LinkedField",
          "name": "profile",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": (v4/*: any*/),
              "concreteType": "Bucket",
              "kind": "LinkedField",
              "name": "bucket",
              "plural": false,
              "selections": [
                (v5/*: any*/),
                (v6/*: any*/),
                {
                  "kind": "Defer",
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "ObjectPropertiesObject_bucket"
                    }
                  ]
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
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "ObjectPropertiesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Profile",
        "kind": "LinkedField",
        "name": "profile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Bucket",
            "kind": "LinkedField",
            "name": "bucket",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "if": null,
                "kind": "Defer",
                "label": "ObjectPropertiesQuery$defer$ObjectPropertiesObject_bucket",
                "selections": [
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
                      (v7/*: any*/),
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
                      },
                      {
                        "if": null,
                        "kind": "Defer",
                        "label": "ObjectPropertiesObject_bucket$defer$ObjectTagsTable_object",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "BucketObjectTag",
                            "kind": "LinkedField",
                            "name": "tags",
                            "plural": true,
                            "selections": [
                              (v7/*: any*/),
                              (v8/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "if": null,
                        "kind": "Defer",
                        "label": "ObjectPropertiesObject_bucket$defer$ObjectMetadataTable_object",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "BucketObjectMetadataItem",
                            "kind": "LinkedField",
                            "name": "metadata",
                            "plural": true,
                            "selections": [
                              (v7/*: any*/),
                              (v8/*: any*/),
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
                        ]
                      }
                    ],
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6d362e19f27a0364e61157b187a5b1b8",
    "id": null,
    "metadata": {},
    "name": "ObjectPropertiesQuery",
    "operationKind": "query",
    "text": "query ObjectPropertiesQuery(\n  $profileName: String!\n  $bucketName: String!\n  $objectKey: String!\n) {\n  profile(name: $profileName) {\n    bucket(name: $bucketName) {\n      name\n      region\n      ...ObjectPropertiesObject_bucket @defer(label: \"ObjectPropertiesQuery$defer$ObjectPropertiesObject_bucket\")\n    }\n  }\n}\n\nfragment ObjectMetadataTable_object on BucketObject {\n  metadata {\n    key\n    value\n    userDefined\n  }\n}\n\nfragment ObjectPropertiesObject_bucket on Bucket {\n  object(objectKey: $objectKey) {\n    key\n    etag\n    size\n    storageClass\n    lastModified\n    ...ObjectTagsTable_object @defer(label: \"ObjectPropertiesObject_bucket$defer$ObjectTagsTable_object\")\n    ...ObjectMetadataTable_object @defer(label: \"ObjectPropertiesObject_bucket$defer$ObjectMetadataTable_object\")\n  }\n}\n\nfragment ObjectTagsTable_object on BucketObject {\n  tags {\n    key\n    value\n  }\n}\n"
  }
};
})();

(node as any).hash = "e3215174d41c2986594b6d07c928c9fa";

export default node;
