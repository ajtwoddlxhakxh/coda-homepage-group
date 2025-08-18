import React from "react";
import "./sub_project.css";

export default function SubProject() {
  return (
    <div className="quickmenu">
      {/* study 영역 */}
      <div className="qm-item qm-pos-study qm-glow-study">
        <div className="qm-icon-wrap">
          <img src="/img/gift.svg" alt="Gift" className="qm-icon" />
          <img src="/img/cursor.svg" alt="Cursor" className="qm-cursor" />
        </div>
        <span className="qm-label">STUDY</span>
      </div>

      {/* award 영역 (아이콘 오른쪽) */}
      <div className="qm-item qm-pos-award qm-glow-award qm-right">
        <div className="qm-icon-wrap">
          <img
            src="/img/crown.svg"
            alt="Crown"
            className="qm-icon qm-icon--award"
          />
          <img
            src="/img/cursor.svg"
            alt="Cursor"
            className="qm-cursor qm--award"
          />
        </div>
        <span className="qm-label">Award</span>
      </div>

      {/* activity 영역 */}
      <div className="qm-item qm-pos-activity qm-glow-activity">
        <div className="qm-icon-wrap">
          <img src="/img/gamepad.svg" alt="Gamepad" className="qm-icon" />
          <img src="/img/cursor.svg" alt="Cursor" className="qm-cursor" />
        </div>
        <span className="qm-label">Activity</span>
      </div>
    </div>
  );
}
