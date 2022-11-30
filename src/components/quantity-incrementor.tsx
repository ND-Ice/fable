type Props = {
  value: number;
  onIncrementClick: (value: number) => void;
  onDecrementClick: (value: number) => void;
};

export default function QuantityIncrementor({
  value,
  onIncrementClick,
  onDecrementClick,
}: Props) {
  return (
    <div className="flex gap-2">
      <span
        className="cursor-pointer select-none text-body-1"
        onClick={() => onDecrementClick(value)}
      >
        -
      </span>
      <span className="text-body-2">{value}</span>
      <span
        className="cursor-pointer select-none text-body-1"
        onClick={() => onIncrementClick(value)}
      >
        +
      </span>
    </div>
  );
}
