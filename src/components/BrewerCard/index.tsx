import { 
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  HStack,
  Link,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Tr
} from "@chakra-ui/react";

interface BrewerProps {
  abv: number,
  address: string,
  category: string,
  city: string,
  coordinates: [number, number],
  country: string,
  description: string,
  ibu: number,
  name: string,
  state: string,
  website: string,
}

interface BrewerCardProps {
  item: BrewerProps;
}

export function BrewerCard({ item }: BrewerCardProps) {
  return(
    <AccordionItem justifyContent="space-between" borderRadius="lg" bgColor="white">
      <AccordionButton flex="1" height="16">
        <Table variant="unstyled" color="yellow.700">
          <Tbody>
            <Tr>
              <Td width="230px" paddingX={3}>{!!item.name ? item.name : 'N/I'}</Td>
              <Td width="110px" paddingX={3}>{`${!!item.abv ? item.abv.toFixed(2): 'N/I'} %`}</Td>
              <Td width="100px">{!!item.ibu ? item.ibu : 'N/I'}</Td>
              <Td width="200px">{!!item.category ? item.category : 'N/I'}</Td>
              <Td width="150px">{!!item.city ? item.city : 'N/I'}</Td>
              <Td width="150px">{!!item.state ? item.state : 'N/I'}</Td>
              <Td>{item.country}</Td>
            </Tr>
          </Tbody>
        </Table>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel paddingX="8" borderRadius="md" bgColor="orange.100">
        <Stack spacing="6" color="yellow.900" marginTop="4">
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
            <HStack spacing="6">
              <HStack spacing="2">
                <Heading size="smaller">Latitude:</Heading>
                <Text>{!!item?.coordinates ? item.coordinates[0]: ''}</Text>
              </HStack>

              <HStack spacing="2">
                <Heading size="smaller">Longitude:</Heading>
                <Text>{!!item?.coordinates ? item.coordinates[1]: ''}</Text>
              </HStack>
            </HStack >

            <HStack spacing="2">
              <Heading size="smaller">Website: </Heading>
              <Link href={!!item.website ? item.website : ''}>
                {!!item.website ? item.website : 'No information'}
              </Link>
            </HStack>
          </Box>

          <Box>
            <Heading size="smaller">Description:</Heading>
            <Text marginTop="2">{` ${!!item.description ? item.description : "No description"}`}</Text>
          </Box>
          </Stack>
      </AccordionPanel>
    </AccordionItem>
  )
}