import * as React from "react"
import {Box, GridItem, Text} from "@chakra-ui/react"

import {Quote} from "../../types/types"

interface Props {
  elem: Quote
}

const QuoteComponent: React.FC<Props> = ({elem}) => {
  return (
    <>
      <Box bg="#F7DF94" p={1} w="8px" />
      <GridItem colSpan={6} maxHeight="400px">
        <Text
          fontSize={["16px", "36px"]}
          fontWeight="500"
          lineHeight="120%"
          m="auto"
          overflow="hidden"
          p={2}
          w="100%"
        >
          {elem.quoteText}
        </Text>
      </GridItem>
    </>
  )
}

export default QuoteComponent
