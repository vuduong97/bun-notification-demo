"use client";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";
import firebase from "firebase/compat/app";
import "firebase/compat/messaging";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { firebaseCloudMessaging } from "~/utils";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  const router = useRouter();

  const textFieldRef = useRef(null);

  const [token, setToken] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleGetToken();
    // Event listener that listens for the push notification event in the background
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("event for the service worker", event);
      });
    }

    // Calls the getMessage() function if the token is there
    async function handleGetToken() {
      try {
        const token = await firebaseCloudMessaging.init();
        if (token) {
          setToken(token);
          console.log("token", token);
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  // Handles the click function on the toast showing push notification
  const handleClickPushNotification = (url: string) => {
    router.push(url);
  };

  // Get the push notification message and triggers a toast to display it
  function getMessage() {
    const messaging = firebase.messaging();
    messaging.onMessage((message) => {
      console.log("vao day ne: ", message);

      toast(
        <div onClick={() => handleClickPushNotification(message?.data?.url)}>
          <h5>{message?.data?.title}</h5>
          <h6>{message?.data?.body}</h6>
        </div>,
        {
          closeOnClick: false,
        }
      );
    });
  }

  const handleCopyToClipboard = () => {
    setOpen(true);
    navigator.clipboard.writeText(token);

    setTimeout(() => {
      handleTooltipClose();
    }, 500);
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  return (
    <div className="h-screen flex w-full items-center">
      <div className="w-full">
        <h2>Project name: {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}</h2>

        <div className="flex items-center">
          <p className="mr-2">Token: </p>

          <Tooltip
            arrow
            onClose={handleTooltipClose}
            open={open}
            title="Đã sao chép"
            placement="bottom-start"
            disableHoverListener>
            <TextField
              ref={textFieldRef}
              value={token}
              disabled
              fullWidth
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleCopyToClipboard}>
                      <ContentCopyIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  padding: 0,
                },
              }}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
