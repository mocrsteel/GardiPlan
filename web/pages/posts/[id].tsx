import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import type { ParsedUrlQuery } from 'querystring'

import Layout from '@components/layout'
import { getAllPostIds, getPostData } from '@lib/posts'

type IParams = ParsedUrlQuery & {
  id: string
}

const Post = ({ postData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
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
  const postData = getPostData(id)
  return {
    props: {
      postData
    }
  }
}

export default Post