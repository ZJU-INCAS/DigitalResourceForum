export default async function(url,init){
    //const baseUrl = Constants.config.apiUrl;

    //const fetchUrl = `${baseUrl}${url}`;

    // let response;

    // if (init) {

    //     response = await fetch(fetchUrl, init);

    // } else {

    //     response = await fetch(fetchUrl);

    // }
    const headers = formHeader();
    if(init){
        init.headers = headers;
    }else{
        init={headers:headers};
    }
   
    let response = await fetch(url,init)

    return response;
}

function formHeader(){
    const headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    return headers;
}