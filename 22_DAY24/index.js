function calculateWeightOnPlanet(planetName, massOfObject) {
    document.getElementById('pImg').src = getPlanetImageSrc(planetName.toLowerCase())
    document.getElementById('p').textContent = planetName;

    const gravitationalAccelerations = {
      mercury: 3.7,
      venus: 8.87,
      earth: 9.81,
      mars: 3.71,
      jupiter: 24.79,
      saturn: 10.44,
      uranus: 8.69,
      neptune: 11.15,
      pluto: 0.62 
    };
    if (gravitationalAccelerations.hasOwnProperty(planetName.toLowerCase())) {
      const acceleration = gravitationalAccelerations[planetName.toLowerCase()];
      const weight = massOfObject * acceleration;
      return weight.toFixed(2); 
    } else {
      return "Invalid planet name. Please enter a valid planet name.";
    }
  }
  

  const planetImage = document.getElementById('pImg');
  const mass = document.getElementById('mass');
  const planet = document.getElementById('opt');

  function handleMassCalc(){
    const massValue = mass.value;
    const pName = planet.value;
    if(massValue!=='' && pName!==''){
        document.getElementById('mmm').style.display='flex'
        document.getElementById('err').style.display='none'
        console.log(pName,parseFloat(massValue))
        const ans =calculateWeightOnPlanet(pName,parseFloat(massValue))
        if(isNaN(ans)){
            document.getElementById('err').style.display='flex'
            document.getElementById('mmm').style.display='none'
        }else
        document.getElementById('ans').textContent = Math.round(ans)+' N';
    }else{
        document.getElementById('err').style.display='flex'
        document.getElementById('mmm').style.display='none'
    }
  }



  function getPlanetImageSrc(planetName) {
    switch (planetName) {
      case 'mercury':
        return 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/mercury.png'; 
      case 'venus':
        return 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/venus.png'; 
      case 'earth':
        return 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/earth.png'; 
      case 'mars':
        return 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/mars.png'; 
      case 'jupiter':
        return 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/jupiter.png';
      case 'saturn':
        return 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/saturn.png'; 
      case 'uranus':
        return 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/uranus.png';
      case 'neptune':
        return 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/neptune.png';
      case 'pluto':
        return 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/pluto.png'; 
      default:
        return ''; 
    }
  }