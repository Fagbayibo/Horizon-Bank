import TotalBalanceBox from "@/components/TotalBalanceBox";
import Headerbox from "@/components/Headerbox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedIn = { firstName: "Michael", lastName: "Fagbayibo", email: "fagbayibooluwasegun@gmail.com" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Headerbox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transaction efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        Recent Transaction
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 123.50 }, {currentBalance: 500.30 }]} />
    </section>
  );
};

export default Home;
