import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "components/layout";
import utilStyles from "styles/utils.module.css";

import { getSortedPostsData } from "lib/posts";

export async function getStaticProps() {
  const sortedPosts = getSortedPostsData();

  return {
    props: {
      allPosts: sortedPosts,
    },
  };
}

export default function Home({ allPosts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, lectus netus
          commodo natoque tincidunt mus, egestas urna eros non fermentum
          aliquet. Donec massa natoque placerat hac blandit viverra eleifend
          urna, eu vestibulum habitasse senectus ligula purus penatibus mi,
          vulputate ultrices vehicula non nam malesuada ante. Consequat commodo
          sagittis neque pharetra nunc quisque ridiculus ultrices varius, nec
          eleifend eu ad mauris platea tellus dis.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn" target="_blank">
            our Next.js tutorial
          </a>
          .)
        </p>
      </section>
      
      <section>
        Here is the top articles of the blog:
        <ul>
          <li>
            <Link href="/posts/first-post">See Lorem Ipsum post</Link>
          </li>
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Fetching blogs</h2>
        <ul className={utilStyles.list}>
        {
          allPosts.map(singlePost => (
            <li className={utilStyles.listItem} key={singlePost.id}>
              {singlePost.title}
              <br />
              {singlePost.id}
              <br />
              {singlePost.date}
            </li>
          ))
        }
        </ul>
      </section>

      <section>
        Link to a page which contains some users data that has been fetching with getServerSideProps...
        <ul>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
