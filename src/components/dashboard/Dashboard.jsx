import React from 'react';
import './Dashboard.css';

const stats = [
  {
    id: 1,
    label: 'Total User',
    value: '40,689',
    change: '8.5%',
    note: 'Up from yesterday',
    tone: 'lav',
    dir: 'up',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M12 12a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 12 12Zm0 1.5c-3.04 0-6.5 1.53-6.5 3.5v1h13v-1c0-1.97-3.46-3.5-6.5-3.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 2,
    label: 'Total Order',
    value: '10,293',
    change: '1.3%',
    note: 'Up from past week',
    tone: 'sun',
    dir: 'up',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M6 3.5h8.5l3.5 3.5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Zm8.25 1.5H6.5V19h10V7.25h-2.25A1 1 0 0 1 13.25 6V5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 3,
    label: 'Total Sales',
    value: '$89,000',
    change: '4.3%',
    note: 'Down from yesterday',
    tone: 'mint',
    dir: 'down',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M5 18.5V5.5a1 1 0 0 1 2 0v13h12a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Zm12.75-8.75a.75.75 0 0 1 1.06 0l1.69 1.69a.75.75 0 0 1-1.06 1.06L18.5 11.56l-3.47 3.47a.75.75 0 0 1-1.06 0l-2.22-2.22-2.75 2.75a.75.75 0 1 1-1.06-1.06l3.28-3.28a.75.75 0 0 1 1.06 0l2.22 2.22 2.75-2.75Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 4,
    label: 'Total Pending',
    value: '2,040',
    change: '1.8%',
    note: 'Up from yesterday',
    tone: 'peach',
    dir: 'up',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M12 4a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8Zm0 1.5A6.5 6.5 0 1 1 5.5 12 6.5 6.5 0 0 1 12 5.5Zm-.75 2.75a.75.75 0 0 1 1.5 0V12a.75.75 0 0 1-.22.53l2.25 2.25a.75.75 0 1 1-1.06 1.06L11.47 13.6a.75.75 0 0 1-.22-.53Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const deals = [
  {
    id: 1,
    product: 'Apple Watch',
    location: '6096 Marjolaine Landing',
    date: '12.09.2026 - 12.53 PM',
    piece: '423',
    amount: '$34,295',
    status: 'Delivered',
  },
  {
    id: 2,
    product: 'Samsung S24',
    location: '8502 Grady Camp',
    date: '11.09.2026 - 02.40 PM',
    piece: '205',
    amount: '$18,950',
    status: 'Pending',
  },
  {
    id: 3,
    product: 'Sony Headset',
    location: '935 William Street',
    date: '10.09.2026 - 09.15 AM',
    piece: '318',
    amount: '$24,410',
    status: 'Shipped',
  },
];

const Dashboard = () => {
  return (
    <section className="dashboard">
      <header className="dashheader">
        <h1>Dashboard</h1>
      </header>

      <div className="statgrid">
        {stats.map((item) => (
          <div key={item.id} className="statcard">
            <div className="stattop">
              <div>
                <p className="statlabel">{item.label}</p>
                <p className="statvalue">{item.value}</p>
              </div>
              <span className={`staticon ${item.tone}`}>{item.icon}</span>
            </div>
            <div className={`stattrend ${item.dir}`}>
              <span className="trendarrow">{item.dir === 'down' ? '▼' : '▲'}</span>
              <span className="trendvalue">{item.change}</span>
              <span className="trendnote">{item.note}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="panel salespanel">
        <div className="panelhead">
          <h2>Sales Details</h2>
          <button type="button" className="panelfilter">October</button>
        </div>
        <div className="chartshell">
          <div className="chartgrid">
            {['100%', '80%', '60%', '40%', '20%'].map((label) => (
              <div key={label} className="chartrow">
                <span>{label}</span>
                <span className="chartline" />
              </div>
            ))}
          </div>
          <svg className="chart" viewBox="0 0 640 220" preserveAspectRatio="none">
            <defs>
              <linearGradient id="salesFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#4f7cff" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#4f7cff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="chartarea"
              d="M20 165 L60 150 L100 130 L140 138 L180 120 L220 140 L260 90 L300 135 L340 118 L380 110 L420 145 L460 100 L500 112 L540 95 L600 110 L620 98 L620 210 L20 210 Z"
              fill="url(#salesFill)"
            />
            <path
              className="chartlinepath"
              d="M20 165 L60 150 L100 130 L140 138 L180 120 L220 140 L260 90 L300 135 L340 118 L380 110 L420 145 L460 100 L500 112 L540 95 L600 110 L620 98"
              fill="none"
            />
            <circle className="chartdot" cx="260" cy="90" r="5" />
          </svg>
          <div className="charttip">
            <span>64,366.77</span>
          </div>
          <div className="chartaxis">
            {['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'].map(
              (tick) => (
                <span key={tick}>{tick}</span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="panel dealspanel">
        <div className="panelhead">
          <h2>Deals Details</h2>
          <button type="button" className="panelfilter">October</button>
        </div>
        <div className="dealstable">
          <div className="dealsrow dealshead">
            <span>Product Name</span>
            <span>Location</span>
            <span>Date - Time</span>
            <span>Piece</span>
            <span>Amount</span>
            <span>Status</span>
          </div>
          {deals.map((deal) => (
            <div className="dealsrow" key={deal.id}>
              <div className="dealproduct">
                <span className="dealavatar">{deal.product.slice(0, 1)}</span>
                <span>{deal.product}</span>
              </div>
              <span>{deal.location}</span>
              <span>{deal.date}</span>
              <span>{deal.piece}</span>
              <span>{deal.amount}</span>
              <span className={`dealstatus ${deal.status.toLowerCase()}`}>{deal.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
