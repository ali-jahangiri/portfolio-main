import Link from 'next/link';

interface Props {
  href: string;
  title: string;
  className?: string;
}

const RedirectAction = (props: Props) => (
  <Link href={props.href} className={`group hover:border-b inline-flex items-center text-lg ${[props.className]}`}>
    {props.title}
    <svg
      className="size-4 ml-3 transition duration-150 group-hover:-translate-y-1 group-hover:translate-x-1"
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width="512"
      height="512"
    >
      <path d="M21.5,0H9V3h9.879L.026,21.853l2.121,2.121L21,5.121V15h3V2.5c0-1.378-1.121-2.5-2.5-2.5Z" />
    </svg>
  </Link>
);

export default RedirectAction;
