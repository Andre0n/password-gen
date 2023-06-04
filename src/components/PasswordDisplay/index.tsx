import { ClipboardText } from '@phosphor-icons/react';

type PasswordDisplayProps = {
  password_value: string;
};

export default function PasswordDisplay({
  password_value,
}: PasswordDisplayProps) {
  return (
    <div className="flex h-16 w-full items-center justify-between rounded-sm bg-gray-700 px-2 py-4 text-white ">
      <span className="truncate text-ellipsis text-sm font-medium">
        {password_value}
      </span>
      <button aria-label="copy button">
        <ClipboardText size={28} color="#FAFAFA" />
      </button>
    </div>
  );
}
