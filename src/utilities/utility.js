import myFetch from './fetchUtility';

export async function getUserInfo(userId) {
    const url = `http://111.231.120.224:3040/api/User/${userId}`;
    const response = await myFetch(url);
    const userInfo = await response.json();
    return userInfo;
}

export async function recharge(userId, balance) {
    const url = `http://111.231.120.224:3040/api/UserRecharge`;
    const body = {
        "$class": "token.UserRecharge",
        "TokenNum": balance,
        "rechargeID": "testrecharge#1",
        "user": `resource:token.User#${userId}`
    };
    const response = await myFetch(url, { method: "POST", body })
    return response;
}