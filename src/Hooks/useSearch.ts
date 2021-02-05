import { useDispatch } from 'react-redux'
import React, { useRef, useState } from 'react'
import { fetchCountry } from '../redux/actions/country'

const useSearch = () => {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState<string>('')
  const onTyping = (e: React.ChangeEvent) => {
    const value = (e.target as HTMLInputElement)?.value
    setKeyword(value)
  }
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const enter = 13
    if (e.charCode === enter) {
      searchHandler(keyword)
    }
  }
  const prevKeywordRef = useRef('')
  const searchHandler = (keyword: string) => {
    if (prevKeywordRef.current !== keyword) {
      prevKeywordRef.current = keyword
      dispatch(fetchCountry(keyword))
    }
  }

  return { keyword, onKeyPress, onTyping, searchHandler }
}

export default useSearch
