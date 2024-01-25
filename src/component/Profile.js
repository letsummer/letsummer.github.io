import githubLogo from "../img/github-mark.png";
import web from "../img/web.png";
import "../css/styles.css";
function Profile(){
    return(
        <div className='contents'>
            {/* <header><h1>Profile</h1></header> */}
            <main>
                <div>
                    <h4>이름</h4>
                    <p>최여름</p>
                </div>
                <div>
                    <h4>연락처</h4>
                    <p><img className="icon" src={githubLogo} alt="" /><a href="https://github.com/letsummer" target="_blank">letsummer</a></p>
                    <p>📧letsummerparty@gmail.com</p>
                    <p></p>
                </div>
                <div>
                    <h4>기술스택</h4>
                </div>
                <div>
                    <h4>자기소개</h4>
                    <p>
                        웹 개발자로 성장하고 싶은 여름입니다.
                    </p>
                </div>
                <div>
                    <h4>경력</h4>
                    <table>
                        <tr>
                            <th>2019~2022</th>
                            <td></td>
                            <td>(주)모두솔루션 CAD 개발 및 기술지원</td>
                        </tr>
                        <tr>
                            <th>2015~2019</th>
                            <td></td>
                            <td>컴퓨터학부 학사</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <h4>프로젝트</h4>
                </div>
            </main>         
        </div>
    )
}

export default Profile;