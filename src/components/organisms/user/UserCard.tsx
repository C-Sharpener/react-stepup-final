import { Box, Image, Stack, Text } from "@chakra-ui/react";
// import { memo, ReactNode, VFC } from "react";
import { memo, VFC } from "react";

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName } = props;
  return (
    <Box
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
          // src="https://source.unsplash.com/random"
          src={imageUrl}
          // alt="プロフィール画像"
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {/* じゃけぇ */}
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {/* Takumi Okada */}
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
