// here we can get properties one by one by using loop

const menuitems ={
    menu1 : "Admin",
    menu2 : "PIM",
    menu3 : "Claim",
    menu4 : "Recruitement",
    menu5 : "Leave",
    menu6 : "Time",
    menu7 : "My Info",
}

for (let item in menuitems){
    console.log(menuitems[item])
}