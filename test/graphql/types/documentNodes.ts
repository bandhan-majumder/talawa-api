// DO NOT USE HARDCODE VALUES FOR VARIABLES IN THE GRAPHQL DOCUMENT NODES, PROVIDE THEM EXPLICITLY IN THE TESTS WHERE THE DOCUMENT NODES ARE USED IN.

import { initGraphQLTada } from "gql.tada";
import type { ClientCustomScalars } from "~/src/graphql/scalars/index";
import type { introspection } from "./gql.tada";

const gql = initGraphQLTada<{
	introspection: introspection;
	scalars: ClientCustomScalars;
}>();

export const Mutation_createUser =
	gql(`mutation Mutation_createUser($input: MutationCreateUserInput!) {
    createUser(input: $input){
        authenticationToken
        user {
            addressLine1
            addressLine2
            birthDate
            city
            id
            countryCode
            createdAt
            description
            educationGrade
            emailAddress
            employmentStatus
            homePhoneNumber
            isEmailAddressVerified
            maritalStatus
            mobilePhoneNumber
            name
            natalSex
            postalCode
            role
            state
            workPhoneNumber
        }
    }
}`);

export const Mutation_deleteCurrentUser =
	gql(`mutation Mutation_deleteCurrentUser {
    deleteCurrentUser {
        id
    }
}`);

export const Mutation_deleteUser =
	gql(`mutation Mutation_deleteUser($input: MutationDeleteUserInput!) {
    deleteUser(input: $input) {
        addressLine1
        addressLine2
        birthDate
        city
        countryCode
        createdAt
        description
        educationGrade
        emailAddress
        employmentStatus
        homePhoneNumber
        id
        isEmailAddressVerified
        maritalStatus
        mobilePhoneNumber
        name
        natalSex
        postalCode
        role
        state
        workPhoneNumber
    }
}`);

export const Mutation_signUp =
	gql(`mutation Mutation_signUp($input: MutationSignUpInput!) {
    signUp(input: $input) {
        authenticationToken
        user {
            addressLine1
            addressLine2
            birthDate
            city
            countryCode
            createdAt
            description
            educationGrade
            emailAddress
            employmentStatus
            homePhoneNumber
            id
            isEmailAddressVerified
            maritalStatus
            mobilePhoneNumber
            name
            natalSex
            postalCode
            role
            state
            workPhoneNumber
        }
    }
}`);

export const Mutation_updateCurrentUser =
	gql(`mutation Mutation_updateCurrentUser($input: MutationUpdateCurrentUserInput!) {
    updateCurrentUser(input: $input) {
        addressLine1
        addressLine2
        birthDate
        city
        countryCode
        createdAt
        description
        educationGrade
        emailAddress
        employmentStatus
        homePhoneNumber
        id
        isEmailAddressVerified
        maritalStatus
        mobilePhoneNumber
        name
        natalSex
        postalCode
        role
        state
        workPhoneNumber
    }
}`);

export const Mutation_updateUser =
	gql(`mutation Mutation_updateUser($input: MutationUpdateUserInput!) {
    updateUser(input: $input) {
        addressLine1
        addressLine2
        birthDate
        city
        countryCode
        createdAt
        description
        educationGrade
        emailAddress
        employmentStatus
        homePhoneNumber
        id
        isEmailAddressVerified
        maritalStatus
        mobilePhoneNumber
        name
        natalSex
        postalCode
        role
        state
        workPhoneNumber
    }
}`);

export const Query_currentUser = gql(`query Query_currentUser {
    currentUser {
        addressLine1
        addressLine2
        birthDate
        city
        countryCode
        createdAt
        description
        educationGrade
        emailAddress
        employmentStatus
        homePhoneNumber
        id
        isEmailAddressVerified
        maritalStatus
        mobilePhoneNumber
        name
        natalSex
        postalCode
        role
        state
        workPhoneNumber
    }
}`);

