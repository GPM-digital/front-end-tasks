import tw from 'twin.macro';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

function ListItem({ href, children }) {
  return (
    <li tw="mb-2">
      <Link href={href} passHref>
        <a
          tw="flex items-center bg-brand-sky text-white p-2 rounded-md"
          href=""
        >
          <span tw="flex-grow">{children}</span>{' '}
          <AiOutlineArrowRight tw="flex-shrink-0" />
        </a>
      </Link>
    </li>
  );
}

function LinkList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.href} href={item.href}>
          {item.text}
        </ListItem>
      ))}
    </ul>
  );
}

export default LinkList;
