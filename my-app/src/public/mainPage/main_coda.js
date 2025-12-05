import "./main_coda.css";


export default function Main_coda() {
  return (
    <div className="submain">
      {/* CODA 섹션 */}
      <section className="codaSection">
        {/* 중앙 CODA 문구 */}
        <div className="codaStack">
          <div className="codaRow">
            <span className="init initC">C</span>REATE
          </div>
          <div className="codaRow">
            <span className="init initO">O</span>BSERVE
          </div>
          <div className="codaRow">
            <span className="init initD">D</span>EVELOP
          </div>
          <div className="codaRow">
            <span className="init initA">A</span>CHIEVE
          </div>
        </div>

        {/* 떠다니는 이미지들 */}
        <img className="floatImg bulb" src="/img/coda_logo.svg" alt="Bulb" />
        <img className="floatImg bulb2" src="/img/bulb2.svg" alt="Bulb 2" />
        <img className="floatImg Key1" src="/img/keycap1.svg" alt="Keycap 1" />
        <img className="floatImg Key2" src="/img/keycap2.svg" alt="Keycap 2" />
        <img className="floatImg Key3" src="/img/keycap3.svg" alt="Keycap 3" />
        <img className="floatImg Mainkey" src="/img/mainkey.svg" alt="Main Keycap" />
        <img className="floatImg Headset" src="/img/headset.svg" alt="Headset" />
        <img className="floatImg Chess" src="/img/chess.svg" alt="Chess" />
      </section>
    </div>
  );
}
