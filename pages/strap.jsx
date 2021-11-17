import { readFromFile } from '../lib/api';
import StrapContainer from '../components/containers/strap';

function Strap({ data }) {
  return (
    <div>
      {data.map((item) => (
        <StrapContainer key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Strap;

export async function getStaticProps() {
  const data = await readFromFile('strap.json');
  return {
    props: {
      data,
    },
  };
}
