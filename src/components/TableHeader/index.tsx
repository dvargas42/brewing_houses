import {
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Table,
  Tbody,
  Td,
  Tr
} from "@chakra-ui/react";

export function TableHeader() {
  return (
    <Table marginLeft={4}  variant="unstyled" color="yellow.800" fontWeight="bold" fontSize="sm">
      <Tbody >
        <Tr>
          <Td paddingY={2} width="228px" paddingX={3}>ESTABLISHMENT</Td>
          <Td paddingY={2} width="110px" paddingX={3}>
            <Popover isLazy>
              <PopoverTrigger>
                <Link>ABV</Link>
              </PopoverTrigger>
              
              <PopoverContent>
                <PopoverHeader fontWeight="semibold">Alcohol By Volume</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  It is the basic nomenclature to talk about the alcoholic
                  content of the beer, that is, 5% of ABV is
                  equal to a beer with 5% of alcohol.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Td>

          <Td paddingY={2} width="100px">
            <Popover isLazy>
              <PopoverTrigger>
                <Link> IBU</Link>
              </PopoverTrigger>
              
              <PopoverContent>
                <PopoverHeader fontWeight="semibold">International Bitterness Units</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  An IBU is defined as 1 mg iso-alpha-acid per liter of 
                  solution. In the brewery the bitterness measurement 
                  in IBU is widely used.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Td>

          <Td paddingY={2} width="200px">CATEGORY</Td>
          <Td paddingY={2} width="150px">CITY</Td>
          <Td paddingY={2} width="150px">STATE</Td>
          <Td paddingY={2}>COUNTRY</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}