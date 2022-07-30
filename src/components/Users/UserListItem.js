import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const UserListItem = ({ singleUser, handleFunction }) => {
  return (
    <Box
      onClick={() => handleFunction(singleUser._id)}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{ backgroundColor: "#38B2AC", color: "white" }}
      w="100%"
      display="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        name={singleUser.name}
        cursor="pointer"
        src={singleUser.pic}
      />
      <Box>
        <Text>{singleUser.name}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {singleUser.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
