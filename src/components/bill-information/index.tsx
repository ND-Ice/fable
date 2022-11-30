import BillInfoItem from "./bill-info-item";

function BillInformation() {
  return (
    <div className="grid gap-4">
      <BillInfoItem text="Summary" value="€340" />
      <BillInfoItem text="Delivery" value="€0" />
      <BillInfoItem text="Promo Code" value="€20" />
      <BillInfoItem text="Points" value="€10" />
      <div className="flex items-center justify-between gap-5 text-sub-title font-bold">
        <span>Total</span>
        <span>€310</span>
      </div>
    </div>
  );
}

export default BillInformation;
