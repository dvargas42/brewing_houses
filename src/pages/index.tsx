import { useState } from "react";
import Head from "next/head";
import { Accordion, Box, Flex, Spinner, Text } from "@chakra-ui/react";

import { Pagination } from "../components/Pagination";
import { BrewerCard } from "../components/BrewerCard";
import { TableHeader } from "../components/TableHeader";
import { useSearch } from "../hooks/useSearch";


export default function Home() {
  const [page, setPage] = useState(1)

  const { data, isLoading, error, totalCount } = useSearch()

  
  return (
    <Flex  maxWidth={1250} width="100vw" height="100vh" marginTop="8" marginX="auto" paddingX="6">
      <Head>
        <title>Home | Brewing Houses</title>
      </Head>

      <Box flex="1" borderRadius={8}>
        { isLoading ? (
          <Flex justifyContent="center">
            <Spinner />
          </Flex>

        ) : error ? (
          <Flex justifyContent="center">
            <Text>Falha ao obter dados dos usuários</Text>
          </Flex>
          
        ) : (
          <>
            <TableHeader />

            <Accordion allowMultiple>
            {data.map((item, index) => (index >= (page * 10 - 10)) && (index < (page * 10)) && (
              <BrewerCard item={item} key={index}/>
            ))}
            </Accordion>

            <Pagination
              totalCountOfRegisters={totalCount}
              currentPage={page}
              onPageChange={setPage}
            />
          </>
        )}
      </Box>
    </Flex>
  )
}
