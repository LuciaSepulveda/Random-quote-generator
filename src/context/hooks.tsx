import React from "react"

import UserContext, {Context} from "./context"

export function useQuote(): Context["state"]["quote"] {
  const {
    state: {quote},
  } = React.useContext(UserContext)

  return quote
}

export function useUpdate(): Context["actions"]["updateQuote"] {
  const {
    actions: {updateQuote},
  } = React.useContext(UserContext)

  return updateQuote
}

export function viewStatus(): Context["viewStatus"]["statusNow"] {
  const {
    viewStatus: {statusNow},
  } = React.useContext(UserContext)

  return statusNow
}
