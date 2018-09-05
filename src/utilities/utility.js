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
        "tokenNum": balance,
        "rechargeID": "rid"+Date.now().toString(),
        "user": userId
    });
    const response = await myFetch(url, { method: "POST", body })
    return response;
}

export async function getRechargeCheckList(){
    const filter = JSON.stringify({"where":{"confirmBank": "N"}})
    const url = `http://111.231.120.224:3040/api/UserTokenRecharge?filter=${filter}`;
    const response = await myFetch(url);
    return await response.json();
}

export async function checkRecharge(id,opt){
    const url = opt==='accept'?`http://111.231.120.224:3040/api/checkUserRecharge`:'http://111.231.120.224:3040/api/RejectUserRecharge';
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
    const filter = JSON.stringify({"where":{"user":`resource:token.User%23${userId}`}});
    console.log(filter);
    const url = `http://111.231.120.224:3040/api/UserConsumeService?filter=${filter}`
    console.log(url);
    const response = await myFetch(url);
    return await response.json();
}

export async function consumeItem(userId,itemId){
    const url ='http://111.231.120.224:3040/api/UserConsumeService';
    const body = JSON.stringify({  
        "serviceID": `resource:token.Service#${itemId}`,  
        "user": `resource:token.User#${userId}`,  
      })
      const response = await myFetch(url,{method:"POST",body});
      return response;
}