import React,{useState, useRef, useEffect} from 'react';
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
  const breakRef = useRef(5)
  const sessionRef = useRef(25)
  const mounted = useRef(false)
  const [session, setSession] = useState(sessionRef.current)
  const [breakSess, setBreakSess] = useState(breakRef.current)
  const [clockState, setClockState] = useState("paused")
  const [currentSession, setCurrentSession] = useState(session)
  
  const currentSessionRef = useRef(session)

  const handleDecrement = (e) => {
    if(e.currentTarget.id.includes("break")){
      breakSess > 1 && setBreakSess(breakSess - 1)
    }else{
      session > 1 && setSession(session - 1)
      currentSession > 1 && setCurrentSession(session - 1) 
    }  
  }

  const handleIncrement = (e) => {
    if(e.currentTarget.id.includes("break")){
      breakSess < 60 && setBreakSess(breakSess + 1)
    }else{
      session < 60 && setSession(session + 1)
      currentSession < 60 && setCurrentSession(session + 1) 
    } 
  }

  const handleReset = () => {
    setSession(sessionRef.current)
    setBreakSess(breakRef.current)
    setCurrentSession(sessionRef.current)
  }

  const handlePlay = (e) => {
    setClockState("playing")
  }

  

  useEffect(() => {
    if(!mounted.current){
      mounted.current = true
      console.log("hola")
    }else{
      setTimeout(()=>setCurrentSession(currentSession-1),1000)
    }
    
  }, [currentSession])
  



  return (
    <ChakraProvider theme={theme}>
      <Center color="white" backgroundColor="red.400" h="100vh" > 
        <VStack spacing={4} w="400px" >
          <Text fontSize="4xl" >25 + 5 Clock</Text>
          <HStack justifyContent="space-around" width="100%">
            <Box>
              <Text id="break-label" fontSize="xl" >Break Length</Text>
              <HStack justifyContent="center" >
              <Icon id="break-decrement"  cursor="pointer" onClick={(e) => handleDecrement(e)} as={FaArrowDown} />
                <Text id="break-length" >{breakSess}</Text>
                <Icon id="break-increment"  cursor="pointer" onClick={(e) => handleIncrement(e)} as={FaArrowUp} />
              </HStack>
            </Box>
            <Box>
              <Text id="session-label" fontSize="xl" >Session Length</Text>
              <HStack justifyContent="center" >
                <Icon id="session-decrement" cursor="pointer" onClick={(e) => handleDecrement(e)}  as={FaArrowDown} />
                <Text id="session-length" >{session}</Text>
                <Icon id="session-increment"  cursor="pointer" onClick={(e) => handleIncrement(e)} as={FaArrowUp} />
              </HStack>
            </Box>
          </HStack>


          <VStack width="250px" border="4px solid" borderColor="blackAlpha.400" borderRadius={10} >
            <Text id="timer-label" fontSize="2xl">Session</Text>
            <Text id="time-left" fontSize="6xl">{currentSession}:00</Text>
          </VStack>


          <HStack>
            <HStack id="start_stop" >
              <Icon cursor="pointer" onClick={handlePlay} as={FaPlay} />
              {/* <Icon cursor="pointer" as={FaPause} /> */}
            </HStack  >
            <Icon id="reset" cursor="pointer" onClick={handleReset} as={FaRedo} />
          </HStack>
        </VStack>
        {/* <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" ></audio> */}
      </Center>
    </ChakraProvider>
  );
}

export default App;
