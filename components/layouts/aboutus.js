import { useContext } from 'react';
import { useRouter } from 'next/router';
import { MainContext } from '../../contexts/MainContext';
import BaseLayout from './baseLayout';

const AboutUs = () => {
  const pageData = useContext(MainContext)
  const router = useRouter();
  const result = pageData[0].filter(pageItem => pageItem.slug === router.query.slug);
  const page = result[0]

  return (
    <section>
      <BaseLayout page={page}/>
    </section>
  )
}

export default AboutUs;