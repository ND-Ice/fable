import BonusCard from "@/components/bonus-card";
import ProfileSideNav from "@/components/profile-side-nav";
import MainLayout from "@/layouts/main-layout";

import bonusCardImg from "@/assets/images/bonus-card.png";
import RecentOrdersTable from "@/components/recent-orders-table";

function Profile() {
  return (
    <MainLayout>
      <main className="mb-20 p-5 md:px-14">
        <header className="mb-5">
          <div className="flex items-center gap-5">
            <h1 className="text-caption-2 font-bold">Profile</h1>
            <div className="h-[2px] w-5 bg-secondary" />
            <h1 className="text-caption-2 font-bold">Main</h1>
          </div>
        </header>
        <div className="mt-10 flex flex-col gap-5 lg:flex-row">
          <ProfileSideNav />
          <div className="flex-1 space-y-10">
            <h1 className="text-title lg:text-title-lg-3">Hello, Darya!</h1>
            <BonusCard cardImage={bonusCardImg} cashback="96" points={300} />
            <RecentOrdersTable />
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

export default Profile;
