
import { useParams } from 'react-router-dom';
import Data from 'components/Data/Data';


const Studycase = () => {
  let { slug } = useParams();
 const currentCase = Data.filter(page => page.slug === slug);

  return (
    <>
      <h1>{currentCase[0].title}</h1>
      <br/>
      <p>{currentCase[0].subtitle}</p>
      <br/>
      <p>{currentCase[0].description}</p>
    </>
  );
};

export default Studycase;
