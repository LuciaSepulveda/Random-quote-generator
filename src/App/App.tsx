import {Box, Text, Spinner, Button, HStack, Center, VStack} from "@chakra-ui/react"
import axios from "axios"
import * as React from "react"
import {RepeatIcon} from "@chakra-ui/icons"

import {Quote} from "../types/types"
import {useQuote, viewStatus, useUpdate} from "../context/hooks"

const App: React.FC = () => {
  const quote = useQuote()
  const status = viewStatus()
  const update = useUpdate()

  return (
    <Box h="100vh">
      {status === false && <Spinner m="auto" mt="50vh" />}
      {status === true && (
        <>
          <HStack
            h="400px"
            m="auto"
            ml={["5%", "auto"]}
            mt="22%"
            overflow="hidden"
            spacing={5}
            w={["90%", "80%", "700px"]}
          >
            <Box bg="#F7DF94" h="50%" p={1} w="8px" />
            <Center m="auto" maxHeight="400px">
              <Text
                fontSize={["16px", "36px"]}
                fontWeight="500"
                lineHeight="120%"
                m="auto"
                overflow="hidden"
                p={2}
              >
                {quote.quoteText}
              </Text>
            </Center>
            <Button
              _hover={{bg: "#F7DF94", color: "white"}}
              left={["60%", "70%", "80%", "85%", "90%"]}
              p={2}
              position="absolute"
              rightIcon={<RepeatIcon />}
              top="2%"
              transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
              variant="link"
              onClick={update}
            >
              Random
            </Button>
          </HStack>
          <VStack m="auto" ml={["5%", "auto"]} mt={["-10%", "5%", "10"]} w="50%">
            <Text color="#4F4F4F" fontSize={["18px", "24px"]} fontWeight="bold" lineHeight="28px">
              {quote.quoteAuthor}
            </Text>
            <Text color="#828282" fontSize="14px" fontWeight="500" lineHeight="16px">
              {quote.quoteGenre}
            </Text>
          </VStack>
          <HStack bottom="5" left="0" position="fixed" w="100%">
            <Text color="#828282" fontSize="14px" fontWeight="500" lineHeight="17px" m="auto">
              Created by{" "}
              <a
                href="http://github.com/LuciaSepulveda"
                style={{textDecoration: "underline", fontWeight: "bold"}}
              >
                Lucia Sepulveda
              </a>{" "}
              - devChallenges.io
            </Text>
          </HStack>
        </>
      )}
    </Box>
  )
}

export default App
