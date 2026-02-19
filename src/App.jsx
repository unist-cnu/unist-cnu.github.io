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

            {/* <TimelineItem
              time="13:30 - 13:55"
              title="Networking"
              desc="티타임 및 네트워킹"
            /> */}
          

          <TimelineItem
            time="13:40 - 18:00"
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
                    {/* <tr className="openingRow">
                      <td>13:55 - 14:00</td>
                      <td colSpan={3}><b>Opening Talk</b></td>
                    </tr> */}
                  <tr>
                    <td>13:40 - 13:55</td>
                    <td>박소영</td>
                    <td>그래프 신경망에서의 불확실성 정량화 연구</td>
                    <td className="materialsCell">
                      <a className="matLink" href="/materials/slides/SoyoungPark_slides.pdf" target="_blank" rel="noreferrer">Slides</a>
                      <span className="matSep">·</span>
                      <a className="matLink" href="/materials/ref/SoyoungPark_ref.pdf" target="_blank" rel="noreferrer">Ref</a>
                    </td>
                  </tr>

                  <tr>
                    <td>13:55 - 14:10</td>
                    <td>한승훈</td>
                    <td>Multi-modal LLM에서 그래프를 활용한 효과적인 토큰 프루닝</td>
                    <td className="materialsCell">
                      <a className="matLink" href="/materials/slides/SeunghoonHan_slides.pdf" target="_blank" rel="noreferrer">Slides</a>
                      <span className="matSep">·</span>
                      <a className="matLink" href="/materials/ref/SeunghoonHan_ref.pdf" target="_blank" rel="noreferrer">Ref</a>
                    </td>
                  </tr>

                  <tr>
                    <td>14:10 - 14:20</td>
                    <td>오정현</td>
                    <td>계층적 데이터 처리를 위한 GraphRAG 연구</td>
                    <td className="materialsCell">
                      <a className="matLink" href="/materials/slides/JunghyunOh_slides.pdf" target="_blank" rel="noreferrer">Slides</a>
                      <span className="matSep">·</span>
                      <a className="matLink" href="/materials/ref/JunghyunOh_ref.pdf" target="_blank" rel="noreferrer">Ref</a>
                    </td>
                  </tr>

                  <tr className="breakRow">
                    <td>14:20 - 14:40</td>
                    <td colSpan={3}><b>Break</b></td>
                  </tr>

                  <tr>
                    <td>14:40 - 14:50</td>
                    <td>송민경</td>
                    <td>그래프 기반 추천 시스템의 분리 학습 연구</td>
                    <td className="materialsCell">
                      <a className="matLink" href="/materials/slides/MinkyungSong_slides.pdf" target="_blank" rel="noreferrer">Slides</a>
                      <span className="matSep">·</span>
                      <a className="matLink" href="/materials/ref/MinkyungSong_ref.pdf" target="_blank" rel="noreferrer">Ref</a>
                    </td>
                  </tr>

                  <tr>
                    <td>14:50 - 15:10</td>
                    <td>박종민</td>
                    <td>하이퍼볼릭 공간 기반 이종 그래프 표현 학습</td>
                    <td className="materialsCell">
                      <a className="matLink" href="/materials/slides/JongminPark_slides.pdf" target="_blank" rel="noreferrer">Slides</a>
                      <span className="matSep">·</span>
                    <span className="matGroup">
                      <a className="matLink" href="/materials/ref/JongminPark_ref1.pdf" target="_blank" rel="noreferrer">Ref1</a>
                      <span className="matSep">·</span>
                      <a className="matLink" href="/materials/ref/JongminPark_ref2.pdf" target="_blank" rel="noreferrer">Ref2</a>
                  </span>
                    </td>
                  </tr>

                  <tr>
                    <td>15:10 - 15:30</td>
                    <td>김민석</td>
                    <td>참여 강도 기반 응집 부분 하이퍼그래프 탐색</td>
                    <td className="materialsCell">
                      <a className="matLink" href="/materials/slides/MinseokKim_slides.pdf" target="_blank" rel="noreferrer">Slides</a>
                      <span className="matSep">·</span>
                      <span className="matGroup">
                        <a className="matLink" href="/materials/ref/MinseokKim_ref1.pdf" target="_blank" rel="noreferrer">Ref1</a>
                        <span className="matSep">·</span>
                        <a className="matLink" href="/materials/ref/MinseokKim_ref2.pdf" target="_blank" rel="noreferrer">Ref2</a>
                      </span>
                    </td>
                  </tr>
                  
                  <tr className="breakRow">
                    <td>15:30 - 15:50</td>
                    <td colSpan={3}><b>Break</b></td>
                  </tr>

                  <tr>
                    <td>15:50 - 16:10</td>
                    <td>김다희</td>
                    <td>규모 제약을 고려한 사용자 중심 커뮤니티 검색</td>
                    <td className="materialsCell">
                      <a className="matLink" href="/materials/slides/DaheeKim_slides.pdf" target="_blank" rel="noreferrer">Slides</a>
                      <span className="matSep">·</span>
                      <span className="matGroup">
                        <a className="matLink" href="/materials/ref/DaheeKim_ref1.pdf" target="_blank" rel="noreferrer">Ref1</a>
                        <span className="matSep">·</span>
                        <a className="matLink" href="/materials/ref/DaheeKim_ref2.pdf" target="_blank" rel="noreferrer">Ref2</a>
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>16:10 - 16:30</td>
                    <td>한태준</td>
                    <td>유저 참여도 강화를 위한 앵커링 연구</td>
                    <td className="materialsCell">
                      <a className="matLink" href="/materials/slides/TaejoonHan_slides.pdf" target="_blank" rel="noreferrer">Slides</a>
                      <span className="matSep">·</span>
                      <span className="matGroup">
                        <a className="matLink" href="/materials/ref/TaejoonHan_ref1.pdf" target="_blank" rel="noreferrer">Ref1</a>
                        <span className="matSep">·</span>
                        <a className="matLink" href="/materials/ref/TaejoonHan_ref2.pdf" target="_blank" rel="noreferrer">Ref2</a>
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>16:30 - 16:50</td>
                    <td>김송</td>
                    <td>Maximum subgraph search of size-adaptive model</td>
                    <td className="materialsCell">
                      <a className="matLink" href="/materials/slides/SongKim_slides.pdf" target="_blank" rel="noreferrer">Slides</a>
                      <span className="matSep">·</span>

                      <span className="matGroup">
                        <a className="matLink" href="/materials/ref/SongKim_ref1.pdf" target="_blank" rel="noreferrer">Ref1</a>
                        <span className="matSep">·</span>
                        <a className="matLink" href="/materials/ref/SongKim_ref2.pdf" target="_blank" rel="noreferrer">Ref2</a>
                        <span className="matSep">·</span>
                        <a className="matLink" href="/materials/ref/SongKim_ref3.pdf" target="_blank" rel="noreferrer">Ref3</a>
                      </span>
                    </td>
                  </tr>

                  <tr className="breakRow">
                    <td>16:50 - 17:00</td>
                    <td colSpan={3}><b>Break</b></td>
                  </tr>

                  {/* <tr className="openingRow">
                    <td>17:50 - 18:00</td>
                    <td colSpan={3}><b>Wrap-up / Photo</b></td>
                  </tr> */}

                  <tr className="openingRow">
                      <td>17:00- 18:00</td>
                      <td>김정훈 교수님</td>
                      <td>대학원 생존을 위한 히치하이커 안내서</td>
                      <td></td>
                    </tr>
                </tbody>
              </table>

              {/* <p className="note" style={{ marginTop: 10 }}>
                ※ 발표 시간/순서는 확정 전이며, 추후 업데이트될 예정입니다.
              </p> */}
            </div>
          </TimelineItem>
          <TimelineItem
              time="18:00"
              title={
                <>
                  Dinner @{" "}
                  <a
                    className="link"
                    // href="https://map.naver.com/p/entry/place/2007524811?lng=129.2397078&lat=35.5756337&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202601131525&locale=ko&svcName=map_pcv5&searchType=place&c=15.00,0,0,0,dh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    언양불고기
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
                    정나루
                  </a>
                </>
              }
              desc="점심"
            />
          </div>
        </div>
      </section>
      {/* PHOTOS */}
