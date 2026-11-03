(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw1o = document.getElementById('cw1o')
  const cw1i = document.getElementById('cw1i');
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  cw1.addEventListener("click", async function() {

    console.log(cw1i.value)

    const response = await fetch(
      `https://api.restcountries.com/countries/v5?capitals=${cw1i.value}`,
      { headers: { 'Authorization': 'Bearer rc_live_21bee135e4e34f65a0b85421b69407d0' } }
    )

    const result = await response.json().then(array => {
      const country = array.data.objects[0];
      const name = country.names.common;
      const capital = country.capitals[0].name;
      const population = country.population;
      const region = country.region;
      const subregion = country.subregion;

      cw1o.innerHTML = JSON.stringify(`Country: ${name}, Capital: ${capital}, Population: ${population}, Region: ${region}, Subregion: ${subregion}`);
    })

  })

  cw1.addEventListener("click", function() {
    //TODO
  })

  cw2.addEventListener("click", function() {
    //TODO
  })

  cw3.addEventListener("click", function() {
    //TODO
  })

})();
