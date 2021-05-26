import React from 'react';
import {
  Box,
  Center,
  ChakraProvider,
  HStack,
  Icon,
  Text,
  theme,
  VStack,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import {FaPlay, FaPause, FaRedo, FaArrowDown, FaArrowUp} from "react-icons/fa"



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center color="white" backgroundColor="red.400" h="100vh" > 
        <VStack spacing={4} w="400px" >
          <Text fontSize="4xl" >25 + 5 Clock</Text>
          <HStack justifyContent="space-around" width="100%">
            <Box>
              <Text fontSize="xl" >Break Length</Text>
              <HStack justifyContent="center" >
              <Icon cursor="pointer" as={FaArrowDown} />
                <Text>5</Text>
                <Icon cursor="pointer" as={FaArrowUp} />
              </HStack>
            </Box>
            <Box>
              <Text fontSize="xl" >Session Length</Text>
              <HStack justifyContent="center" >
                <Icon cursor="pointer" as={FaArrowDown} />
                <Text  >25</Text>
                <Icon cursor="pointer" as={FaArrowUp} />
              </HStack>
            </Box>
          </HStack>
          <VStack width="250px" border="4px solid" borderColor="blackAlpha.400" borderRadius={10} >
            <Text fontSize="2xl">Session</Text>
            <Text fontSize="6xl">25:00</Text>
          </VStack>
          <HStack>
            <Icon cursor="pointer" as={FaPlay} />
            <Icon cursor="pointer" as={FaPause} />
            <Icon cursor="pointer" as={FaRedo} />
          </HStack>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
