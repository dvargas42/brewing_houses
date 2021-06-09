import { HStack, Img, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <HStack spacing="4">
      <Img height="20" src="./image/logo.png" alt="Logo" />

      <Text
        width="64"
        fontSize="3xl"
        fontWeight= "bold"
        letterSpacing="tight"
        color="white"
      >
        Brewing Houses
        <Text as="span" marginLeft="1" color="yellow.200">.</Text>
      </Text>
    </HStack>
  )
}