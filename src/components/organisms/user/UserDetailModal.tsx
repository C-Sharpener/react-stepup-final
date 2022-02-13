import {
  Box,
  FormControl,
  FormLabel,
  // Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack
  // Text
} from "@chakra-ui/react";
// import { memo, ReactNode, VFC } from "react";
import { memo, VFC } from "react";
import { User } from "../../../types/api/user";

type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  // const { imageUrl, userName, fullName } = props;
  // const { isOpen, onClose } = props;
  const { user, isOpen, onClose } = props;
  return (
    // <Modal isOpen={isOpen} onClose={onClose}>
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      {/* <ModalContent> */}
      <ModalContent pb={6}>
        {/* <p>テスト</p> */}
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        {/* <ModalBody> */}
        <ModalBody mx={4}>
          {/* <Stack> */}
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              {/* <Input value="じゃけぇ" isReadOnly /> */}
              <Input value={user?.username} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              {/* <Input value="Takumi Okada" isReadOnly /> */}
              <Input value={user?.name} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              {/* <Input value="12345@example.com" isReadOnly /> */}
              <Input value={user?.email} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              {/* <Input value="090-1111-2222" isReadOnly /> */}
              <Input value={user?.phone} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
