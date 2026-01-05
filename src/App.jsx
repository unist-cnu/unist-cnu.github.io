import "./App.css";

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function TimelineItem({ time, title, desc }) {
  return (
    <div className="titem">
      <div className="tleft">
        <div className="ttime">{time}</div>
      </div>
      <div className="tright">
        <div className="ttitle">{title}</div>
        {desc ? <div className="tdesc">{desc}</div> : null}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="wrap">
        <header className="hero">
          <div className="heroTop">
            <h1>UNIST × CNU Workshop</h1>
            <div className="meta">
              <Tag>Feb 12–13</Tag>
              <Tag>UNIST (예봉 Y201호, Y202호)</Tag>
              <Tag>Schedule: Tentative</Tag>
            </div>
          </div>
          <p className="sub">
            일정/장소/세션은 확정되는 대로 업데이트 예정입니다.
          </p>
        </header>

        <section className="grid">
          <div className="card">
            <h2>Organising Committee</h2>
            <ul className="list">
              <li>
                <b>General Chairs</b>
                <span>김정훈 교수님, 임성수 교수님 </span>
              </li>
              <li>
                <b>Program Chairs</b>
                <span>김송, 박소영</span>
              </li>
              <li>
                <b>Local Chairs</b>
                <span>김민석, 한태준</span>
              </li>
              <li>
                <b>Web Chair</b>
                <span>김다희</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <h2>Quick Info</h2>
            <div className="kv">
              <div className="k">Date</div>
              <div className="v">Feb 12–13</div>
              <div className="k">Venue</div>
              <div className="v">UNIST (TBD)</div>
              <div className="k">Contact</div>
              <div className="v">Web Chair (Dahee)</div>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="sectionHead">
            <h2>Schedule</h2>
            <p className="note">시간표는 “블록” 단위로 나눠서 표시합니다.</p>
          </div>

          <div className="day">
            <div className="dayHead">
              <h3>Day 1</h3>
              <span className="daySub">Feb 12 (Tentative)</span>
            </div>

            <div className="timeline">
              <TimelineItem
                time="11:30–12:30"
                title="Arrival to Ulsan (CNU team)"
                desc="이동 및 도착"
              />
              <TimelineItem
                time="12:30–13:30"
                title="Lunch"
                desc="점심"
              />
              <TimelineItem
                time="13:30–14:00"
                title="Tea time"
                desc="간단한 티타임 / 네트워킹"
              />
              <TimelineItem
                time="14:00–18:00"
                title="Workshop Talks & Tutorial Session"
                desc="발표 및 튜토리얼 세션"
              />
              <TimelineItem
                time="18:00–"
                title="Social / Banquet (TBD)"
                desc="교류회 (뱅킷 + 레크레이션 등)"
              />
            </div>
          </div>

          <div className="day">
            <div className="dayHead">
              <h3>Day 2</h3>
              <span className="daySub">Feb 13 (Tentative)</span>
            </div>

            <div className="timeline">
              <TimelineItem time="TBD" title="Schedule to be announced" />
            </div>
          </div>
        </section>

        <footer className="footer">
          <small>© UNIST × CNU Workshop</small>
        </footer>
      </div>
    </div>
  );
}