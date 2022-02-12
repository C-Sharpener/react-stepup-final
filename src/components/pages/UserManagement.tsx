import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  // return <p>ユーザー管理ページです</p>;
  return (
    // <Wrap spacing="30px">
    // <Wrap>
    <Wrap p={{ base: 4, md: 10 }}>
      {/* {[...Array(10)].map(() => (
        <WrapItem>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "teal"
            }}
          />
        </WrapItem>
      ))} */}
      <WrapItem>
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
          userName="じゃけぇ"
          fullName="Takumi Okada"
        />
      </WrapItem>
    </Wrap>
  );
});
