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
function Manage_applicantTable({currentPage, items = []}) {

    // 로컬 테스트용 데이터 (items가 비어있을 때 사용)



    const tableHeaders = [
        { key: 'checkbox', data: '', type:'checkbox'},
        { key: '_id', data: '번호' },
        { key: 'name', data: '이름' },
        { key: 'phone', data: '연락처' },
        { key: 'createdAt', data: '신청일시' },
        { key: 'status', data: '상태' }
    ]

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
                            tableHeaders.map((header) => (
                                        <td key={header.key + id}>
                                    {header.type === 'checkbox'
                                        ? (<input type="checkbox" />)
                                        : (item[header.key]
                                    )}
                                </td>
                            ))
                        }
                    </tr>

                ))
            }
            </tbody>
        </table>
    )
}

export function getPage(){
    alert('ggg')
}


export default Manage_applicantTable