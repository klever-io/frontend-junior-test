import React from 'react'
import Header from '../components/Header'
import TokenForms from '../components/TokenForms'
import TokensTable from '../components/TokensTable'

function Home() {
  return (
    <div>
      <Header/>
      <TokenForms />
      <TokensTable />
    </div>
  )
}

export default Home