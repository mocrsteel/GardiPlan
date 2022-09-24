import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import type { ParsedUrlQuery } from 'querystring'

import Head from 'next/head'
import Link from 'next/link'

import Layout from '@components/layout'
import Date from '@components/date'
import { getAllPostIds, getPostData } from '@lib/posts'

import utilStyles from '@styles/utils.module.css'

type IParams = ParsedUrlQuery & {
  id: string
}

const Post = ({ postData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}><Date dateString={postData.date} /></div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { id } = context.params as IParams
  const postData = await getPostData(id)
  return {
    props: {
      postData
    }
  }
}

export default Post