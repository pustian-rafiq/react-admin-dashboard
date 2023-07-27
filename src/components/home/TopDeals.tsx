import { topDealUsers } from "../../data/topDealsUsers";
import "./top-deals.scss";

const TopDeals = () => {
  return (
    <div className="top-deals">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers?.map((user) => (
          <div className="list-item" key={user?.id}>
            <div className="user">
              <img src={user?.img} alt="" />
              <div className="user-text">
                <span className="username">{user?.username}</span>
                <span className="email">{user?.email}</span>
              </div>
            </div>
            <span className="amount">${user?.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
