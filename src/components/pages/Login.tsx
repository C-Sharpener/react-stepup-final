import {
  Box,
  // Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack
} from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState<string>("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => login(userId);

  // return <p>ログインページです</p>;
  return (
    // <Flex>
    <Flex align="center" justify="center" height="100vh">
      {/* <Box> */}
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        {/* <Heading as="h1">ユーザー管理アプリ</Heading> */}
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        {/* <Divider /> */}
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          {/* <Input placeholder="ユーザーID" /> */}
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          {/* <Button>ログイン</Button> */}
          {/* <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
            ログイン
          </Button> */}
          {/* <PrimaryButton>ログイン</PrimaryButton> */}
          {/* <PrimaryButton onClick={onClickLogin}>ログイン</PrimaryButton> */}
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
