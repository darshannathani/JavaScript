var user = "";

switch(user){
    case "admin":
        console.log("full access");
        break;
    case "user":
        console.log("User limited access");
        break;
    default:
        console.log("Guest user access");
        break;
}