import { useEffect, useState } from "react"

import Container from "../container/Container"
import { gql, useQuery } from "@apollo/client"
import client from "../../apollo-client"
import Link from "next/link"

export const GET_PAGES = gql`
  query getPages {
    pages {
      edges {
        node {
          title
          uri
        }
      }
    }
  }
`

export default function Footer({ widget, pages }) {
  const footerWidget = widget?.edges[0].node

  const { loading, error, data } = useQuery(GET_PAGES)

  // if (loading) return <div>Loading...</div>
  // if (error) return `Error! ${error}`

  return (
    <div className='pt-8 mt-10 border-t border-black'>
      <Container>
        <div className='flex'>
          <div className='w-1/5 mr-5 border-r border-black'>
            <h4 className='mb-6'>{footerWidget?.title}</h4>
            <div
              className='text-sm'
              dangerouslySetInnerHTML={{ __html: footerWidget?.content }}
            />
          </div>
          <div className='w-1/5 mr-5 border-r border-black'>
            <nav>
              {pages?.edges.slice(0, 5).map((page) => (
                <Link href={page.node.uri} key={page.node.uri}>
                  <a className='py-1 block text-sm'>{page.node.title}</a>
                </Link>
              ))}
            </nav>
          </div>

          <div className='w-1/5 b-right'>
            <nav>
              {pages?.edges.slice(5, 10).map((page) => (
                <Link href={page.node.uri} key={page.node.uri}>
                  <a className='py-1 block text-sm'>{page.node.title}</a>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <p className='text-gray-600 text-sm py-5'>
          © Food Strategy Associates Europe LLP, Registered No. OC 427178 |
          Privacy Policy
        </p>
      </Container>
    </div>
  )
}
