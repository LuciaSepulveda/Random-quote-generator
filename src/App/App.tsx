import {Box, Text, Spinner, Button, HStack, VStack, Grid, GridItem} from "@chakra-ui/react"
import * as React from "react"
import {ArrowForwardIcon, RepeatIcon} from "@chakra-ui/icons"

import QuoteComponent from "../components/Quote/QuoteComponent"
import {useQuote, viewStatus, useUpdate, useQuotes} from "../context/hooks"

const App: React.FC = () => {
  const [color, setColor] = React.useState<string>("#4F4F4F")
  const [allQuotes, setAllquotes] = React.useState<boolean>(false)
  const quote = useQuote()
  const status = viewStatus()
  const update = useUpdate()
  const quotes = useQuotes()

  const randomButton = () => {
    update()
    setAllquotes(false)
  }

  return (
    <VStack h="100%" w="100%">
      {status === false && <Spinner m="auto" mt="50vh" />}
      {status === true && (
        <VStack h="100%" justify="center" m="auto" mt={["0", "10%", "5%"]} w={["90%", "80%"]}>
          {allQuotes === false && (
            <>
              <Grid
                m="auto"
                ml={["5%", "auto"]}
                rowGap="30%"
                templateColumns="repeat(7, 1fr)"
                w={["90%", "80%", "80%", "60%"]}
              >
                <QuoteComponent elem={quote} />
                <GridItem colSpan={1} />
                <GridItem colSpan={6}>
                  <HStack
                    _hover={{bg: "#333333", color: "white", boxShadow: "md"}}
                    as="button"
                    justify="space-between"
                    m="auto"
                    p="5% 10%"
                    w="100%"
                    onClick={() => setAllquotes(true)}
                    onMouseOut={() => setColor("#4F4F4F")}
                    onMouseOver={() => setColor("#F2F2F2")}
                    transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
                  >
                    <VStack>
                      <Text
                        color={color}
                        fontSize={["18px", "24px"]}
                        fontWeight="bold"
                        lineHeight="28px"
                      >
                        {quote.quoteAuthor}
                      </Text>
                      <Text color="#828282" fontSize="14px" fontWeight="500" lineHeight="16px">
                        {quote.quoteGenre}
                      </Text>
                    </VStack>
                    <ArrowForwardIcon />
                  </HStack>
                </GridItem>
              </Grid>
              <Button
                _hover={{bg: "#F7DF94", color: "white"}}
                left={["60%", "70%", "80%", "85%", "90%"]}
                p={2}
                position="absolute"
                rightIcon={<RepeatIcon />}
                top="2%"
                transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
                variant="link"
                onClick={randomButton}
              >
                Random
              </Button>
              <Box h="100px" />
            </>
          )}
          {allQuotes === true && (
            <Box>
              <Text
                color="#333333"
                fontSize="36px"
                fontWeight="bold"
                lineHeight="42px"
                m={10}
                mb="5%"
                ml="-20%"
                mt="-1%"
              >
                {quote.quoteAuthor}
              </Text>
              <Grid
                m="auto"
                ml={["5%", "auto"]}
                mt="5%"
                rowGap="10%"
                templateColumns="repeat(7, 1fr)"
                w={["90%", "80%", "80%", "60%"]}
              >
                {quotes.map((elem) => {
                  return <QuoteComponent key={elem._id} elem={elem} />
                })}
              </Grid>
              <Button
                _hover={{bg: "#F7DF94", color: "white"}}
                left={["60%", "70%", "80%", "85%", "90%"]}
                p={2}
                position="absolute"
                rightIcon={<RepeatIcon />}
                top="2%"
                transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
                variant="link"
                onClick={randomButton}
              >
                Random
              </Button>
            </Box>
          )}
        </VStack>
      )}
      <HStack bg="white" bottom="1" left="0" p={1} position="fixed" w="100%">
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
    </VStack>
  )
}

export default App
