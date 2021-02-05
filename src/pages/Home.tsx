import React from 'react'
import CountryList from '../components/CountryList'
import SearchBar from '../components/SearchBar'
// import {Container} from 'react-bootstrap'
import { Container } from '@material-ui/core'

const Home = () => {
  return (
    <Container>
      <SearchBar />
      <CountryList />
    </Container>
  )
}

export default Home
