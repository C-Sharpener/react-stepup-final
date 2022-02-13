/* eslint-disable react-hooks/exhaustive-deps */

// import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import {
  Center,
  // FormControl,
  // FormLabel,
  // Input,
  // Modal,
  // ModalBody,
  // ModalCloseButton,
  // ModalContent,
  // ModalHeader,
  // ModalOverlay,
  Spinner,
  // Stack,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(() => onOpen(), []);

  // return <p>ユーザー管理ページです</p>;
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        // <Wrap spacing="30px">
        // <Wrap>
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            //     {/* {[...Array(10)].map(() => (
            //   <WrapItem>
            //     <div
            //       style={{
            //         width: "100px",
            //         height: "100px",
            //         backgroundColor: "teal"
            //       }}
            //     />
            //   </WrapItem>
            // ))} */}
            // <WrapItem>
            // <WrapItem key={user.id}>
            <WrapItem key={user.id} mx="auto">
              {/* <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius="10px"
          shadow="md"
          p={4}
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
          <Stack textAlign="center">
            <Image
              borderRadius="full"
              boxSize="160px"
              src="https://source.unsplash.com/random"
              alt="プロフィール画像"
              m="auto"
            />
            <Text fontSize="lg" fontWeight="bold">
              じゃけぇ
            </Text>
            <Text fontSize="sm" color="gray">
              Takumi Okada
            </Text>
          </Stack>
        </Box> */}
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                // userName="じゃけぇ"
                userName={user.username}
                // fullName="Takumi Okada"
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
