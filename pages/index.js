import fetch from 'isomorphic-unfetch';
import BaseLayout from 'components/layouts/baseLayout';

const Home = ({ PageData }) => {
  const page = PageData[0];

  return (
    <section>
      <BaseLayout page={page}/>
    </section>
  )
}

export const getServerSideProps = async () => {
  const { API_URL } = process.env;
  const resPages = await fetch(`${API_URL}/pages/?slug=home`);
  const dataPages = await resPages.json();
  // Passing data to the page via props
  return { props: { PageData: dataPages } }
}

export default Home;