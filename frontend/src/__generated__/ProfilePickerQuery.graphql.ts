/**
 * @generated SignedSource<<95d77d3dc9165691308b27f74749e45e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfilePickerQuery$variables = {};
export type ProfilePickerQuery$data = {
  readonly profiles: ReadonlyArray<{
    readonly name: string | null;
  }>;
};
export type ProfilePickerQuery = {
  response: ProfilePickerQuery$data;
  variables: ProfilePickerQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
    {
      alias: null,
      args: null,
      concreteType: 'Profile',
      kind: 'LinkedField',
      name: 'profiles',
      plural: true,
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'name',
          storageKey: null,
        },
      ],
      storageKey: null,
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'ProfilePickerQuery',
      selections: v0 /*: any*/,
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'ProfilePickerQuery',
      selections: v0 /*: any*/,
    },
    params: {
      cacheID: '9814994195cdb2a80536a14afb1bacb3',
      id: null,
      metadata: {},
      name: 'ProfilePickerQuery',
      operationKind: 'query',
      text: 'query ProfilePickerQuery {\n  profiles {\n    name\n  }\n}\n',
    },
  };
})();

(node as any).hash = '07e1fdc91e8672f3667db58e4654959e';

export default node;
