/* eslint-disable react-hooks/exhaustive-deps */

import {
  Box,
  // Button,
  // Drawer,
  // DrawerBody,
  // DrawerContent,
  // DrawerOverlay,
  Flex,
  Heading,
  // IconButton,
  Link,
  useDisclosure
} from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";
// import { HamburgerIcon } from "@chakra-ui/icons";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  // return <div style={{ height: "50px", backgroundColor: "teal" }}></div>;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  // const onClickHome = () => history.push("/home");
  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickUserManagement = useCallback(
    () => history.push("/home/user_management"),
    []
  );
  const onClickSetting = useCallback(() => history.push("/home/setting"), []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        {/* <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}> */}
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザ管理アプリ
          </Heading>
        </Flex>
        {/* <Flex> */}
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            {/* <Link>ユーザー一覧</Link> */}
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          {/* <Link>設定</Link> */}
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        {/* <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        /> */}
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      {/* <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%">TOP</Button>
              <Button w="100%">ユーザー一覧</Button>
              <Button w="100%">設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer> */}
      {/* <MenuDrawer onClose={onClose} isOpen={isOpen} /> */}
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
