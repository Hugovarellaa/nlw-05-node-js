import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        font-size="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          background: "pink.500",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  }
  return (
    <Button size="sm" font-size="xs" width="4" colorScheme="pink">
      {number}
    </Button>
  );
}