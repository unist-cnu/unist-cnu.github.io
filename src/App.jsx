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
              time="12:00 - 13:30"
              title={
                <>
                  Lunch @{" "}
                  <a
                    className="link"
                    href="https://naver.me/GaldiSrp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    강변돌짜장짬뽕
                  </a>
                </>
              }
              desc="점심"
            />

            <TimelineItem
              time="13:30 - 13:55"
              title="Networking"
              desc="티타임 및 네트워킹"
            />
          

          <TimelineItem
            time="13:55 - 18:00"
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
                    <th style={{ width: "18%" }}>Materials</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr className="openingRow">
                      <td>13:55 - 14:00</td>
                      <td colSpan={3}><b>Opening Talk</b></td>
                    </tr>
                    <tr>
                        <td>14:00 - 14:20</td>
                        <td>박소영</td>
                        <td>그래프 신경망에서의 불확실성 정량화 연구</td>
                        <td className="materialsCell">
                          <a className="matLink" href="/materials/slides/example.pdf" target="_blank" rel="noreferrer">Slides</a>
                          <span className="matSep">·</span>
                          <a className="matLink" href="/materials/ref/example.pdf" target="_blank" rel="noreferrer">Ref</a>
                        </td>
                      </tr>

                      <tr>
                        <td>14:20 - 14:40</td>
                        <td>오정현</td>
                        <td>계층적 데이터 처리를 위한 GraphRAG 연구</td>
                        <td className="materialsCell">
                          <a className="matLink" href="/materials/slides/example.pdf" target="_blank" rel="noreferrer">Slides</a>
                          <span className="matSep">·</span>
                          <a className="matLink" href="/materials/ref/example.pdf" target="_blank" rel="noreferrer">Ref</a>
                        </td>
                      </tr>

                      <tr>
                        <td>14:40 - 15:00</td>
                        <td>송민경</td>
                        <td>그래프 기반 추천 시스템의 분리 학습 연구</td>
                        <td className="materialsCell">
                          <a className="matLink" href="/materials/slides/example.pdf" target="_blank" rel="noreferrer">Slides</a>
                          <span className="matSep">·</span>
                          <a className="matLink" href="/materials/ref/example.pdf" target="_blank" rel="noreferrer">Ref</a>
                        </td>
                      </tr>

                      <tr className="breakRow">
                        <td>15:00 - 15:10</td>
                        <td colSpan={3}><b>Break</b></td>
                      </tr>

                      <tr>
                        <td>15:10 - 15:30</td>
                        <td>한승훈</td>
                        <td>Multi-modal LLM에서 그래프를 활용한 효과적인 토큰 프루닝</td>
                        <td className="materialsCell">
                          <a className="matLink" href="/materials/slides/example.pdf" target="_blank" rel="noreferrer">Slides</a>
                          <span className="matSep">·</span>
                          <a className="matLink" href="/materials/ref/example.pdf" target="_blank" rel="noreferrer">Ref</a>
                        </td>
                      </tr>

                      <tr>
                        <td>15:30 - 15:50</td>
                        <td>박종민</td>
                        <td>하이퍼볼릭 공간 기반 이종 그래프 표현 학습</td>
                        <td className="materialsCell">
                          <a className="matLink" href="/materials/slides/example.pdf" target="_blank" rel="noreferrer">Slides</a>
                          <span className="matSep">·</span>
                          <a className="matLink" href="/materials/ref/example.pdf" target="_blank" rel="noreferrer">Ref</a>
                        </td>
                      </tr>

                      <tr className="breakRow">
                        <td>15:50 - 16:00</td>
                        <td colSpan={3}><b>Break</b></td>
                      </tr>

                  <tr>
                    <td>16:00 - 16:25</td>
                    <td>김민석</td>
                    <td>참여 강도 기반 응집 부분 하이퍼그래프 탐색</td>
                    <td className="materialsCell">
                      <a className="matLink" href="/materials/slides/example.pdf" target="_blank" rel="noreferrer">Slides</a>
                      <span className="matSep">·</span>
                      <span className="matGroup">
                        <a className="matLink" href="/materials/ref/ms_ref1.pdf" target="_blank" rel="noreferrer">Ref1</a>
                        <span className="matSep">·</span>
                        <a className="matLink" href="/materials/ref/ms_ref2.pdf" target="_blank" rel="noreferrer">Ref2</a>
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>16:25 - 16:50</td>
                    <td>김다희</td>
                    <td>규모 제약을 고려한 사용자 중심 커뮤니티 검색 연구</td>
                    <td className="materialsCell">
                      <a className="matLink" href="/materials/slides/example.pdf" target="_blank" rel="noreferrer">Slides</a>
                      <span className="matSep">·</span>
                      <span className="matGroup">
                        <a className="matLink" href="/materials/ref/dh_ref1.pdf" target="_blank" rel="noreferrer">Ref1</a>
                        <span className="matSep">·</span>
                        <a className="matLink" href="/materials/ref/dh_ref2.pdf" target="_blank" rel="noreferrer">Ref2</a>
                      </span>
                    </td>
                  </tr>

                  <tr className="breakRow">
                    <td>16:50 - 17:00</td>
                    <td colSpan={3}><b>Break</b></td>
                  </tr>

                  <tr>
                    <td>17:00 - 17:25</td>
                    <td>한태준</td>
                    <td>유저 참여도 강화를 위한 앵커링 연구</td>
                    <td className="materialsCell">
                      <a className="matLink" href="/materials/slides/example.pdf" target="_blank" rel="noreferrer">Slides</a>
                      <span className="matSep">·</span>
                      <span className="matGroup">
                        <a className="matLink" href="/materials/ref/tj_ref1.pdf" target="_blank" rel="noreferrer">Ref1</a>
                        <span className="matSep">·</span>
                        <a className="matLink" href="/materials/ref/tj_ref2.pdf" target="_blank" rel="noreferrer">Ref2</a>
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>17:25 - 17:50</td>
                    <td>김송</td>
                    <td>Maximum subgraph search of size-adaptive model</td>
                    <td className="materialsCell">
                      <a className="matLink" href="/materials/slides/example.pdf" target="_blank" rel="noreferrer">Slides</a>
                      <span className="matSep">·</span>

                      <span className="matGroup">
                        <a className="matLink" href="/materials/ref/song_ref1.pdf" target="_blank" rel="noreferrer">Ref1</a>
                        <span className="matSep">·</span>
                        <a className="matLink" href="/materials/ref/song_ref2.pdf" target="_blank" rel="noreferrer">Ref2</a>
                        <span className="matSep">·</span>
                        <a className="matLink" href="/materials/ref/song_ref3.pdf" target="_blank" rel="noreferrer">Ref3</a>
                      </span>
                    </td>
                  </tr>

                  <tr className="openingRow">
                    <td>17:50 - 18:00</td>
                    <td colSpan={3}><b>Wrap-up / Photo</b></td>
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
            <span className="daySub">Feb 13, 2026</span>
          </div>

          <div className="timeline">
            <TimelineItem
              time="11:00 - 12:00"
              title="UNIST–CNU Internal Research Meeting"
              desc="연구 미팅"
            />
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