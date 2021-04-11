import React from "react"
import axios from "axios"

import {Quote} from "../types/types"

export interface Context {
  state: {
    quote: Quote
  }
  actions: {
    updateQuote: () => Promise<void>
  }
  viewStatus: {
    statusNow: boolean
  }
}

const UserContext = React.createContext({} as Context)

const UserProvider: React.FC = ({children}) => {
  const [status, setStatus] = React.useState<boolean>(false)
  const [quote, setQuote] = React.useState<Quote>({quoteText: "", quoteAuthor: "", quoteGenre: ""})

  const getData = async () => {
    try {
      const result = await axios.get("https://quote-garden.herokuapp.com/api/v3/quotes/random")

      setStatus(true)
      setQuote(result.data.data[0])
    } catch (error) {
      console.log(error.message)
    }
  }

  async function handleUpdateQuote() {
    getData()
  }

  React.useEffect(() => {
    if (status === false) {
      getData()
    }
  })

  const state: Context["state"] = {
    quote,
  }

  const actions = {
    updateQuote: handleUpdateQuote,
  }

  const viewStatus = {
    statusNow: status,
  }

  return (
    <UserContext.Provider value={{state, actions, viewStatus}}>{children}</UserContext.Provider>
  )
}

export {UserContext as default, UserProvider as Provider}
