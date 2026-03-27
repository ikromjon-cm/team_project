import './Settings.css';

const Settings = () => {
  return (
    <div className="div2">
      <h2>General Settings</h2>
      <div className='div2-1'>
        <div className='div2-2'>
          <img src={get5} alt="" />
          <p>Upload Logo</p>
        </div>
        <div className='div2-3'>
          <div>
            <p>Site Name</p>
            <input type="text" placeholder='Bright Web' />
            <br />
            <p>SEO Title</p>
            <input type="text" placeholder='Bright web is a hybrid dashboard' />
            <br />
            <p>SEO Keywords</p>
            <input type="text" placeholder='CEO' />
          </div>
          <div>
            <p>Copy Right</p>
            <input type="text" placeholder='All rights Reserved@brightweb' />
            <br />
            <p>SEO Description</p>
            <input className='input' type="text" placeholder='Bright web is a hybrid dashboard' />
          </div>
        </div>
        <button>Save</button>
      </div>
    </div>
  );
};

export default Settings;