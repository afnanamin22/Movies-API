let containerr=[];
let showResult=[];
let CurrentArr=[];
let showCurrent=[];
let MovieArr,ResultArr;
let pass;
let LogoWidth=$('.sideNaveLogos').innerWidth();
let divWidth=$('.sideNav').innerWidth()-LogoWidth;
$('.sideNav').css('left',`-${divWidth}px`);
let myname=document.getElementById('uniquee1');
let myEmail=document.getElementById('uniquee2');
let myphone=document.getElementById('thirdInput');
let myage=document.getElementById('fourthInput');
let mypass=document.getElementById('fifthInput');
let myRepass=document.getElementById('sexthInput');
let searchTerm=document.getElementById('firstInput');
let currentSearch=document.getElementById('secondInput');
let title,date,y,link,a,db,b;
/* API to get now_playing movies and show it */
async function Display(PressedID)

{
     y= $(PressedID).attr('id');
     link='https://api.themoviedb.org/3/movie/now_playing?api_key=49999bf68d73d524a49e762fb2f55f8e';
     if(y=='playing')
     {
        link='https://api.themoviedb.org/3/movie/now_playing?api_key=49999bf68d73d524a49e762fb2f55f8e';
     }
      if(y=='top')
     {
        link='https://api.themoviedb.org/3/movie/top_rated?api_key=49999bf68d73d524a49e762fb2f55f8e';
     }
      if(y=='trending')
     {
        link='https://api.themoviedb.org/3/trending/all/day?api_key=49999bf68d73d524a49e762fb2f55f8e';
     }
      if(y=='upcoming')
     {
        link='https://api.themoviedb.org/3/movie/upcoming?api_key=49999bf68d73d524a49e762fb2f55f8e';
     }
     if(y=='popular')
     {
        link='https://api.themoviedb.org/3/movie/popular?api_key=49999bf68d73d524a49e762fb2f55f8e';
     }
    let now_playing=await fetch(`${link}`);
                            
    if(now_playing.status==200)
    {
        a= await now_playing.json();
    }
    MovieArr=a.results;
    for (let i = 0; i < MovieArr.length; i++) {
        if(MovieArr[i].media_type=="movie")
        {
            title=MovieArr[i].title;
            date=MovieArr[i].release_date;
        }
        else if(MovieArr[i].media_type=="tv")
        {
            title=MovieArr[i].name;
            date=MovieArr[i]. first_air_date;
        }
        else
        {
            title=MovieArr[i].title;
            date=MovieArr[i].release_date;
        }
        containerr+=` <div class="col-md-4 position-relative mt-4">
        <img src="https://image.tmdb.org/t/p/w500${MovieArr[i].poster_path}" class="img-fluid rounded ">
        <div class="hoverImage d-flex flex-column justify-content-center align-items-center position-absolute w-100 h-100 p-4">
        <h2 class=" text-black font-weight-bolder text-center">${title}</h2>
        <p class=" text-black font-weight-bolder text-center reshape">${MovieArr[i].overview}</p>
        <p class=" text-black font-weight-bolder">rate:${MovieArr[i].vote_average}</p>
        <p class=" text-black font-weight-bolder">${date}</p>
        </div>
        </div>`
    }
    
    document.getElementById('DisplayData').innerHTML=containerr;
  link='';
  containerr=[];
  return MovieArr;
}

/* To open the website on now_playing movies */
window.onload=function(){
    Display();
};
/* To change navBar Icon and show its elements */
$('.closedMenu i').click(function(){
    if($('.sideNav').css('left')=='0px')
    {
        $('.sideNav').animate({left:`-${divWidth}px`},500,function(){
            $('.secondIcon').css('opacity','0');
            $('.firstIcon').css('opacity','1');
        });
        
        
    }
    else
    {
       
        $('.sideNav').animate({left:'0px'},500,function(){
            $('.firstIcon').css('opacity','0');
            $('.secondIcon').css('opacity','1');
            $('.apear1').slideDown(400,function(){
                $('.apear2').slideDown(400,function(){
                    $('.apear3').slideDown(400,function(){
                        $('.apear4').slideDown(400,function(){
                            $('.apear5').slideDown(400)
                        }) 
                    })
                })
              })  
        }); 
        
       $('.apear1').css('display','none');
       $('.apear2').css('display','none');
       $('.apear3').css('display','none');
       $('.apear4').css('display','none');
       $('.apear5').css('display','none');
   /*     $('.apear6').css('display','none'); */
       
    }
})

