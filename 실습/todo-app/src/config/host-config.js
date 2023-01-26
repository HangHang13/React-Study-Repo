
let backendHost; //백엔드 호스트 주소

//브라우저가 현재 클라이언트 호스트 이름 얻어오기
const hostname = window.location.hostname;
if (hostname === "localhost"){
    backendHost = 'http://localhost:8080';
    
}else if (hostname ==='lalala.com'){
    backendHost = 'http://lalala.com';
}

export const BASE_URL = backendHost;
export const TODO = '/api/todos';
export const USER = '/api/auth';