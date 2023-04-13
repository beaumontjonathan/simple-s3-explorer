/**
 * @generated SignedSource<<e0e1ce74e379093860104f7c9714742f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileSelectQuery$variables = {};
export type ProfileSelectQuery$data = {
  readonly profiles: ReadonlyArray<{
    readonly name: string | null;
  }>;
};
export type ProfileSelectQuery = {
  response: ProfileSelectQuery$data;
  variables: ProfileSelectQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Profile",
    "kind": "LinkedField",
    "name": "profiles",
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfileSelectQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProfileSelectQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "cffc32c8dcf102224185c0c6c6d29456",
    "id": null,
    "metadata": {},
    "name": "ProfileSelectQuery",
    "operationKind": "query",
    "text": "query ProfileSelectQuery {\n  profiles {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "2b0daf568156e3cbfc0fa6c49751c390";

export default node;
