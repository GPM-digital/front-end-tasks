import LinkList from '../components/molecules/link-list';
import 'twin.macro';

export default function Index() {
  return (
    <div tw="p-4 max-w-md mx-auto md:p-12">
      <h2 tw="text-xl font-bold mb-2">Containers</h2>
      <LinkList
        items={[
          {
            href: '/step-through',
            text: 'Step-through Container',
          },
          {
            href: '/strap',
            text: 'Strap Container',
          },
        ]}
      />

      <h2 tw="text-xl font-bold mt-4 mb-2">Reference</h2>
      <LinkList
        items={[
          {
            href: '/palette',
            text: 'Palette',
          },
        ]}
      />
    </div>
  );
}
