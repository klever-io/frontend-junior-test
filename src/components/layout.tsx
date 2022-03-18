import { Header } from '.'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
