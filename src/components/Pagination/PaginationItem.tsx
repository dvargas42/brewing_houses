import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ 
  number, 
  onPageChange,
  isCurrent = false 
}: PaginationItemProps) {
  
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="orange"
        disabled
        _disabled={{
          backgroundColor: 'orange.300',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }
  return(
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      backgroundColor="gray.100"
      color="yellow.900"
      _hover={{
        backgroundColor: 'gray.200'
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}