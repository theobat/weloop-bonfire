import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type LogoutMutationMutationVariables = {};

export type LogoutMutationMutation = { __typename?: 'RootMutationType' } & Pick<
  Types.RootMutationType,
  'deleteSession'
>;

export const LogoutMutationDocument = gql`
  mutation logoutMutation {
    deleteSession
  }
`;
export type LogoutMutationMutationFn = ApolloReactCommon.MutationFunction<
  LogoutMutationMutation,
  LogoutMutationMutationVariables
>;
export type LogoutMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    LogoutMutationMutation,
    LogoutMutationMutationVariables
  >,
  'mutation'
>;

export const LogoutMutationComponent = (
  props: LogoutMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    LogoutMutationMutation,
    LogoutMutationMutationVariables
  >
    mutation={LogoutMutationDocument}
    {...props}
  />
);

export type LogoutMutationProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  LogoutMutationMutation,
  LogoutMutationMutationVariables
> &
  TChildProps;
export function withLogoutMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LogoutMutationMutation,
    LogoutMutationMutationVariables,
    LogoutMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    LogoutMutationMutation,
    LogoutMutationMutationVariables,
    LogoutMutationProps<TChildProps>
  >(LogoutMutationDocument, {
    alias: 'logoutMutation',
    ...operationOptions
  });
}

/**
 * __useLogoutMutationMutation__
 *
 * To run a mutation, you first call `useLogoutMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutationMutation, { data, loading, error }] = useLogoutMutationMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LogoutMutationMutation,
    LogoutMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    LogoutMutationMutation,
    LogoutMutationMutationVariables
  >(LogoutMutationDocument, baseOptions);
}
export type LogoutMutationMutationHookResult = ReturnType<
  typeof useLogoutMutationMutation
>;
export type LogoutMutationMutationResult = ApolloReactCommon.MutationResult<
  LogoutMutationMutation
>;
export type LogoutMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LogoutMutationMutation,
  LogoutMutationMutationVariables
>;

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'UNION',
        name: 'ActivityContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Resource'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'FlagContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Resource'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'LikeContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Resource'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ThreadContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          },
          {
            name: 'Flag'
          },
          {
            name: 'Resource'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'FollowContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          },
          {
            name: 'Thread'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'DeleteContext',
        possibleTypes: [
          {
            name: 'Activity'
          },
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Country'
          },
          {
            name: 'Flag'
          },
          {
            name: 'Follow'
          },
          {
            name: 'Language'
          },
          {
            name: 'Like'
          },
          {
            name: 'Resource'
          },
          {
            name: 'Thread'
          },
          {
            name: 'User'
          }
        ]
      }
    ]
  }
};

export default result;
