import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

export const usePushNotification = () => {
  const SEND_PUSH_MUTATION = gql`
    mutation sendPushNotification($input: PushNotificationInput!) {
      sendPushNotification(input: $input) {
        message
      }
    }
  `;

  const [content, setContent] = useState("");

  const [sendPushNotif, { loading, error }] = useMutation(SEND_PUSH_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendPushNotif({
        variables: {
          input: { contents: content },
        },
      });
      setContent("");
    } catch (error) {
      console.log(error);
      alert("Failed");
    }
  };

  return {
    SEND_PUSH_MUTATION,
    loading,
    error,
    setContent,
    sendPushNotif,
    handleSubmit,
  };
};
