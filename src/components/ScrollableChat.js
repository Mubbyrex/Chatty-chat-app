import React from "react";
import { ChatState } from "../Context/ChatProvider";
import ScrollableFeed from "react-scrollable-feed";
import {
  isSameSenderMargin,
  OppositeUser,
  oppositeUserLastChat,
  OppositeUserMargin,
  sameUserMargin,
} from "./config/ChatLogic";
import { Tooltip } from "@chakra-ui/tooltip";
import { Avatar } from "@chakra-ui/react";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  const donothing = () => {
    return;
  };

  return (
    <ScrollableFeed id="Scroll">
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}>
            {(OppositeUser(messages, m, i, user._id) ||
              oppositeUserLastChat(messages, m, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.name}
                  src={m.sender.pic}
                />
              </Tooltip>
            )}
            <span
              style={{
                backgroundColor: `${
                  m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                }`,
                marginLeft: OppositeUserMargin(messages, m, i, user._id),
                marginTop: sameUserMargin(messages, m, i, user._id) ? 3 : 10,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
              }}
            >
              {m.content}
            </span>
          </div>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
