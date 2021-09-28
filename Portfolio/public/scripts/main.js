
function main(){
    console.log("main");

    $("#interactive > button").click((event)=>{
        const ans = $(event.target).data("ans");
        showAns(ans);
        console.log("test");
    });
}

let bsb = false;
let tv = false;
let movie = false;
let song = false;
let food = false;



function showAns(ans){
    let color = "grey";
    switch(ans){
        case "White Sox":
            if(bsb){
                ans = "Favorite Baseball Team";
                color = "red";
            }
            $("#baseball").html(ans);
            $("#baseball").css("background-color", color)
            bsb = !bsb;
            break;
        case "The Office":
            if(tv){
                ans = "Favorite Tv Show";
                color = "red";
            }
            $("#tv").html(ans);
            $("#tv").css("background-color", color)
            tv= !tv;
            break;
        case "Hoosiers":
            if(movie){
                ans = "Favorite Movie";
                color = "red";
            }
            $("#movie").html(ans);
            $("#movie").css("background-color", color)
            movie = !movie;
            break;
        case "Born to Run":
            if(song){
                ans = "Favorite Song";
                color = "red";
            }
            $("#song").html(ans);
            $("#song").css("background-color", color)
            song = !song;
            break;
        case "Strawberries":
            if(food){
                ans = "Favorite Food";
                color = "red";
            }
            $("#food").html(ans);
            $("#food").css("background-color", color)
            food = !food;
            break;
        default:
            break;
    }
}

main();