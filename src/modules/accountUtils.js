import {getMyUser} from './apis/UserAPI';

export const getRoles = (token,navigation,success) => {

getMyUser(
    token,
 (user) => {
   if (
     !user.roles ||
     (!user.roles.includes("ROLE_SUPERADMIN") &&
       !user.roles.includes("ROLE_STUDENT") &&
       !user.roles.includes("ROLE_SPEAKER"))
   )
    navigation.navigate("/");
    success(user.roles);
 },
 (error) => {
    console.error(error);
 }
);
};