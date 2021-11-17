import 'twin.macro';
import StepThroughStep from './step';

function StepThroughContainer({ items }) {
  return (
    <div tw="p-4">
      {items.map((item) => (
        <StepThroughStep key={item.id} item={item} />
      ))}
    </div>
  );
}

export default StepThroughContainer;
