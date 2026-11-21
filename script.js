(function() {
  const REST_COUNTRIES_AUTHORISATION = 'Bearer rc_live_21bee135e4e34f65a0b85421b69407d0';
  
  const cw1 = document.getElementById('cw1')
  const cw1o = document.getElementById('cw1o')
  const cw1i = document.getElementById('cw1i');


  cw1.addEventListener("click", async function() {

    const response = await fetch(
      `https://api.restcountries.com/countries/v5?capitals=${cw1i.value}`,
      { headers: { 'Authorization': REST_COUNTRIES_AUTHORISATION } }
    )

    const result = await response.json().then(array => {
      const country = array.data.objects[0];
      const name = country.names.common;
      const capital = country.capitals[0].name;
      const population = country.population;
      const region = country.region;
      const subregion = country.subregion;

      console.log(array)

      cw1o.innerHTML = JSON.stringify(`Country: ${name}, Capital: ${capital}, Population: ${population}, Region: ${region}, Subregion: ${subregion}`);
    })

  })

  const cw2 = document.getElementById('cw2')

  cw2.addEventListener("click", async function() {
    const response = await fetch(
      `https://api.restcountries.com/countries/v5?q=${cw2i.value}`,
      { headers: { 'Authorization': REST_COUNTRIES_AUTHORISATION } }
    )

    const result = await response.json().then(array => {
      const country = array.data.objects[0];
      const name = country.names.common;
      const capital = country.capitals[0].name;
      const population = country.population;
      const region = country.region;
      const languages = country.languages;

      console.log(array)

      let languageText = "";

      for (let l = 0; l < languages.length; l++) {
        if(l > 0)
          languageText += ", ";
        languageText += languages[l].name;
      }

      cw2o.innerHTML = `Country: ${name}, Capital: ${capital}, Population: ${population}, Region: ${region}, Languages: ${languageText}`;
    })

  })

  const cw3 = document.getElementById('cw3')
  const cw3o = document.getElementById('cw3o')
  const cw3i = document.getElementById('cw3i')

  cw3.addEventListener("click", async function() {
    const response = await fetch(
      `https://api.restcountries.com/countries/v5?region=${cw3i.value}`,
      { headers: { 'Authorization': REST_COUNTRIES_AUTHORISATION } }
    )

    let data = [];

    const result = await response.json();


    console.log(result.data.objects)
    
    result.data.objects.forEach(country => {
      const name = country.names.common;
      const capital = country.capitals[0].name;
      const population = country.population;
      const region = country.region;
      const languages = country.languages;

      console.log(country)

      let languageText = "";

      for (let l = 0; l < languages.length; l++) {
        if(l > 0)
          languageText += ", ";
        languageText += languages[l].name;
      }

      data.push(`Country: ${name}, Capital: ${capital}, Population: ${population}, Region: ${region}, Languages: ${languageText}`);

    })

  data.sort((a, b) => a.localeCompare(b));
  cw3o.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;

  })

})();
