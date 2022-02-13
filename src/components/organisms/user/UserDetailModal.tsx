import {
  // Box,
  FormControl,
  FormLabel,
  // Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
  // Text
} from "@chakra-ui/react";
// import { memo, ReactNode, VFC } from "react";
import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  // const { imageUrl, userName, fullName } = props;
  // const { isOpen, onClose } = props;
  // const { user, isOpen, onClose } = props;
  const { user, isOpen, isAdmin = false, onClose } = props;

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

  const onClickUpdate = () => alert();

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
      {/* <ModalContent pb={6}> */}
      <ModalContent pb={2}>
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
              {/* <Input value={user?.username} isReadOnly /> */}
              {/* <Input value={user?.username} isReadOnly={!isAdmin} /> */}
              {/* <Input value={username} isReadOnly={!isAdmin} /> */}
              <Input
                value={username}
                onChange={onChangeUsername}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              {/* <Input value="Takumi Okada" isReadOnly /> */}
              {/* <Input value={user?.name} isReadOnly /> */}
              {/* <Input value={user?.name} isReadOnly={!isAdmin} /> */}
              {/* <Input value={name} isReadOnly={!isAdmin} /> */}
              <Input
                value={name}
                onChange={onChangeName}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              {/* <Input value="12345@example.com" isReadOnly /> */}
              {/* <Input value={user?.email} isReadOnly /> */}
              {/* <Input value={user?.email} isReadOnly={!isAdmin} /> */}
              {/* <Input value={email} isReadOnly={!isAdmin} /> */}
              <Input
                value={email}
                onChange={onChangeEmail}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              {/* <Input value="090-1111-2222" isReadOnly /> */}
              {/* <Input value={user?.phone} isReadOnly /> */}
              {/* <Input value={user?.phone} isReadOnly={!isAdmin} /> */}
              {/* <Input value={phone} isReadOnly={!isAdmin} /> */}
              <Input
                value={phone}
                onChange={onChangePhone}
                isReadOnly={!isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
