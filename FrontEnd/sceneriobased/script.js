async function getWheather(city){ 
        let apikey=`7841b9f47a9e3ef8d70c588402d6ef89`;  
    try{
        let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        if(!res.ok){
            throw new Error("Https Error try Again");
        }
        let data= await res.json();
        console.log(data);
    }
    catch(err){
        console.log("Errpr:- ",err.message);
    }
}
getWheather("Gorakhpur");


