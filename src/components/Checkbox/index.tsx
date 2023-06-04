type CheckboxProps = {
  name: string;
  label: string;
  action_function: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Checkbox({
  name,
  action_function,
  label,
}: CheckboxProps) {
  return (
    <div className=" md:text-md flex items-center gap-1 text-sm text-gray-200">
      <input
        type="checkbox"
        className="cursor-pointer"
        name={name}
        defaultChecked={true}
        onChange={(event) => {
          action_function(event.target.checked);
        }}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
