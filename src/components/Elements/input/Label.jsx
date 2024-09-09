const Label = (props) => {
  const { htmlfor, children } = props;
  return (
    <label
      htmlFor={htmlfor}
      className=" text-slate-700 text-sm font-bold mb-2 block"
    >
      {children}
    </label>
  );
};

export default Label;
