import { theme } from 'twin.macro';
const brandColors = theme`colors.brand`;

function Palette() {
  const keys = Object.keys(brandColors);

  return (
    <ul tw="flex flex-wrap p-4 max-w-screen-xl mx-auto">
      {keys.map((key) => (
        <li
          key={key}
          tw="w-full relative sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
          style={{ backgroundColor: brandColors[key] }}
        >
          <span tw="block pb-[100%]">
            <span tw="absolute inset-0 flex items-center justify-center p-4 text-center">
              brand.{key} ({brandColors[key]})
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Palette;
