import './Inbox.css';
import { FaRegStar, FaStar, FaRegTrashAlt, FaInfoCircle, FaCog } from 'react-icons/fa';

const Inbox = () => {

  const emails = [
    { id: 1, sender: "Jullu Jalal", tag: "Primary", tagClass: "primary", subject: "Our Bachelor of Commerce program is ACBSP-accredited.", time: "8:38 AM", starred: false },
    { id: 2, sender: "Minerva Barnett", tag: "Work", tagClass: "work", subject: "Get Best Advertiser In Your Side Pocket", time: "8:13 AM", starred: false },
    { id: 3, sender: "Peter Lewis", tag: "Friends", tagClass: "friends", subject: "Vacation Home Rental Success", time: "7:52 PM", starred: false },
    { id: 4, sender: "Anthony Briggs", tag: "Social", tagClass: "social", subject: "Free Classifieds Using Them To Promote Your Stuff Online", time: "7:52 PM", starred: true },
        { id: 1, sender: "Jullu Jalal", tag: "Primary", tagClass: "primary", subject: "Our Bachelor of Commerce program is ACBSP-accredited.", time: "8:38 AM", starred: false },
    { id: 2, sender: "Minerva Barnett", tag: "Work", tagClass: "work", subject: "Get Best Advertiser In Your Side Pocket", time: "8:13 AM", starred: false },
    { id: 3, sender: "Peter Lewis", tag: "Friends", tagClass: "friends", subject: "Vacation Home Rental Success", time: "7:52 PM", starred: false },
    { id: 4, sender: "Anthony Briggs", tag: "Social", tagClass: "social", subject: "Free Classifieds Using Them To Promote Your Stuff Online", time: "7:52 PM", starred: true },
        { id: 1, sender: "Jullu Jalal", tag: "Primary", tagClass: "primary", subject: "Our Bachelor of Commerce program is ACBSP-accredited.", time: "8:38 AM", starred: false },
    { id: 2, sender: "Minerva Barnett", tag: "Work", tagClass: "work", subject: "Get Best Advertiser In Your Side Pocket", time: "8:13 AM", starred: false },
    { id: 3, sender: "Peter Lewis", tag: "Friends", tagClass: "friends", subject: "Vacation Home Rental Success", time: "7:52 PM", starred: false },
    { id: 4, sender: "Anthony Briggs", tag: "Social", tagClass: "social", subject: "Free Classifieds Using Them To Promote Your Stuff Online", time: "7:52 PM", starred: true },
  ];

  return (
    <section className="inbox__wrapper">
      
      <aside className="inbox__sidebar">
        <button className="inbox__sidebar--compose-btn">+ Compose</button>
        
        <div className="inbox__sidebar--menu">
          <h4 className="inbox__sidebar--title">My Email</h4>
          <div className="inbox__sidebar--item inbox__sidebar--item-active">
            <span>Inbox</span> <span className="inbox__sidebar--count">1253</span>
          </div>
          <div className="inbox__sidebar--item">
            <span>Starred</span> <span className="inbox__sidebar--count">245</span>
          </div>
          <div className="inbox__sidebar--item">
            <span>Sent</span> <span className="inbox__sidebar--count">24,532</span>
          </div>
        </div>

        <div className="inbox__sidebar--labels">
          <h4 className="inbox__sidebar--title">Label</h4>
          {['Primary', 'Social', 'Work', 'Friends'].map(label => (
            <div key={label} className="inbox__sidebar--label-item">
              <span className={`label-dot--${label.toLowerCase()}`}></span> {label}
            </div>
          ))}
        </div>
      </aside>

      
      <main className="inbox__content">
        <header className="inbox__header">
          <input type="text" className="inbox__header--search-bar" placeholder="Search mail" />
          <div className="inbox__header--icons">
            <FaCog /> <FaInfoCircle /> <FaRegTrashAlt />
          </div>
        </header>

        <div className="inbox__list">
          {emails.map((email) => (
            <div className="inbox__list--row" key={email.id}>
              <input type="checkbox" className="inbox__list--checkbox" />
              <span className="inbox__list--star-icon">
                {email.starred ? <FaStar color="#ffc107" /> : <FaRegStar />}
              </span>
              <span className="inbox__list--sender-name">{email.sender}</span>
              <span className={`inbox__list--tag inbox__list--tag-${email.tagClass}`}>
                {email.tag}
              </span>
              <span className="inbox__list--subject-text">{email.subject}</span>
              <span className="inbox__list--timestamp">{email.time}</span>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Inbox;