import "./App.css";

export default function App() {
  return (
    <div className="wrap">
      <header className="header">
        <h1>UNIST × CNU Workshop</h1>
        <p className="sub">
          <b>Date:</b> Feb 12–13 (Schedule TBD) · <b>Venue:</b> TBD
        </p>
      </header>

      <section className="card">
        <h2>Organising Committee</h2>
        <ul className="list">
          <li><b>General Chairs:</b> 저, 임교수님</li>
          <li><b>Program Chairs:</b> 송씨, 소영씨</li>
          <li><b>Local Chairs:</b> 민석, 태준</li>
          <li><b>Web Chair:</b> 다희</li>
        </ul>
      </section>

      <section className="card">
        <h2>Tentative Schedule</h2>
        <p className="note">※ 아래 시간표는 임시(초안)입니다. 확정되면 업데이트합니다.</p>

        <h3>Day 1 — Feb 12</h3>
        <table className="tbl">
          <thead>
            <tr>
              <th>Time</th>
              <th>Program</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11:30–14:00</td>
              <td>충남대 울산 도착 + 점심 + Tea time</td>
            </tr>
            <tr>
              <td>14:00–18:00</td>
              <td>Workshop 발표 및 Tutorial session 진행</td>
            </tr>
            <tr>
              <td>18:00–</td>
              <td>교류회 (뱅킷 + 레크레이션, TBD)</td>
            </tr>
          </tbody>
        </table>

        <h3>Day 2 — Feb 13</h3>
        <table className="tbl">
          <thead>
            <tr>
              <th>Time</th>
              <th>Program</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TBD</td>
              <td>Schedule to be announced</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className="footer">
        <small>© UNIST × CNU Workshop</small>
      </footer>
    </div>
  );
}