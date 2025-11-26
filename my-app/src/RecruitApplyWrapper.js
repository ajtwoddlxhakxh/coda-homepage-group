import React from "react";
import useRecruitPositions from "./hooks/useRecruitPositions";
import RecruitApplyPage from "./clubrecru";

function RecruitApplyWrapper() {
  const { positions, loading, error } = useRecruitPositions();

  // 기본 질문
  const fallbackQ1 =
    "CODA에 지원하게 된 동기와 관심 있는 분야를 작성해 주세요.";
  const fallbackQ2 =
    "본인이 참여했던 프로젝트나 활동 중 인상 깊었던 경험을 작성해 주세요.";

  const first = positions?.[0] || null;
  const positionId = first?._id || null;
  const question1 = first?.question1 || fallbackQ1;
  const question2 = first?.question2 || fallbackQ2;

  let submitDisabledReason = null;
  if (!process.env.REACT_APP_API_URL)
    submitDisabledReason = "API 주소(.env)가 설정되지 않았습니다.";
  else if (loading) submitDisabledReason = "모집 공고를 불러오는 중입니다.";
  else if (error) submitDisabledReason = "모집 공고를 불러오지 못했습니다.";
  else if (!positionId)
    submitDisabledReason = "현재 모집 공고 기간이 아닙니다.";

  return (
    <RecruitApplyPage
      positionId={positionId} // 없으면 제출 불가
      question1={question1}
      question2={question2}
      submitDisabledReason={submitDisabledReason} // ⭐ 추가
    />
  );
}

export default RecruitApplyWrapper;