export const Query_renewAuthenticationToken =
	gql(`query Query_renewAuthenticationToken {
    renewAuthenticationToken
}`);

export const Query_signIn = gql(`query Query_signIn($input: QuerySignInInput!) {
    signIn(input: $input) {
        authenticationToken
        user {
            addressLine1
            addressLine2
            birthDate
            city
            countryCode
            createdAt
            description
            educationGrade
            emailAddress
            employmentStatus
            homePhoneNumber
            id
            isEmailAddressVerified
            maritalStatus
            mobilePhoneNumber
            name
            natalSex
            postalCode
            role
            state
            workPhoneNumber
        }
    }
}`);

export const Query_user = gql(`query Query_user($input: QueryUserInput!) {
    user(input: $input) {
        addressLine1
        addressLine2
        birthDate
        city
        countryCode
        createdAt
        description
        educationGrade
        emailAddress
        employmentStatus
        homePhoneNumber
        id
        isEmailAddressVerified
        maritalStatus
        mobilePhoneNumber
        name
        natalSex
        postalCode
        role
        state
        workPhoneNumber
    }
}`);

export const Query_allUsers = gql(`
  query Query_allUsers(
    $first: Int,
    $after: String,
    $last: Int,
    $before: String,
    $where: QueryAllUsersWhereInput
  ) {
    allUsers(
      first: $first,
      after: $after,
      last: $last,
      before: $before,
      where: $where
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          name
          emailAddress
          role
          createdAt
          isEmailAddressVerified
          addressLine1
          addressLine2
          birthDate
          city
          countryCode
          description
          educationGrade
          employmentStatus
          homePhoneNumber
          maritalStatus
          mobilePhoneNumber
          natalSex
          postalCode
          state
          workPhoneNumber
        }
      }
    }
  }
`);

export const Query_user_creator =
	gql(`query Query_user_creator($input: QueryUserInput!) {
    user(input: $input) {
        creator {
            addressLine1
            addressLine2
            birthDate
            city
            countryCode
            createdAt
            description
            educationGrade
            emailAddress
            employmentStatus
            homePhoneNumber
            id
            isEmailAddressVerified
            maritalStatus
            mobilePhoneNumber
            name
            natalSex
            postalCode
            role
            state
            workPhoneNumber
        }
    }
}`);

export const Query_user_updatedAt =
	gql(`query Query_user_updatedAt($input: QueryUserInput!) {
    user(input: $input) {
        updatedAt
    }
}`);

export const Query_user_updater =
	gql(`query Query_user_updater($input: QueryUserInput!) {
    user(input: $input) {
        updater {
            addressLine1
            addressLine2
            birthDate
            city
            countryCode
            createdAt
            description
            educationGrade
            emailAddress
            employmentStatus
            homePhoneNumber
            id
            isEmailAddressVerified
            maritalStatus
            mobilePhoneNumber
            name
            natalSex
            postalCode
            role
            state
            workPhoneNumber
        }
    }
}`);

export const Query_fund = gql(`query Query_fund($input: QueryFundInput!) {
    fund(input: $input) {
      id
      isTaxDeductible
      name
    }
  }`);

export const Mutation_createOrganization =
	gql(`mutation Mutation_createOrganization($input: MutationCreateOrganizationInput!) {
    createOrganization(input: $input) {
      id
      name
      countryCode
    }
  }`);

export const Mutation_createFund =
	gql(`mutation Mutation_createFund($input: MutationCreateFundInput!) {
    createFund(input: $input) {
      id
      name
      isTaxDeductible
    }
  }`);

export const Mutation_createOrganizationMembership =
	gql(`mutation Mutation_createOrganizationMembership($input: MutationCreateOrganizationMembershipInput!) {
    createOrganizationMembership(input: $input) {
      id
    }
  }`);

export const Mutation_deleteFund =
	gql(`mutation Mutation_deleteFund($input: MutationDeleteFundInput!) {
    deleteFund(input: $input) {
      id
      name
      isTaxDeductible
    }
}`);

