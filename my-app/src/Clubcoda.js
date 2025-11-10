import "./Clubcoda.css";

export default function ClubCoda({
  logoSrc = "/logo.svg",
  description = "설명문을 여기에 적어주세요.",
}) {
  return (
    <section className="ClubCoda">
      <img className="ClubCoda__logo" src={logoSrc} alt="동아리 심볼" />
      <p className="ClubCoda__desc">{description}</p>
    </section>
  );
}