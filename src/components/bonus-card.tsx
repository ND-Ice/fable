import Image, { StaticImageData } from "next/image";

type Props = {
  points: number;
  cashback: string;
  cardImage: StaticImageData | string;
};

function BonusCard({ cardImage, points, cashback }: Props) {
  return (
    <div className="w-full bg-gray-2 py-5 lg:w-max">
      <Image src={cardImage} alt="Card Image" className="w-full object-cover" />
      <div className="mt-5 space-y-4 px-5">
        <div className="flex justify-between gap-5">
          <span>Bonus Card</span>
          <span>{points} points</span>
        </div>
        <div className="flex justify-between gap-5">
          <span>Cashback</span>
          <span>{cashback}%</span>
        </div>
      </div>
    </div>
  );
}

export default BonusCard;
