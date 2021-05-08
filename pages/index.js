/*
  Next pages are loaded in advance using pre rendering. Basically, CRA wil, build a site
  that needs JS to run. Next can render your pages without JS, but will need JS to eventually
  have users interact. 
    Static Generation => generates the HTML at build time, the pre rendered
    HTML is then reused on each request. 
    Server-Side Rendering => generates the HTML on each request  
  Next lets you choose which prerendering type for each page. STATIC GENERATION IS PREFERRED 
  BECAUSE PAGE CAN BE BUILT ONCE AND SERVED BY CDN

  https://nextjs.org/learn/basics/assets-metadata-css/assets
  https://nextjs.org/learn/basics/assets-metadata-css/styling-tips
  https://nextjs.org/docs/basic-features/built-in-css-support
  https://nextjs.org/learn/basics/data-fetching/two-forms
*/

/*
  In Next, when you export a page component, you can also export an async function called 
  getStaticProps. This runs at buildtime and inside a function, you can fetch external 
  data and send it as props to the page.

  https://nextjs.org/learn/basics/data-fetching/request-time
*/

import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       // props
//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Its B1GJ03</p>
        <iframe 
          width="800" 
          height="400" 
          frameborder="0" 
          scrolling="no" 
          src="https://onedrive.live.com/embed?resid=89DE966B929B3FD2%21106&authkey=%21AJ8j-CXtOLsKzWE&em=2&AllowTyping=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True"
        >
        </iframe>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.list}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}