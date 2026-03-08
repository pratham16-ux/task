let day = 1
switch(day){
    case 1:
        console.log("Monday"); break;

    case 2:
        console.log("Tuesday"); break;

    case 3:
        console.log("Wednesday"); break;

    case 4:
        console.log("Thursday"); break;

    case 5:
        console.log("Friday"); break;

    case 6:
        console.log("saturday"); break;

    case 7:
        console.log("Sunday"); break;
         
    default:
        console.log("invalid day");
                    
}



//2
let trafficlight = "red"
switch(trafficlight){
    case "red":
        console.log("Stop");break;

    case "yellow":
        console.log("Ready");break;

    case "Green":
        console.log("Go");break;
    
    default:
        console.log("invalid signal");
            
}


//3
let month =3
switch(month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter Season");break;

    case 3:
    case 4:
    case 5:
        console.log("Summer Season");break;

    case 6:
    case 7:
    case 8:
        console.log("Rainy Season");break;

    case 9:
    case 10:
    case 11:
        console.log("Autumn Season");break;

    default:
        console.log("Invalid month");
}

//4
let role = "User"
switch (role) {
    case "Admin":
        console.log("Full Access");break;
    
    case "User":
        console.log("limited Access");break;

    case "Guest message":
        console.log("Guest Access only");break;
           
    default:
        console.log("Unknown Role");
}

//5
let grade ="b+"
switch (grade) {
    case "a+":
        console.log("Outstanding");break;

    case "a":
        console.log("Excellent");break;
            
    case "b+":
        console.log("Very Good");break;
        
    case "b":
        console.log("Good");break; 
        
    case "c+":
        console.log("Average");break;

    case "c":
        console.log("Needs improvement");
           
    default:
        console.log("Invalid grade");
}