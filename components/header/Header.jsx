import Image from "next/image"
import Link from "next/link"

export default function Header({ menu }) {
  const topMenu = menu.nodes[0].menuItems.edges || []
  return (
    <header className='bg-purple p-7 flex'>
      <div className='w-1/2'>
        <Link href='/'>
          <a>
            <Image
              src={"/Logo.svg"}
              alt='Food Strategy'
              width='200'
              height='56'
            />
          </a>
        </Link>
      </div>

      <nav className='w-1/2 text-white text-right mt-4'>
        {topMenu.map((menuItem) =>
          menuItem.node.parentId === null ? (
            <Link href={menuItem.node.url} key={menuItem.node.label}>
              <a className='p-5'>{menuItem.node.label}</a>
            </Link>
          ) : null
        )}
      </nav>
    </header>
  )
}
