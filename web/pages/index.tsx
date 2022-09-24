import type { NextPage, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";

import { getSortedPostsData, BlogData } from "@lib/posts";
import utilStyles from "@styles/utils.module.css";
import Layout, { siteTitle } from "@components/layout";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Home = ({ allPostsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey there, I'm Yannick! I'm a hobby programmer 👨‍💻 and sim racer 🛞 with
          a love for home grown vegetables 🍅🌱.
        </p>
        <p>
          (This is a sample website - you'll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">ou Next.js tutorial</a>.)
        </p>
        <p>
          Make sure to check out the{" "}
          <Link href="posts/first-post">📰 latest post</Link>!
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLog}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
