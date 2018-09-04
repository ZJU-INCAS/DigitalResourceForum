import myFetch from './fetchUtility';

export async function getUserInfo(userId) {
    const url = `http://111.231.120.224:3040/api/User/${userId}`;
    const response = await myFetch(url);
    const userInfo = await response.json();
    return userInfo;
}

export async function recharge(userId, balance) {
    const url = `http://111.231.120.224:3040/api/UserRecharge`;
    const body = JSON.stringify({
        "$class": "token.UserRecharge",
        "TokenNum": balance,
        "rechargeID": "testrecharge#1",
        "user": `resource:token.User#${userId}`
    });
    const response = await myFetch(url, { method: "POST", body })
    return response;
}

export async function getRechargeCheckList(){
    const url = `http://111.231.120.224:3040/api/CheckTokenRecharge`;
    const response = await myFetch(url);
    return await response.json();
}

export async function checkRecharge(id,opt){
    const url = `http://111.231.120.224:3040/api/checkUserRecharge`;
    const body = JSON.stringify({
        rechargeID:id
    });
    const response=await myFetch(url,{method:"POST",body});
    return response;
}

export async function getResources(){
    const url = `http://111.231.120.224:3040/api/Service`;
    const response = await myFetch(url);
    return await response.json();
}


export async function getMyResources(userId){
    const url = `http://111.231.120.224:3040/api/UserConsumeService?filter={"where":"user":"${userId}"}}
    `
    const response = await myFetch(url);
    return await response.json();
}

export async function consumeItem(userId,itemId){
    const url ='http://111.231.120.224:3040/api/UserConsumeService';
    const body = JSON.stringify({ 
        "$class": "token.UserConsumeService",  
        "serviceID": "resource:token.Service#service2%40mooc",  
        "contractID": "resource:token.Contract#contract%40mooc", 
        "user": "resource:token.User#user2%40email.com",  
        "company": "resource:token.Company#mooc%40email.com", 
        "bank": "resource:token.CentralBank#centralbank%40email.com" 
      })
      const response = await myFetch(url,{method:"POST",body});
}