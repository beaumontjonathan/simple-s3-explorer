import { GraphQLResolveInfo } from 'graphql';
import {
  Bucket as BucketGraphQL,
  ListedBucket as ListedBucketGraphQL,
  BucketObject as BucketObjectGraphQL,
  ListedBucketObject as ListedBucketObjectGraphQL,
} from '../schema/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bucket = {
  __typename?: 'Bucket';
  name: Scalars['String'];
  object: Maybe<BucketObject>;
  objects: Array<ListedBucketObject>;
  region: Scalars['String'];
};

export type BucketObjectArgs = {
  objectKey: Scalars['String'];
};

export type BucketObjectsArgs = {
  first: InputMaybe<Scalars['Int']>;
};

export type BucketObject = {
  __typename?: 'BucketObject';
  etag: Scalars['String'];
  key: Scalars['String'];
  lastModified: Scalars['String'];
  size: Scalars['Int'];
  storageClass: Scalars['String'];
};

export type ListedBucket = {
  __typename?: 'ListedBucket';
  bucket: Bucket;
  name: Scalars['String'];
};

export type ListedBucketObject = {
  __typename?: 'ListedBucketObject';
  etag: Scalars['String'];
  key: Scalars['String'];
  lastModified: Scalars['String'];
  size: Scalars['Int'];
  storageClass: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  never: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  bucket: Maybe<Bucket>;
  buckets: Array<ListedBucket>;
  hello: Maybe<Scalars['String']>;
};

export type QueryBucketArgs = {
  name: Scalars['String'];
};

export type QueryBucketsArgs = {
  first: InputMaybe<Scalars['Int']>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<unknown>;
  Bucket: ResolverTypeWrapper<BucketGraphQL>;
  BucketObject: ResolverTypeWrapper<BucketObjectGraphQL>;
  Int: ResolverTypeWrapper<unknown>;
  ListedBucket: ResolverTypeWrapper<ListedBucketGraphQL>;
  ListedBucketObject: ResolverTypeWrapper<ListedBucketObjectGraphQL>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<unknown>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: unknown;
  Bucket: BucketGraphQL;
  BucketObject: BucketObjectGraphQL;
  Int: unknown;
  ListedBucket: ListedBucketGraphQL;
  ListedBucketObject: ListedBucketObjectGraphQL;
  Mutation: {};
  Query: {};
  String: unknown;
};

export type BucketResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Bucket'] = ResolversParentTypes['Bucket']
> = {
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object: Resolver<
    Maybe<ResolversTypes['BucketObject']>,
    ParentType,
    ContextType,
    RequireFields<BucketObjectArgs, 'objectKey'>
  >;
  objects: Resolver<
    Array<ResolversTypes['ListedBucketObject']>,
    ParentType,
    ContextType,
    Partial<BucketObjectsArgs>
  >;
  region: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BucketObjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BucketObject'] = ResolversParentTypes['BucketObject']
> = {
  etag: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastModified: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  storageClass: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListedBucketResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ListedBucket'] = ResolversParentTypes['ListedBucket']
> = {
  bucket: Resolver<ResolversTypes['Bucket'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListedBucketObjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ListedBucketObject'] = ResolversParentTypes['ListedBucketObject']
> = {
  etag: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastModified: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  storageClass: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  never: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  bucket: Resolver<
    Maybe<ResolversTypes['Bucket']>,
    ParentType,
    ContextType,
    RequireFields<QueryBucketArgs, 'name'>
  >;
  buckets: Resolver<
    Array<ResolversTypes['ListedBucket']>,
    ParentType,
    ContextType,
    Partial<QueryBucketsArgs>
  >;
  hello: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Bucket: BucketResolvers<ContextType>;
  BucketObject: BucketObjectResolvers<ContextType>;
  ListedBucket: ListedBucketResolvers<ContextType>;
  ListedBucketObject: ListedBucketObjectResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
};