export const Mutation_deleteOrganization =
	gql(`mutation Mutation_deleteOrganization($input: MutationDeleteOrganizationInput!) {
    deleteOrganization(input: $input) {
      id
      name
      countryCode
    }
}`);

export const Mutation_deleteOrganizationMembership =
	gql(`mutation Mutation_deleteOrganizationMembership($input: MutationDeleteOrganizationMembershipInput!) {
    deleteOrganizationMembership(input: $input) {
      id
      name
      countryCode
    }
}`);

export const Query_post = gql(`query Query_post($input: QueryPostInput!) {
    post(input: $input) {
        id
        organization {
            countryCode
        }
    }
}`);

export const Query_event = gql(`query Query_event($input: QueryEventInput!) {
    event(input: $input) {
        id
        name
        description
        startAt
        endAt
        creator {
            id
            name
        }
        organization {
            id
            countryCode
        }
    }
}`);

export const Mutation_createEvent =
	gql(`mutation Mutation_createEvent($input: MutationCreateEventInput!) {
    createEvent(input: $input) {
        id
        name
        description
        startAt
        endAt
        createdAt
        creator{
            id
            name
        }
        organization {
            id
            countryCode
        }
    }
}`);

export const Mutation_deleteEvent =
	gql(`mutation Mutation_deleteEvent($input: MutationDeleteEventInput!) {
    deleteEvent(input: $input) {
        id
    }
}`);

export const Mutation_updateEvent =
	gql(`mutation Mutation_updateEvent($input: MutationUpdateEventInput!) {
    updateEvent(input: $input) {
        id
        name
        description
        startAt
        endAt
        updatedAt
        organization {
            id
            countryCode
        }
    }
}`);

export const Query_tag = gql(`
    query tag($input:QueryTagInput!) {
  tag(input: $input) {
    id
    name
    organization {
      id
    }
    createdAt
  }
}`);

export const Mutation_createTag = gql(`
  mutation CreateTag($input:MutationCreateTagInput!) {
    createTag(input: $input) {
      id
      name
      createdAt
      organization{
        id
        name
        createdAt

        }
    }
  }`);

export const Query_organizations = gql(`
	query Query_organizations {
		organizations {
			id
      avatarURL
      name
      city
      state
      countryCode
		}
	}
`);

export const Query_blockedUsers = gql(`
	query BlockedUsers(
		$organizationId: String!
		$first: Int
		$after: String
		$last: Int
		$before: String
	) {
		organization(input:{id: $organizationId}) {
			id
			blockedUsers(
				first: $first
				after: $after
				last: $last
				before: $before
			) {
				edges {
					cursor
					node {
						id
						name
						role
					}
				}
				pageInfo {
					hasNextPage
					hasPreviousPage
					startCursor
					endCursor
				}
			}
		}
	}
`);

export const Query_organization = gql(`
    query Organization($input: QueryOrganizationInput!, $first: Int, $after: String,$last: Int, $before: String, $where: MembersWhereInput) {
      organization(input: $input) {
        id
        name
        members(first: $first, after: $after, last: $last, before: $before, where: $where) {
          pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
          }
          edges {
          cursor
            node {
              id
              name
              role
            }
          }
        }
      }
    }
  `);

export const Query_agendaItem =
	gql(`query Query_agendaItem($input: QueryAgendaItemInput!) {
  agendaItem(input: $input) {
    id
    name
    description
    duration
    key
    type
  }
}`);

export const Mutation_createAgendaFolder = gql(`
  mutation Mutation_createAgendaFolder($input: MutationCreateAgendaFolderInput!) {
    createAgendaFolder(input: $input) {
      id
      name
      event {
        id
      }
    }
  }
`);

export const Mutation_createAgendaItem = gql(`
  mutation Mutation_createAgendaItem($input: MutationCreateAgendaItemInput!) {
    createAgendaItem(input: $input) {
      id
      name
      description
      duration
      type
    }
  }
`);

