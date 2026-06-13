class ApiClient {

 async get(request, endpoint) {
   return await request.get(endpoint);
 }

 async post(request, endpoint, body) {
   return await request.post(endpoint,{
      data: body
   });
 }

}

module.exports = ApiClient;