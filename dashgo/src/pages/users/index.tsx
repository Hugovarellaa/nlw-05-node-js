import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Siderbar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Siderbar />

        <Box flex="1" borderRadius={8} background="gray.800" padding="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" font-weight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                {isWideVersion && <Th width="8"></Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr px={["4", "4", "6"]}>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Text fontWeight="bold">Hugo Alves Varella</Text>
                  <Text fontSize="sm" color="gray.300">
                    hugovarellaa@gmail.com
                  </Text>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>

              <Tr px={["4", "4", "6"]}>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Text fontWeight="bold">Hugo Alves Varella</Text>
                  <Text fontSize="sm" color="gray.300">
                    hugovarellaa@gmail.com
                  </Text>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>

              <Tr px={["4", "4", "6"]}>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Text fontWeight="bold">Hugo Alves Varella</Text>
                  <Text fontSize="sm" color="gray.300">
                    hugovarellaa@gmail.com
                  </Text>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
