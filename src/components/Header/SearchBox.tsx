import { useState } from "react";
import { Flex, Icon, Input, FlexProps } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

import { useSearch } from "../../hooks/useSearch";

type SearchBoxProps = FlexProps 

export function SearchBox({...rest}: SearchBoxProps ) {
  const { createSearch } = useSearch()
  const [data, setData] = useState('')

  function handleRequestInput() {
    createSearch(data)
  }

  function handleClearInput() {
    setData('')
    createSearch('')
  }

  return (
    <Flex
      as="label"
      flex="1"
      paddingY="4"
      paddingRight="8"
      paddingLeft="3"
      marginLeft= "6"
      maxWidth={280}
      alignItems="center"
      justifyContent="space-between"
      position="relative"
      backgroundColor="orange.300"
      borderRadius="full"
      {...rest}
    >
     
      <Input
        color="yellow.700"
        variant="unstyled"
        paddingX="4"
        marginRight="4"
        placeholder="Search the platform"
        value={data}
        onFocus={() => setData('')}
        onClick ={() => handleClearInput()}
        onChange={event => setData(event.target.value)}
        onKeyPress={event => ( event.key === 'Enter' && handleRequestInput())}
        _placeholder={{
          color: 'yellow.700',
        }}
      />
      <Icon as={RiSearchLine} fontSize="20" color="yellow.700"/>
    </Flex>
  )
}