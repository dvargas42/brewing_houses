import { useState } from "react";
import { Flex, FlexProps, Select } from "@chakra-ui/react";

import { useSearch } from "../../hooks/useSearch";

type FilterBoxProps = FlexProps 

export function FiltrBox({...rest}: FilterBoxProps ) {
  const { createFiltr } = useSearch()
  const [data, setData] = useState('')

  function handleChangeValeu(option: string) {
    setData(option)
    createFiltr(option)
  }
 
  return (
    <Flex
      as="label"
      flex="1"
      paddingY="2"
      paddingRight="4"
      paddingLeft="6"
      maxWidth={180}
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
        placeholder="Filtr by"
        iconColor="yellow.700"
        iconSize="3xl"
        value={data}
        onChange={event => handleChangeValeu(event.target.value)}
      >
        <option value="Establishment">Establishment</option>
        <option value="ABV">ABV</option>
        <option value="IBU">IBU</option>
        <option value="Category">Category</option>
        <option value="City">City</option>
        <option value="State">State</option>
        <option value="Country">Country</option>
      </Select>
    </Flex>
  )
}