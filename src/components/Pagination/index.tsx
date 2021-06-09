import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    }).filter(page => page > 0)
}


export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    :[]

  return (
    <Stack
      direction="row"
      spacing="6"
      marginTop="6"
      justifyContent="space-between"
      alignItems="center"
    >
      
      <Box color="yellow.800">
        <strong>{currentPage * 10 - 9}</strong> - <strong>{currentPage * 10}</strong> de <strong>{totalCountOfRegisters}</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {(currentPage - siblingsCount)  > 1 && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {(currentPage - siblingsCount) > 2 && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}
        
        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} /> 
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + siblingsCount) < (lastPage - 1) && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
       
      </Stack>
    </Stack>
  )
}