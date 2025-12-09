import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useRecruitPositions from "../hooks/useRecruitPositions";
import useSubmitRecruit from "../hooks/useSubmitRecruit";
import FormInput from "../components/form/FormInput";
import FormSelect from "../components/form/FormSelect";
import './subPage/sub_recruitment_join.css';

const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        // Generate random stars
        const newStars = Array.from({ length: 100 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 2,
        }));
        setStars(newStars);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: -1
        }}>
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                        borderRadius: '50%',
                        backgroundColor: 'white',
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
};

function RecruitApplyWrapper() {
    const { positions, loading, error } = useRecruitPositions();
    const { submitRecruit, loading: submitLoading, error: submitError, success } = useSubmitRecruit();

    // 상태 관리
    const [selectedPosition, setSelectedPosition] = useState("");
    const [email, setEmail] = useState("");
    const [question1, setQustion1] = useState("");
    const [question2, setQustion2] = useState("");
    const [question3, setQustion3] = useState("");
    const [question4, setQustion4] = useState("");
    const [question5, setQuestions] = useState("");

    // 제출 핸들러
    const handleSubmit = async () => {
        if (!selectedPosition || !question1 || !email || !question4) {
            alert("필수 항목을 모두 입력해주세요.");
            return;
        }

        try {
            await submitRecruit({
                positionId: selectedPosition,
                name: question1,
                email: email,
                phone: question4,
                documents: question5
            });
            alert("지원서가 성공적으로 제출되었습니다.");
        } catch (err) {
            alert("제출 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <div className={'apply-wrapper'} style={{ position: 'relative', minHeight: '100vh' }}>
            {/* 배경 파티클 적용 */}
            <StarBackground />

            <div className={'recruit-header'}>  <h2>모집 페이지</h2></div>

            <div className="required-notice">
                <span>*필수 항목</span>
            </div>

            <FormSelect
                label="모집 공고"
                name="position"
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
                options={positions.map(pos => ({ value: pos._id, label: pos.title }))}
                required={true}
                placeholder="모집 공고를 선택해주세요"
            />

            <FormInput
                label="이름"
                name="이름"
                type="text"
                value={question1}
                onChange={(e) => setQustion1(e.target.value)}
                required={true}
                placeholder="여기에 입력하세요"
            />

            <FormInput
                label="이메일"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
                placeholder="이메일을 입력하세요"
            />

            <FormInput
                label="전공"
                name="testInput"
                type="text"
                value={question2}
                onChange={(e) => setQustion2(e.target.value)}
                required={true}
                placeholder="여기에 입력하세요"
            />

            <FormSelect
                label="학년"
                name="testSelect"
                value={question3}
                onChange={(e) => setQustion3(e.target.value)}
                options={[
                    { value: "option1", label: "1 학년" },
                    { value: "option2", label: "2 학년" },
                    { value: "option3", label: "3 학년" },
                    { value: "option4", label: "4 학년"}
                ]}
                required={true}
                placeholder="학년을 선택해주세요"
            />

            <FormInput
                label="전화번호"
                name="testInput"
                type="text"
                value={question4}
                onChange={(e) => setQustion4(e.target.value)}
                required={true}
                placeholder="여기에 입력하세요"
            />

            <FormInput
                label="최근에 진행했던 프로젝트를 적어주세요"
                name="testInput"
                type="text"
                value={question5}
                onChange={(e) => setQuestions(e.target.value)}
                required={false}
                placeholder="여기에 입력하세요"
            />

            <button
                className="submit-button"
                onClick={handleSubmit}
                disabled={submitLoading}
            >
                {submitLoading ? "제출 중..." : "제출하기"}
            </button>
        </div>
    );
}

export default RecruitApplyWrapper;