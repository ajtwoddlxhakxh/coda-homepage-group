import "./Sub_main.css";

export default function Sub_main() {
  return (
    <div className="submain">
      {/* CODA 섹션 */}
      <section className="codaSection">
        {/* 중앙 CODA 문구 */}
        <div className="codaStack">
          <div className="codaRow">
            <span className="init init-c">C</span>REATE
          </div>
          <div className="codaRow">
            <span className="init init-o">O</span>BSERVE
          </div>
          <div className="codaRow">
            <span className="init init-d">D</span>EVELOP
          </div>
          <div className="codaRow">
            <span className="init initA">A</span>CHIEVE
          </div>
        </div>

        {/* 떠다니는 이미지들 */}
        <img className="floatImg bulb" src="/images/bulb.svg" alt="Bulb" />
        <img className="floatImg bulb2" src="/images/bulb2.svg" alt="Bulb 2" />
        <img
          className="floatImgKey1"
          src="/images/keycap1.svg"
          alt="Keycap 1"
        />
        <img
          className="floatImgKey2"
          src="/images/keycap2.svg"
          alt="Keycap 2"
        />
        <img
          className="floatImgKey3"
          src="/images/keycap3.svg"
          alt="Keycap 3"
        />
        <img
          className="floatImgMainkey"
          src="/images/mainkey.svg"
          alt="Main Keycap"
        />
        <img
          className="floatImgHeadset"
          src="/images/headset.svg"
          alt="Headset"
        />
        <img className="floatImgChess" src="/images/chess.svg" alt="Chess" />
      </section>
    </div>
  );
}
