import { memo, ReactNode, VFC } from "react";
// import { Button, IconButton } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  // onOpen: () => void;
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

// export const MenuIconButton: VFC = memo(() => {
export const PrimaryButton: VFC<Props> = memo((props) => {
  // const { onOpen } = props;
  // const { children } = props;
  // const { children, onClick } = props;
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    // <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      // disabled={disabled}
      disabled={disabled || loading}
      // isLoading={true}
      isLoading={loading}
      onClick={onClick}
    >
      {/* ログイン */}
      {children}
    </Button>
  );
});
