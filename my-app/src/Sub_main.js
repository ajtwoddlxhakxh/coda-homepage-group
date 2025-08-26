import "./Sub_main.css";

export default function Sub_main() {
  return (
    <div className="submain">
      {/* CODA 섹션 */}
      <section className="coda-section">
        {/* 중앙 CODA 문구 */}
        <div className="coda-stack">
          <div className="coda-row">
            <span className="init init-c">C</span>REATE
          </div>
          <div className="coda-row">
            <span className="init init-o">O</span>BSERVE
          </div>
          <div className="coda-row">
            <span className="init init-d">D</span>EVELOP
          </div>
          <div className="coda-row">
            <span className="init init-a">A</span>CHIEVE
          </div>
        </div>

        {/* 떠다니는 이미지들 */}
        <img className="float-img bulb" src="/images/bulb.svg" alt="Bulb" />
        <img className="float-img bulb2" src="/images/bulb2.svg" alt="Bulb 2" />
        <img
          className="float-img key1"
          src="/images/keycap1.svg"
          alt="Keycap 1"
        />
        <img
          className="float-img key2"
          src="/images/keycap2.svg"
          alt="Keycap 2"
        />
        <img
          className="float-img key3"
          src="/images/keycap3.svg"
          alt="Keycap 3"
        />
        <img
          className="float-img mainkey"
          src="/images/mainkey.svg"
          alt="Main Keycap"
        />
        <img
          className="float-img headset"
          src="/images/headset.svg"
          alt="Headset"
        />
        <img className="float-img chess" src="/images/chess.svg" alt="Chess" />
      </section>
    </div>
  );
}
