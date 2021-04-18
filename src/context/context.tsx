import React, {useCallback} from "react"
import axios from "axios"
import {Spinner} from "@chakra-ui/react"

import {Quote} from "../types/types"

export interface Context {
  state: {
    quote: Quote
    quotes: Quote[]
  }
  actions: {
    updateQuote: () => void
  }
  viewStatus: {
    statusNow: boolean
  }
}

const UserContext = React.createContext({} as Context)

const UserProvider: React.FC = ({children}) => {
  const [status, setStatus] = React.useState<boolean>(false)
  const [quote, setQuote] = React.useState<Quote>({
    _id: "",
    quoteText: "",
    quoteAuthor: "",
    quoteGenre: "",
  })
  const [quotes, setQuotes] = React.useState<Quote[]>([])

  const getData = useCallback(async () => {
    try {
      const result = await axios.get("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      const result2 = await axios.get(
        `https://quote-garden.herokuapp.com/api/v3/quotes?author=${result.data.data[0].quoteAuthor}&limit=5`,
      )

      setStatus(true)
      setQuote(result.data.data[0])
      setQuotes(result2.data.data)
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  const handleUpdateQuote = () => {
    setStatus(false)
  }

  React.useEffect(() => {
    if (status === false) {
      getData()
    }
  }, [status, getData])

  const state: Context["state"] = {
    quote,
    quotes,
  }

  const actions = {
    updateQuote: handleUpdateQuote,
  }

  const viewStatus = {
    statusNow: status,
  }

  if (status === false) {
    return <Spinner m="auto" mt="50vh" />
  }

  return (
    <UserContext.Provider value={{state, actions, viewStatus}}>{children}</UserContext.Provider>
  )
}

export {UserContext as default, UserProvider as Provider}
