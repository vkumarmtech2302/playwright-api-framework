class UserService {

 async getUser(request,id){

   return await request.get(
      `/api/users/${id}`
   );

 }

}