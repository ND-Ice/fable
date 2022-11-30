import { ErrorOption } from "react-hook-form";

type Props = {
  error: ErrorOption;
  visible: boolean;
};

function FormErrorMessage({ visible, error }: Props) {
  if (!error || !visible) return null;

  return <p className="text-red">{error?.message}</p>;
}

export default FormErrorMessage;
