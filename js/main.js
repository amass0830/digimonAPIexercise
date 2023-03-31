window.addEventListener('DOMContentLoaded', () => {
    async function getpickedDigimon() {
      try {
        const apiDigimonURL = "https://digimon-api.vercel.app/api/digimon";
        const resPickedDigimon = await fetch(apiDigimonURL);
  
        if (!resPickedDigimon.ok) {
          throw new Error(`HTTP error! status: ${resPickedDigimon.status}`);
        }
  
        const dataPickedDigimon = await resPickedDigimon.json();
  
        if (Array.isArray(dataPickedDigimon) && dataPickedDigimon.length > 0) {
          const randomIndex = Math.floor(Math.random() * dataPickedDigimon.length);
          const pickedDigimon = dataPickedDigimon[randomIndex];
          const pickedDigimonInfoTemplate = `
            <div class="digimon">
              <img src="${pickedDigimon.img}">
              <h3>Nombre: ${pickedDigimon.name}</h3>
              <p>lvl: ${pickedDigimon.level}</p>
            </div>
          `; 
          const pickedDigiInfo = document.querySelector("#pickedDigimonInfo");
          pickedDigiInfo.innerHTML = pickedDigimonInfoTemplate;
        } else {
          console.log("No data found in response.");
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    const pickDigimonButton = document.querySelector("#pickdigimon");
    pickDigimonButton.addEventListener("click", () => {
      getpickedDigimon();
    });
  });



  document.addEventListener('DOMContentLoaded', function() {
    const apiDigiURL = "https://digimon-api.vercel.app/api/digimon";
  
    async function getDigimons() {
      const res = await fetch(apiDigiURL);
      const dataGetDigimons = await res.json();
      return dataGetDigimons;
    }
  
    async function renderDigimons() {
      const digimons = await getDigimons();
      let digimontemplate = "";
      digimons.forEach((digimon) => {
        digimontemplate += `
            <div class="digimon">
              <img src="${digimon.img}">
              <h3>Nombre: ${digimon.name}</h3>
              <p>lvl: ${digimon.level}</p>
            </div>
          `;
      });
  
      const digimonSection = document.querySelector("#ListDigimonInfo");
      digimonSection.innerHTML = digimontemplate;
    }
  
    const digimonButton = document.querySelector("#listdigimon");
    digimonButton.addEventListener("click", renderDigimons);
  });
  