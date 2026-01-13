import "./App.css";

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function TimelineItem({ time, title, desc, children }) {
  return (
    <div className="titem">
      <div className="tleft">
        <div className="ttime">{time}</div>
      </div>
      <div className="tright">
        <div className="ttitle">{title}</div>
        {desc ? <div className="tdesc">{desc}</div> : null}
        {children ? <div className="tcontent">{children}</div> : null}
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
              <Tag>Feb 12–13, 2026</Tag>
              <Tag>UNIST (예봉 Y201호, Y202호)</Tag>
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
              <div className="v">Feb 12–13, 2026</div>
              <div className="k">Venue</div>
              <div className="v">UNIST (예봉 Y201호, Y202호)</div>
              <div className="k">Contact</div>
              <div className="v">
                Web Chair (
                <a className="link" href="mailto:dahee@unist.ac.kr">dahee@unist.ac.kr</a>
                )
              </div>
            </div>
          </div>
        </section>

      <section className="card">
        <div className="sectionHead">
          <h2>Schedule</h2>
        </div>

        {/* DAY 1 */}
        <div className="day">
          <div className="dayHead">
            <h3>Day 1</h3>
            <span className="daySub">Feb 12, 2026</span>
          </div>

          <div className="timeline">
            <TimelineItem
              time="11:40"
              title="Arrive at Ulsan Station (CNU team)"
              desc="울산역 도착"
            />
            <TimelineItem
              time="12:30 - 13:30"
              title={
                <>
                  Lunch @{" "}
                  <a
                    className="link"
                    href="https://map.naver.com/p/entry/place/33918013?lng=129.2387886&lat=35.5684725&placePath=%2Fhome&entry=plt&searchType=place"
                    target="_blank"
                    rel="noreferrer"
                  >
                    정나루
                  </a>
                </>
              }
              desc="점심"
            />

            <TimelineItem
              time="13:30 - 14:00"
              title="Networking"
              desc="티타임 및 네트워킹"
            />
          

          <TimelineItem
            time="14:00 - 18:00"
            title="Workshop Talks & Tutorial Session"
            desc="발표 및 튜토리얼 세션"
          >
            <div className="talkPanel">
              <table className="talkTable">
                <thead>
                  <tr>
                    <th style={{ width: "12%" }}>Time</th>
                    <th style={{ width: "18%" }}>Speaker</th>
                    <th>Topic</th>
                    <th style={{ width: "16%" }}>Slides</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr>
                      <td>14:00 - 14:30</td>
                      <td>박종민</td>
                      <td>하이퍼볼릭 공간 기반 이종 그래프 표현 학습</td>
                      <td className="slidesCell">
                        <a className="pdfLink" href="/slides/example.pdf" target="_blank" rel="noreferrer">PDF</a>
                      </td>
                    </tr>

                    <tr>
                      <td>14:30 - 14:50</td>
                      <td>김송</td>
                      <td>TBD</td>
                      <td className="slidesCell">
                        <a className="pdfLink" href="/slides/example.pdf" target="_blank" rel="noreferrer">PDF</a>
                      </td>
                    </tr>

                    <tr>
                      <td>14:50 - 15:10</td>
                      <td>박소영</td>
                      <td>그래프 신경망에서의 불확실성 정량화 연구</td>
                      <td className="slidesCell">
                        <a className="pdfLink" href="/slides/example.pdf" target="_blank" rel="noreferrer">PDF</a>
                      </td>
                    </tr>

                    <tr className="breakRow">
                      <td>15:10 - 15:20</td>
                      <td colSpan={3}><b>Break</b></td>
                    </tr>

                    <tr>
                      <td>15:20 - 15:40</td>
                      <td>김다희</td>
                      <td>TBD</td>
                      <td className="slidesCell">
                        <a className="pdfLink" href="/slides/example.pdf" target="_blank" rel="noreferrer">PDF</a>
                      </td>
                    </tr>
                    <tr>
                      <td>15:40 - 16:10</td>
                      <td>한승훈</td>
                      <td>Multi-modal LLM에서 그래프를 활용한 효과적인 토큰 프루닝</td>
                      <td className="slidesCell">
                        <a className="pdfLink" href="/slides/example.pdf" target="_blank" rel="noreferrer">PDF</a>
                      </td>
                    </tr>


                    <tr>
                      <td>16:10 - 16:30</td>
                      <td>한태준</td>
                      <td>TBD</td>
                      <td className="slidesCell">
                        <a className="pdfLink" href="/slides/example.pdf" target="_blank" rel="noreferrer">PDF</a>
                      </td>
                    </tr>

                    <tr className="breakRow">
                      <td>16:30 - 16:40</td>
                      <td colSpan={3}><b>Break</b></td>
                    </tr>


                    <tr>
                      <td>16:40 - 17:00</td>
                      <td>송민경</td>
                      <td>그래프 기반 추천 시스템의 분리 학습 연구</td>
                      <td className="slidesCell">
                        <a className="pdfLink" href="/slides/example.pdf" target="_blank" rel="noreferrer">PDF</a>
                      </td>
                    </tr>

                    <tr>
                      <td>17:00 - 17:20</td>
                      <td>김민석</td>
                      <td>TBD</td>
                      <td className="slidesCell">
                        <a className="pdfLink" href="/slides/kim-minseok.pdf" target="_blank" rel="noreferrer">PDF</a>
                      </td>
                    </tr>

                    <tr>
                      <td>17:20 - 17:40</td>
                      <td>오정현</td>
                      <td>계층적 데이터 처리를 위한 GraphRAG 연구</td>
                      <td className="slidesCell">
                        <a className="pdfLink" href="/slides/example.pdf" target="_blank" rel="noreferrer">PDF</a>
                      </td>
                    </tr>

                    <tr className="breakRow">
                      <td>17:40 - 18:00</td>
                      <td colSpan={3}><b>Wrap-up / Photo</b> (TBD)</td>
                    </tr>
                  </tbody>
              </table>

              <p className="note" style={{ marginTop: 10 }}>
                ※ 발표 시간/순서는 조정될 수 있습니다.
              </p>
            </div>
          </TimelineItem>
          <TimelineItem
              time="18:00"
              title={
                <>
                  Dinner @{" "}
                  <a
                    className="link"
                    href="https://map.naver.com/p/entry/place/2007524811?lng=129.2397078&lat=35.5756337&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202601131525&locale=ko&svcName=map_pcv5&searchType=place&c=15.00,0,0,0,dh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    돌담집
                  </a>
                </>
              }
              desc="저녁 (18:30 예약)"
            />
          </div>
        </div>

        {/* DAY 2 */}
        <div className="day">
          <div className="dayHead">
            <h3>Day 2</h3>
            <span className="daySub">Feb 13, 2026 (Tentative)</span>
          </div>

          <div className="timeline">
            <TimelineItem
              time="12:00 - 13:00"
              title={
                <>
                  Lunch @{" "}
                  <a
                    className="link"
                    href="https://map.naver.com/p/entry/place/1531533548?c=12.70,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202601131526&locale=ko&svcName=map_pcv5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    언양 닭칼국수
                  </a>
                </>
              }
              desc="점심"
            />
            <TimelineItem
              title="TBD"
            />
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