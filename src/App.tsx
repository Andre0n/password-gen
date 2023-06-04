import { ArrowSquareUpRight } from '@phosphor-icons/react';

export default function App() {
  return (
    <main className="flex h-screen flex-col items-center justify-between bg-gray-900 p-4">
      <footer>
        <span className="text-sm text-white">
          Created with ❤️ by{' '}
          <a
            className="inline-flex font-bold"
            target="_blank"
            href="https://github.com/Andre0n"
          >
            André Gabriel <ArrowSquareUpRight size={22} color="#FAFAFA" />
          </a>
        </span>
      </footer>
    </main>
  );
}
