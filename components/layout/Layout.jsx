import Footer from "../footer/Footer"
import Header from "../header/Header"

export default function Layout({ data: { menus, widgets, pages }, children }) {
  return (
    <>
      <Header menu={menus} />
      <div className='container'>{children}</div>
      <Footer widget={widgets} pages={pages} />
    </>
  )
}
