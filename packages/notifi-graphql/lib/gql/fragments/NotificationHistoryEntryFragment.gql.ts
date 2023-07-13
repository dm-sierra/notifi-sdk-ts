import { gql } from 'graphql-request';

export const NotificationHistoryEntryFragment = gql`
  fragment NotificationHistoryEntryFragment on NotificationHistoryEntry {
    id
    createdDate
    eventId
    read
    sourceAddress
    category
    transactionSignature
    targets {
      type
      name
    }
    detail {
      __typename
      ... on AccountBalanceChangedEventDetails {
        walletBlockchain
        direction
        newValue
        previousValue
        tokenSymbol
        isWhaleWatch
      }
      ... on BroadcastMessageEventDetails {
        messageType: type
        subject
        message
      }
      ... on DirectTenantMessageEventDetails {
        tenantName
      }
      ... on NftCollectionsReportEventDetails {
        type
        providerName
        sourceLink
        collections {
          collectionId
          name
          imgUrl
          volume1Day
          volume1DayChange
        }
      }
      ... on ChatMessageReceivedEventDetails {
        senderName
        conversationId
        messageId
        senderId
        senderBlockchain
        senderName
        messageBody
      }
      ... on DAOProposalChangedEventDetails {
        tenantName
        proposalTitle: title
        description
        state
        daoUrl
        proposalUrl
      }
      ... on NftAuctionChangedEventDetails {
        auctionTitle: title
        auctionUrl
        walletBlockchain
        highBidAmount
        highBidSymbol
        imageUrl
      }
      ... on WalletsActivityReportEventDetails {
        providerName
        sourceLink
        walletActivityType: type
        wallets {
          address
          volume1Day
          maxPurchase1Day
          maxPurchaseName
          maxPurchaseImgUrl
          maxPurchaseTokenAddress
        }
      }
      ... on HealthValueOverThresholdEventDetails {
        name
        value
        threshold
        url
      }
      ... on GenericEventDetails {
        sourceName
        notificationTypeName
        genericMessage: message
        eventDetailsJson
        action {
          name
          url
        }
        icon
      }
    }
  }
`;
