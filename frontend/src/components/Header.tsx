import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
