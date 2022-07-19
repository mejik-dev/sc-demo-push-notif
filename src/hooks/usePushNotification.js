import { gql, useMutation } from "@apollo/client";

export const usePushNotification = () => {
  const PLAYER_ID_MUTATION = gql`
    mutation {
      sendPushNotification(input: { contents: "This is Push Notification" }) {
        message
      }
    }
  `;

  const [formPushNotif, { data, loading, error }] =
    useMutation(PLAYER_ID_MUTATION);

  return {
    PLAYER_ID_MUTATION,
    loading,
    error,
    data,
    formPushNotif,
  };
};
