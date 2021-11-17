import 'twin.macro';

function StepThroughStep({ item }) {
  return (
    <article tw="p-4 border mb-2">
      <h3>{item.title}</h3>
    </article>
  );
}

export default StepThroughStep;
