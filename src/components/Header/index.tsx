import { Box, Flex, HStack } from "@chakra-ui/react";

import { FiltrBox } from "./FiltrBox";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { SortBox } from "./SortBox";

export function Header() {
  return (
    <Flex
      as="header"
      bgColor="orange.400"
      boxShadow="0px 4px 4px 0px rgba(47, 37, 68, 0.15)"
    >
      <Flex
        maxWidth={1250}
        width="100%"
        height="24"
        marginX="auto"
        paddingX="8"
        align="center"
        justifyContent="space-between"
      >
        <Logo />

        <HStack spacing="4">
          <SortBox />
          <FiltrBox />
          <SearchBox />
        </HStack>
      </Flex>
    </Flex>
  )
}