/* Regex for validation */
let Emailregex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
let Passwordregex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
function checkEmail()
{
   if(Emailregex.test(myEmail.value)==false||myEmail.value=='')
   {
    $('.two').css({opacity:'1'},1000);
   }
   else
   {
    $('.two').css({opacity:'0'},1000);
    return true;
   }
   
}
function checkName()
{
    if(myname.value==''||myname.value.length<3)
    {
     $('.one').css({opacity:'1'},1000);
    }
    else
    {
     $('.one').css({opacity:'0'},1000);
     return true;
    }
}
function checkAge()
{
    if(myage.value=='')
    {
     $('.four').css({opacity:'1'},1000);
    }
    else
    {
     $('.four').css({opacity:'0'},1000);
     return true;
    }
}
function checkPhone()
{
    if(myphone.value==''||myphone.value.length<11)
    {
     $('.three').css({opacity:'1'},1000);
    }
    else
    {
     $('.three').css({opacity:'0'},1000);
     return true;
    }
}
function checkPassword()
{
    if(Passwordregex.test(mypass.value)==false||mypass.value=='')
    {
     $('.five').css({opacity:'1'},1000);
    }
    else if(Passwordregex.test(mypass.value)==true)
    {
     $('.five').css({opacity:'0'},1000);
     pass=mypass.value;
     return pass;
    }
}

function checkRepassword()
{
    let x=checkPassword();
    if(x!=myRepass.value||myRepass.value=='')
    {
        $('.sex').css({opacity:'1'},1000);
    }
    else if(x==myRepass.value)
    {
        $('.sex').css({opacity:'0'},1000);
        return true;
    }
}

function activate()
{
    if(myname.value!=0 && myEmail.value!=0 && myphone.value!=0 && myage.value!=0 && mypass.value!=0 && myRepass.value!=0)
    {
        if(checkEmail()&&checkName()&&checkAge()&&checkPhone()&&checkRepassword())
        {
            document.getElementById('submitbtn').innerHTML=`<input type="button" value="Submit " class="btn btnAdjust mb-4 mt-2 mx-4 submitBtn2">`;
        }
    }
    
}

/* Search in the MovieDb */
async function Search()
{
    
     db=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=49999bf68d73d524a49e762fb2f55f8e&query=${searchTerm.value}`);
                   
    if(db.status==200)
    {
        b= await db.json();
    }
    ResultArr=b.results;
    console.log(ResultArr);
    for (let i = 0; i < ResultArr.length; i++) {
        if(ResultArr[i].media_type=="movie")
        {
            title=ResultArr[i].title;
            date=ResultArr[i].release_date;
        }
        else if(ResultArr[i].media_type=="tv")
        {
            title=ResultArr[i].name;
            date=ResultArr[i].first_air_date;
        }
        else
        {
            title=ResultArr[i].title;
            date=ResultArr[i].release_date;
        }
        showResult+=` <div class="col-md-4 position-relative mt-4">
        <img src="https://image.tmdb.org/t/p/w500${ResultArr[i].poster_path}" class="img-fluid rounded ">
        <div class="hoverImage d-flex flex-column justify-content-center align-items-center position-absolute w-100 h-100 p-4">
        <h2 class=" text-black font-weight-bolder text-center">${title}</h2>
        <p class=" text-black font-weight-bolder text-center reshape">${ResultArr[i].overview}</p>
        <p class=" text-black font-weight-bolder">rate:${ResultArr[i].vote_average}</p>
        <p class=" text-black font-weight-bolder">${date}</p>
        </div>
        </div>`
    }
    
    document.getElementById('DisplayData').innerHTML=showResult;
    showResult='';

}

function CurrentSearch()
{

    for (let i = 0; i < MovieArr.length; i++) {
       if(MovieArr[i].title.toLowerCase().includes(currentSearch.value.toLowerCase()))
       {
            if(MovieArr[i].media_type=="movie")
            {
                title=MovieArr[i].title;
                date=MovieArr[i].release_date;
            }
            else if(MovieArr[i].media_type=="tv")
            {
                title=MovieArr[i].name;
                date=MovieArr[i].first_air_date;
            }
            else
            {
                title=MovieArr[i].title;
                date=MovieArr[i].release_date;
            }
        showCurrent+=` <div class="col-md-4 position-relative mt-4">
        <img src="https://image.tmdb.org/t/p/w500${MovieArr[i].poster_path}" class="img-fluid rounded ">
        <div class="hoverImage d-flex flex-column justify-content-center align-items-center position-absolute w-100 h-100 p-4">
        <h2 class=" text-black font-weight-bolder text-center">${title}</h2>
        <p class=" text-black font-weight-bolder text-center reshape">${MovieArr[i].overview}</p>
        <p class=" text-black font-weight-bolder">rate:${MovieArr[i].vote_average}</p>
        <p class=" text-black font-weight-bolder">${date}</p>
        </div>
        </div>`
       }
      
    }
    document.getElementById('DisplayData').innerHTML=showCurrent;
    showCurrent='';
}


