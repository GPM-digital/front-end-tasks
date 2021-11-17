import StepThroughContainer from '../components/containers/step-through';
import { readFromFile } from '../lib/api';

function StepThrough({ data }) {
  return <StepThroughContainer items={data} />;
}

export default StepThrough;

export async function getStaticProps() {
  const data = await readFromFile('step-through.json');
  return {
    props: {
      data,
    },
  };
}
