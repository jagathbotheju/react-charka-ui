import {
  Text,
  Flex,
  Heading,
  Button,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { UnlockIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();

  const showToast = () => {
    toast({
      title: "Logged Out",
      description: "Successfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      icon: <UnlockIcon />,
    });
  };

  return (
    <>
      <Flex mb="20px" as="nav" alignItems="center">
        <Heading>Dojo Tasks</Heading>
        <Spacer />

        <HStack spacing="20px">
          <Avatar src={"/img/mario.png"} cursor="pointer">
            <AvatarBadge width="1.3em" bg="purple.500">
              <Text fontSize="xs" color="white">
                3
              </Text>
            </AvatarBadge>
          </Avatar>
          <Text>mario@gmail.com</Text>
          <Button colorScheme="purple" onClick={showToast}>
            Logout
          </Button>

          {/* dark mode */}
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            variant="ghost"
          />
        </HStack>
      </Flex>
    </>
  );
};

export default Navbar;
