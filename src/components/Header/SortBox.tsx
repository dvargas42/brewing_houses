import { useState } from "react";
import { Flex, FlexProps, Select } from "@chakra-ui/react";

import { useSearch } from "../../hooks/useSearch";

type FilterBoxProps = FlexProps 

export function SortBox({...rest}: FilterBoxProps ) {
  const { createSort } = useSearch()
  const [data, setData] = useState('')

  function handleChangeValeu(option: string) {
    createSort(option)
    setData(option)
  }
 
  return (
    <Flex
      as="label"
      flex="1"
      paddingY="2"
      paddingRight="4"
      paddingLeft="6"
      maxWidth={160}
      alignItems="center"
      justifyContent="space-between"
      position="relative"
      backgroundColor="orange.300"
      borderRadius="full"
      {...rest}
    >
     
      <Select
        variant="unstyled"
        color="yellow.700"
        placeholder="Sort by"
        iconColor="yellow.700"
        iconSize="3xl"
        value={data}
        onChange={event => handleChangeValeu(event.target.value)}
      >
        <option value="Asc">Ascending</option>
        <option value="Desc">Descending</option>
        <option value="">None</option>
      </Select>
    </Flex>
  )
}