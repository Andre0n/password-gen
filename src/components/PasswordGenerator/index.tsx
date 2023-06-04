import PasswordDisplay from '../PasswordDisplay';
import PasswordOptions from '../PasswordOptions';

import { useState } from 'react';

export default function PasswordGenerator() {
  const [paswword_value, set_password_value] = useState('');
  return (
    <div className="mt-5 flex w-full flex-col items-center gap-6 md:w-5/6 lg:w-96">
      <h1 className="text-lg font-bold text-white md:text-2xl">
        {' '}
        Password Generator{' '}
      </h1>
      <PasswordDisplay password_value={paswword_value} />
      <PasswordOptions set_password={set_password_value} />
    </div>
  );
}
