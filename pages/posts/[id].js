/*
	CSS modules automatically generate unique class names. (layout_container__2t4v2)
	Code splitting works for CSS modules as well for smaller bundle sizes.
	CSS Mods are extracted from JS buncles at build time and generate .css files
	that are automatically loaded by Next.
*/

/*
	Basically, getStaticProps is passing post metadata as props to the component itself.
	***getStaticPaths is passing routing params as props to getStaticProps***

	in getStaticPaths(), when fallback is set to false, allk routes that don't match anything
	will retrun 404 to client. If set to true, the behavior of getStaticProps changes:
		Paths returned from getStaticPaths will be rendered to html at build time. 
		Next serves a fallback page, as you can imagine, and dummy path gets cached so the 
		fallback page can be static generated. 

	pages/posts/[...id].js can be used to 'catch-all' paths, will get posts/a, but also posts/a/b/c from
	params: {
		id: ['a', 'b', 'c']
	}
*/

import Layout from '../../components/layout'
import Date from '../../components/date'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id)
	return {
		props: {
			postData
		}
	}
}

export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
