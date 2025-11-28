import React, { useState } from "react";
import useRecruitPositions from "../hooks/useRecruitPositions";
import RecruitApplyPage from "./subPage/sub_recruitment_join";
import FormInput from "../components/form/FormInput";
import FormTextarea from "../components/form/FormTextarea";

function RecruitApplyWrapper() {
  const { positions, loading, error } = useRecruitPositions();

  // 테스트용 state
  const [testInput, setTestInput] = useState("");

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
  // if (!process.env.REACT_APP_API_URL)
  //     return <div className={'recruit-status-error'}><h1>API 주소(.env)가 설정되지 않았습니다.</h1></div>
  // else if (loading)
  //     return <div className={'recruit-status-error'}><h1>모집 공고를 불러오는 중입니다</h1></div>
  // else if (error)
  //     return <div className={'recruit-status-error'}><h1>모집 공고를 불러오지 못했습니다</h1></div>;
  // else if (!positionId)
  //     return <div className={'recruit-status-error'}><h1>현재 모집 공고 기간이 아닙니다.</h1></div>
  return (

    <div className={'apply-wrapper'}>



      <FormInput
      label="테스트 입력"
      name="testInput"
      type="text"
      value={testInput}
      onChange={(e) => setTestInput(e.target.value)}
      required={true}
      placeholder="여기에 입력하세요"
      />
      <FormInput
      label="테스트 입력"
      name="testInput"
      type="text"
      value={testInput}
      onChange={(e) => setTestInput(e.target.value)}
      required={true}
      placeholder="여기에 입력하세요"
      />

      <FormTextarea
        label="<UNK> <UNK>"
        name="testInput"
        type="text"
        value={testInput}
        onChange={(e) => setTestInput(e.target.value)}
        required={true}
        placeholder="<UNK> <UNK>"
        />
    </div>
  );
}

export default RecruitApplyWrapper;
