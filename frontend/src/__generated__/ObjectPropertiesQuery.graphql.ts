/**
 * @generated SignedSource<<ee714b49370f9be59969b7b48f0c30d2>>
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
};
export type ObjectPropertiesQuery$data = {
  readonly bucket: {
    readonly name: string;
    readonly region: string;
    readonly " $fragmentSpreads": FragmentRefs<"ObjectPropertiesObject_bucket">;
  } | null;
};
export type ObjectPropertiesQuery = {
  response: ObjectPropertiesQuery$data;
  variables: ObjectPropertiesQuery$variables;
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
    "kind": "Variable",
    "name": "name",
    "variableName": "bucketName"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "region",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "key",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ObjectPropertiesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Bucket",
        "kind": "LinkedField",
        "name": "bucket",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ObjectPropertiesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Bucket",
        "kind": "LinkedField",
        "name": "bucket",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
                  (v4/*: any*/),
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
                          (v4/*: any*/),
                          (v5/*: any*/)
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
                          (v4/*: any*/),
                          (v5/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "f12018a4b88c7538ebb8f32d9793500d",
    "id": null,
    "metadata": {},
    "name": "ObjectPropertiesQuery",
    "operationKind": "query",
    "text": "query ObjectPropertiesQuery(\n  $bucketName: String!\n  $objectKey: String!\n) {\n  bucket(name: $bucketName) {\n    name\n    region\n    ...ObjectPropertiesObject_bucket @defer(label: \"ObjectPropertiesQuery$defer$ObjectPropertiesObject_bucket\")\n  }\n}\n\nfragment ObjectMetadataTable_object on BucketObject {\n  metadata {\n    key\n    value\n    userDefined\n  }\n}\n\nfragment ObjectPropertiesObject_bucket on Bucket {\n  object(objectKey: $objectKey) {\n    key\n    etag\n    size\n    storageClass\n    lastModified\n    ...ObjectTagsTable_object @defer(label: \"ObjectPropertiesObject_bucket$defer$ObjectTagsTable_object\")\n    ...ObjectMetadataTable_object @defer(label: \"ObjectPropertiesObject_bucket$defer$ObjectMetadataTable_object\")\n  }\n}\n\nfragment ObjectTagsTable_object on BucketObject {\n  tags {\n    key\n    value\n  }\n}\n"
  }
};
})();

(node as any).hash = "94b4a7e183fb7e5c8599a3d16ad2cf32";

export default node;
