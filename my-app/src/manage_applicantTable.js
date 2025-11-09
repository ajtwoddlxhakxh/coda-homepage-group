import { useEffect, useState, useRef} from "react";
import {Link, useLocation} from "react-router-dom";


// CSS 구조:
// .Manage_applicantTable (table)
//   ├─ thead
//   │   └─ tr
//   │       ├─ th (체크박스)
//   │       ├─ th (번호)
//   │       ├─ th (이름)
//   │       ├─ th (연락처)
//   │       ├─ th (신청일시)
//   │       └─ th (상태)
//   │
//   └─ tbody
//       └─ tr
//           ├─ td.checkbox (input[type="checkbox"])
//           ├─ td.id
//           ├─ td.name
//           ├─ td.contact
//           ├─ td.date
//           └─ td.status

// className은 아직 작성 안해놨어요
function Manage_applicantTable(props) {



    const tableHeaders = [
        { key: 'checkbox', data: '', type:'checkbox'},
        { key: 'id', data: '번호' },
        { key: 'name', data: '이름' },
        { key: 'contact', data: '연락처' },
        { key: 'date', data: '신청일시' },
        { key: 'status', data: '상태' }
    ]
    // 테스트용 데이터
    const items = [
        {

            checkbox: 'checkbox',
            id: 1,
            name: '쵸오비',
            contact: '010-1234-5678',
            date: '2025-11-11',
            //todo status는 데이터에서 상태 확인하고 img불러오기
            // · << 이미지로 출력해야될거같아요
            status: 'x'
        },
        {
            checkbox: 'checkbox',
            id: 2,
            name: '페이커',
            contact: '010-1234-5678',
            date: '2025-11-12',
            status: 'o'
        },

    ]
// 타입이 페이지 번호일때는 번호 출력


    if (props.type === 'pagination') {
        const currentPage = 0
        // useEffect(()=>{
        //     // 한 페이지당 행 6개 출력
        //
        //     const pageLength = (items.length / 6)
        //
        //
        //
        // },[])
        return (
            <nav>
                <button></button>
            </nav>
        )
    }
    return(
        <table>
            {/*테이블 머리*/}
            <thead>
            <tr>
                {/*todo 클릭시 이벤트 필요 */}
                {/*전체 선택용 체크박스*/}
                <th><input type={'checkbox'}/> </th>
                <th>번호</th>
                <th>이름</th>
                <th>연락처</th>
                <th>신청일시</th>
                <th>상태</th>
            </tr>
            </thead>

            <tbody>
            {
                items.map((item, id) => (
                    <tr key={id}>
                        {
                            tableHeaders.map((header) =>
                            // todo key === 'checkbox'일경우? checkbox출력

                            <td key={header.key + id}>

                                {item[header.key]}
                            </td>
                            )}
                    </tr>

                ))
            }
            </tbody>
        </table>
    )
}





export default Manage_applicantTable