<section className="card">
  <div className="sectionHead">
    <h2>Photos</h2>
  </div>

  <div className="photoGrid">
    <figure className="photoItem">
      <img src="/photos/sy.jpg" alt="Talk photo 1" />
      <figcaption>그래프 신경망에서의 불확실성 정량화 연구 / 박소영</figcaption>
    </figure>
    <figure className="photoItem">
      <img src="/photos/sh.JPG" alt="Talk photo 1" />
      <figcaption>Multi-modal LLM에서 그래프를 활용한 효과적인 토큰 프루닝 / 한승훈</figcaption>
    </figure>
    <figure className="photoItem">
      <img src="/photos/jh.JPG" alt="Talk photo 1" />
      <figcaption>계층적 데이터 처리를 위한 GraphRAG 연구 / 오정현</figcaption>
    </figure>
    <figure className="photoItem">
      <img src="/photos/mk.JPG" alt="Talk photo 1" />
      <figcaption>그래프 기반 추천 시스템의 분리 학습 연구 / 송민경</figcaption>
    </figure>
    <figure className="photoItem">
      <img src="/photos/jm.JPG" alt="Talk photo 1" />
      <figcaption>하이퍼볼릭 공간 기반 이종 그래프 표현 학습 / 박종민</figcaption>
    </figure>
    <figure className="photoItem">
      <img src="/photos/ms.JPG" alt="Talk photo 1" />
      <figcaption>참여 강도 기반 응집 부분 하이퍼그래프 탐색 / 김민석</figcaption>
    </figure>
    <figure className="photoItem">
      <img src="/photos/dh.JPG" alt="Talk photo 1" />
      <figcaption>규모 제약을 고려한 사용자 중심 커뮤니티 검색 / 김다희</figcaption>
    </figure>
    <figure className="photoItem">
      <img src="/photos/tj.JPG" alt="Talk photo 2" />
      <figcaption>유저 참여도 강화를 위한 앵커링 연구 / 한태준</figcaption>
    </figure>
    <figure className="photoItem">
      <img src="/photos/song.JPG" alt="Talk photo 2" />
      <figcaption>우리 모두 친구가 될 수 있을까요? / 김송</figcaption>
    </figure>
    <figure className="photoItem">
      <img src="/photos/hitchhiker_talk.JPG" alt="Talk photo 3" />
      <figcaption>대학원 생존을 위한 히치하이커 안내서 / 김정훈 교수님</figcaption>
    </figure>

    <figure className="photoItem wide">
      <img src="/photos/group.jpg" alt="Group photo" />
      <figcaption>UNIST x CNU</figcaption>
    </figure>
  </div>
</section>
        <footer className="footer">
          <small>© UNIST × CNU Workshop</small>
        </footer>
      </div>
    </div>
  );
}