export const Mutation_updateAgendaItem = gql(`
  mutation Mutation_updateAgendaItem($input: MutationUpdateAgendaItemInput!) {
    updateAgendaItem(input: $input) {
      id
      name
      description
      duration
      type
    }
  }
`);
export const Mutation_deleteAgendaItem = gql(`
  mutation Mutation_deleteAgendaItem($input: MutationDeleteAgendaItemInput!) {
    deleteAgendaItem(input: $input) {
      id
      name
    }
  }
`);

export const Mutation_deletePost = gql(`
  mutation Mutation_deletePost($input: MutationDeletePostInput!) {
    deletePost(input: $input) {
      id
      attachments {
        mimeType
        fileHash
        name
        objectName
        id
      }
    }
  }
`);

export const Mutation_createPost = gql(`
  mutation Mutation_createPost($input: MutationCreatePostInput!) {
    createPost(input: $input) {
      id
      caption
      pinnedAt
      organization {
        id
      }
      attachments {
        mimeType
        objectName
        fileHash
        name
      }
    }
  }
`);

export const Mutation_createPresignedUrl = gql(`
  mutation Mutation_createPresignedUrl($input: MutationCreatePresignedUrlInput!) {
    createPresignedUrl(input: $input) {
      presignedUrl
      objectName
      requiresUpload
       }
  }
`);

export const Mutation_createGetfileUrl = gql(`
  mutation Mutation_createGetfileUrl($input: MutationCreateGetfileUrlInput!) {
    createGetfileUrl(input: $input) {
      presignedUrl
    }
  }
`);

export const Mutation_blockUser =
	gql(`mutation Mutation_blockUser($organizationId: ID!, $userId: ID!) {
    blockUser(organizationId: $organizationId, userId: $userId)
}`);

export const Mutation_unblockUser =
	gql(`mutation Mutation_unblockUser($organizationId: ID!, $userId: ID!) {
    unblockUser(organizationId: $organizationId, userId: $userId)
}`);

export const Mutation_updatePost = gql(`
  mutation Mutation_updatePost($input: MutationUpdatePostInput!) {
    updatePost(input: $input) {
      id
      pinnedAt
      attachments {
        mimeType
        fileHash
        name
        objectName
        id
      }
    }
  }
`);

export const Mutation_createChat = gql(`
  mutation Mutation_createChat($input: MutationCreateChatInput!) {
    createChat(input: $input) {
      id
      name
    }
  }
`);

export const Mutation_createChatMessage = gql(`
 mutation Mutation_createChatMessage($input: MutationCreateChatMessageInput!) {
  createChatMessage(input: $input) {
    id
    body
    createdAt
    updatedAt
    parentMessage {
      id
    }
    chat {
      id
      name
      createdAt
      creator {
        id
        name
      }
    }
    creator {
      id
      name
    }
  }
}
`);

export const Mutation_updateChatMessage = gql(`
  mutation Mutation_updateChatMessage($input: MutationUpdateChatMessageInput!) {
  updateChatMessage(input: $input) {
    id
    body
    createdAt
    updatedAt
    parentMessage {
      id
    }
    chat {
      id
      name
      createdAt
      updatedAt
      creator {
        id
        name
      }
    }
    creator {
      id
      name
    }
  }
}
`);

export const Mutation_createChatMembership = gql(`
  mutation Mutation_createChatMembership($input: MutationCreateChatMembershipInput!) {
  createChatMembership(input: $input) {
    id
    createdAt
    updatedAt
    creator {
      id
      name
    }
  }
}
`);

export const Mutation_joinPublicOrganization = gql(`
  mutation Mutation_joinPublicOrganization($input: MutationJoinPublicOrganizationInput!) {
    joinPublicOrganization(input: $input) {
      memberId
      organizationId
      role
      creatorId
    }
  }
`);
