import { useEffect, useState } from 'react';
import { utils } from '../../utils';
import Checkbox from '../Checkbox';

type PasswordOptionsProps = {
  set_password: React.Dispatch<React.SetStateAction<string>>;
};

export default function PasswordOptions({
  set_password,
}: PasswordOptionsProps) {
  const [password_length, set_password_length] = useState(15);
  const [uppercase, set_uppercase] = useState(true);
  const [lowercase, set_lowercase] = useState(true);
  const [numbers, set_numbers] = useState(true);
  const [symbols, set_symbols] = useState(true);

  const generate_password = () => {
    if (!uppercase && !numbers && !symbols && !lowercase) {
      return;
    }

    let generated_password = '';

    for (let i = 0; i < password_length; i++) {
      let choice = utils.random(0, 3);
      if (lowercase && choice === 0) {
        generated_password += utils.random_lower_char();
      } else if (uppercase && choice === 1) {
        generated_password += utils.random_upper_char();
      } else if (symbols && choice === 2) {
        generated_password += utils.random_symbol();
      } else if (numbers && choice === 3) {
        generated_password += utils.random(0, 9);
      } else {
        i--;
      }
      set_password(generated_password);
    }
  };

  useEffect(() => {
    generate_password();
  }, []);

  return (
    <>
      <div className="h-full w-full rounded bg-gray-700">
        <form className="px-2 py-4">
          <div className="flex items-center justify-between ">
            <p className="text-sm font-medium text-gray-400">
              Character Length
            </p>
            <p className="text-sm font-medium text-emerald-300">
              {password_length}
            </p>
          </div>
          <input
            type="range"
            name="password_len"
            min={0}
            max={25}
            defaultValue={15}
            className="slider-thumb mb-4 h-1 w-full cursor-pointer appearance-none rounded-lg bg-slate-900"
            onChange={(event) => {
              set_password_length(Number(event.target.value));
            }}
          />
          <div className="mt-4">
            <Checkbox
              name="uppercase"
              label="Include Uppercase Letters"
              action_function={set_uppercase}
            />
            <Checkbox
              name="lowercase"
              label="Include Lowercase Letters"
              action_function={set_lowercase}
            />
            <Checkbox
              name="numbers"
              label="Include Numbers"
              action_function={set_numbers}
            />
            <Checkbox
              name="symbols"
              label="Include Symbols"
              action_function={set_symbols}
            />
          </div>
          <input
            type="submit"
            name="generate_btn"
            className="flex-end mt-8 w-full cursor-pointer rounded bg-emerald-400 p-3 text-sm font-bold"
            onClick={(event) => {
              event.preventDefault();
              generate_password();
            }}
            value={'Generate Password'}
          />
        </form>
      </div>
    </>
  );
}
