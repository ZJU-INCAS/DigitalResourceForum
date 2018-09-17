import myFetch from './fetchUtility';

/**
 * 获取所有用户信息
 */
export async function getUsers(){
    const url = `http://111.231.120.224:3040/api/User`;
    const response = await myFetch(url);
    const userInfo = await response.json();
    return userInfo;
}

/**
 * 根据用户Id获取用户信息
 * @param {用户Id} userId 
 */
export async function getUserInfo(userId) {
    const url = `http://111.231.120.224:3040/api/User/${userId}`;
    const response = await myFetch(url);
    const userInfo = await response.json();
    return userInfo;
}

/**
 * 充值
 * @param {用户id} userId 
 * @param {充值金额} balance 
 */
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

/**
 * 获取待审核充值记录
 */
export async function getRechargeCheckList(){
    const filter = JSON.stringify({"where":{"confirmBank": "N"}})
    const url = `http://111.231.120.224:3040/api/UserTokenRecharge?filter=${filter}`;
    const response = await myFetch(url);
    return await response.json();
}

/**
 * 获取审核通过的充值记录
 */
export async function getAcceptedReqs(){
    const url = 'http://111.231.120.224:3040/api/queries/GetUserTokenRechargeY';
    const response = await myFetch(url);
    return await response.json();
}

/**
 * 获取拒绝通过的充值记录
 */
export async function getRejectedReqs(){
    const url = 'http://111.231.120.224:3040/api/queries/GetUserTokenRechargeR';
    const response = await myFetch(url);
    return await response.json();
}

/**
 * 对充值记录进行审核
 * @param {审核id} id 
 * @param {拒绝or通过}} opt 
 */
export async function checkRecharge(id,opt){
    const url = opt==='accept'?`http://111.231.120.224:3040/api/checkUserRecharge`:'http://111.231.120.224:3040/api/RejectUserRecharge';
    const body = JSON.stringify({
        rechargeID:id
    });
    const response=await myFetch(url,{method:"POST",body});
    return response;
}

/**
 * 获取所有服务资源
 */
export async function getResources(){
    const url = `http://111.231.120.224:3040/api/Service`;
    const response = await myFetch(url);
    return await response.json();
}

/**
 * 根据id获取资源详细信息
 * @param {资源id} id 
 */
export async function getResourceById(id){
    const url = `http://111.231.120.224:3040/api/Service/${id}`;
    const response = await myFetch(url);
    return await response.json();
}
/**
 * 根据用户id获取用户已购买资源
 * @param {用户id}} userId 
 */
export async function getMyResources(userId){
    const filter = JSON.stringify({"where":{"user":`resource:token.User%23${userId}`}});
    const url = `http://111.231.120.224:3040/api/UserConsumeService?filter=${filter}`
    const response = await myFetch(url);
    return await response.json();
}

/**
 * 查看用户是否已经购买过某个资源
 * @param {用户id} userId 
 * @param {资源id} itemId 
 */
export async function consumeItem(userId,itemId){
    const url ='http://111.231.120.224:3040/api/UserConsumeService';
    const body = JSON.stringify({  
        "serviceID": `resource:token.Service#${itemId}`,  
        "user": `resource:token.User#${userId}`,  
      })
      const response = await myFetch(url,{method:"POST",body});
      return response;
}
/**
 * 
 * @param {用户id} userId 
 */
export async function getUserRechargeRecords(userId){
    const filter = JSON.stringify({"where":{"user":`resource:token.User%23${userId}`}});
    const url = `http://111.231.120.224:3040/api/UserTokenRecharge?filter=${filter}`
    const response = await myFetch(url);
    return await response.json();
}