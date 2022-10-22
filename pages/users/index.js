import Layout from "components/layout";
import { getUsersFromJsonPlaceHolder } from "lib/users";
import utilStyles from "styles/utils.module.css";

export async function getServerSideProps({
  params,
  req,
  res,
  query,
  preview,
  previewData,
  resolvedUrl,
  locale,
  locales,
  defaultLocale,
}) {
  const users = await getUsersFromJsonPlaceHolder();
  return {
    props: {
      users,
    },
  };
}
export default function ListOfUsers({ users }) {
  return (
    <Layout>
      <ul className={utilStyles.list}>
        {
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })
        }
      </ul>
    </Layout>
  );
}
