import { useEffect, useState, useRef } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'

interface Options {
  audience?: string
  scope?: string
  headers?: Object
}

interface State {
  error: null | Object
  loading: boolean
  data: null | Array<any> | Object
}

const defaultOptions = {
  audience: 'localhost',
  // scope: null,
  headers: {},
}

function useApi(url: string, options: Options = defaultOptions) {
  const { getAccessTokenSilently } = useAuth0()
  const [state, setState] = useState<State>({
    error: null,
    loading: true,
    data: null,
  })
  const [refreshIndex, setRefreshIndex] = useState(0)
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    ;(async () => {
      try {
        const { audience, scope, ...fetchOptions } = options
        const accessToken = await getAccessTokenSilently()
        const { data } = await axios(url, {
          ...fetchOptions,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        setState({
          ...state,
          data,
          error: null,
          loading: false,
        })
      } catch (error: any) {
        setState({
          ...state,
          error,
          loading: false,
        })
        console.log('error: ', error)
      }
    })()
  }, [refreshIndex])

  return {
    ...state,
    refresh: () => setRefreshIndex(refreshIndex + 1),
  } as const
}

export default useApi
