
import { users } from '../public/data'

import './App.css'

function App() {
  return (
    <>
      <div className="main-body">
        <div className="container">
          <h1 className="heading">Employees</h1>
          <hr />
          <div className="all-users">
            {
              users.map((item) => (
                <div className="user" key={item.name}>
                  <img src={item.imageUrl} className="user-img" alt="user image" />
                  <div className="user-name">
                    <h4 className="name">{item.name}</h4>
                    <p className="email">{item.email}</p>
                  </div>
                  <div className="user-role">
                    <div className="role-text">
                      <h4 style={{ fontWeight: "400", fontSize: '0.8rem' }}>{item.role}</h4>
                      <p className="last-seen">{(item.lastSeen === null) ? <div className="online">
                        <input type="radio" style={{ accentColor: "green", fontSize: '14px' }} checked /><p>online</p></div> : 'Last seen ' + item.lastSeen}</p>
                    </div>
                    <div className="more-info-dots">
                      <span>.</span>
                      <span>.</span>
                      <span>.</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
