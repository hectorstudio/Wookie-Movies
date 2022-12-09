import Header from "./Header";

const Layout = ({ ...props }): JSX.Element => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout;
