let main = document.getElementById('main')
let back = document.getElementById('back')
let galeriaContainer = document.getElementById('galeria_container')
let galeria = document.getElementById('galeria')


// Buttons
let btnEncuentroS = document.getElementById('btn_encuentroS')
let btnTortugasR = document.getElementById('btn_tortugasR')
let btnTortugasQ = document.getElementById('btn_tortugasQ')
let btnGolfY = document.getElementById('btn_golfY')
let btnMirafloresM = document.getElementById('btn_mirafloresM')
let btnpuertosF = document.getElementById('btn_puertosF')
let btnpachecoPS = document.getElementById('btn_pachecoPS')
let btnPilarA = document.getElementById('btn_pilarA')
let btnLagoGolfI = document.getElementById('btn_lagoGolfI')

// Button back
back.addEventListener('click', () => {
    main.style.display = 'block'
    galeriaContainer.style.display = 'none'
})

// Btn Encuentro S
btnEncuentroS.addEventListener('click', () => {
  

    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'

    galeria.innerHTML = ''

    let imagenes = [1,2,3,4,5,6,7,8,9,10,11,12];

    for (imagen of imagenes){

        galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/encuentroS/${imagen}.jpg" class="card-img-top img-card" alt="Encuentro S">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/encuentroS/${imagen}.jpg" class="img-fluid rounded" alt="Encuentro S"/>
                  </div>
                </div>
          </div>   
        `   
      }
    
})

// btn Tortugas R
btnTortugasR .addEventListener('click', () => {

    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'

    galeria.innerHTML = ''

    let imagenes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/tortugasR/${imagen}.jpg" class="card-img-top img-card" alt="Encuentro S">
                  </a>
                </div>

                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/tortugasR/${imagen}.jpg" class="img-fluid rounded" alt="Encuentro S"/>
                  </div>
                </div>
          </div>   
        `
    }
})

// btn Tortugas Q
btnTortugasQ .addEventListener('click', () => {

  main.style.display = 'none'
  galeriaContainer.style.display = 'block'
  galeria.style.display = 'block'

  galeria.innerHTML = ''

  let imagenes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

  for (imagen of imagenes){
    galeria.innerHTML += `
        <div class="col-12">
              <div class="card">
                <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                  <img src="./img/tortugasQ/${imagen}.jpg" class="card-img-top img-card" alt="Tortugas Q">
                </a>
              </div>

              <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                  <img src="./img/tortugasQ/${imagen}.jpg" class="img-fluid rounded" alt="Tortugas Q"/>
                </div>
              </div>
        </div>   
      `
  }
})

// btn GOLF Y
btnGolfY .addEventListener('click', () => {

  main.style.display = 'none'
  galeriaContainer.style.display = 'block'
  galeria.style.display = 'block'

  galeria.innerHTML = ''

  let imagenes = [1,2,3,4,5,6,7,8,9,10,11,12];

  for (imagen of imagenes){
    galeria.innerHTML += `
        <div class="col-12">
              <div class="card">
                <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                  <img src="./img/golfY/${imagen}.jpg" class="card-img-top img-card" alt="GOLF Y">
                </a>
              </div>

              <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                  <img src="./img/golfY/${imagen}.jpg" class="img-fluid rounded" alt="GOLF Y"/>
                </div>
              </div>
        </div>   
      `
  }
})

// btn Muelles Puertos F
btnpuertosF.addEventListener('click', () => {

  main.style.display = 'none'
  galeriaContainer.style.display = 'block'
  galeria.style.display = 'block'

  galeria.innerHTML = ''

  let imagenes = [1,2,3,4,5,6,7,8,9,10,11];

  for (imagen of imagenes){
    galeria.innerHTML += `
        <div class="col-12">
              <div class="card">
                <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                  <img src="./img/puertosF/${imagen}.jpg" class="card-img-top img-card" alt="Muelles Puertos F">
                </a>
              </div>

              <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                  <img src="./img/puertosF/${imagen}.jpg" class="img-fluid rounded" alt="Muelles Puertos F"/>
                </div>
              </div>
        </div>   
      `
  }
})

// btn Pacheco Golf PS
btnpachecoPS.addEventListener('click', () => {

  main.style.display = 'none'
  galeriaContainer.style.display = 'block'
  galeria.style.display = 'block'

  galeria.innerHTML = ''

  let imagenes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  for (imagen of imagenes){
    galeria.innerHTML += `
        <div class="col-12">
              <div class="card">
                <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                  <img src="./img/pachecoGolfPS/${imagen}.png" class="card-img-top img-card" alt="Pacheco Golf PS">
                </a>
              </div>

              <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                  <img src="./img/pachecoGolfPS/${imagen}.png" class="img-fluid rounded" alt="Pacheco Golf PS"/>
                </div>
              </div>
        </div>   
      `
  }
})

// btn Pilar A
btnPilarA.addEventListener('click', () => {

  main.style.display = 'none'
  galeriaContainer.style.display = 'block'
  galeria.style.display = 'block'

  galeria.innerHTML = ''

  let imagenes = [1,2,3,4,5,6,7,8,9,10,11,12,13];

  for (imagen of imagenes){
    galeria.innerHTML += `
        <div class="col-12">
              <div class="card">
                <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                  <img src="./img/pilarA/${imagen}.png" class="card-img-top img-card" alt="Pilar A">
                </a>
              </div>

              <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                  <img src="./img/pilarA/${imagen}.png" class="img-fluid rounded" alt="Pilar A"/>
                </div>
              </div>
        </div>   
      `
  }
})

// btn miraflores M
btnMirafloresM .addEventListener('click', () => {

  main.style.display = 'none'
  galeriaContainer.style.display = 'block'
  galeria.style.display = 'block'

  galeria.innerHTML = ''

  let imagenes = [1,2,3,4,5,6,7];

  for (imagen of imagenes){
    galeria.innerHTML += `
        <div class="col-12">
              <div class="card">
                <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                  <img src="./img/mirafloresM/${imagen}.jpg" class="card-img-top img-card" alt="miraflores M">
                </a>
              </div>

              <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                  <img src="./img/mirafloresM/${imagen}.jpg" class="img-fluid rounded" alt="miraflores M"/>
                </div>
              </div>
        </div>   
      `
  }
})

// btn Lagos del golf I
btnLagoGolfI.addEventListener('click', () => {

  main.style.display = 'none'
  galeriaContainer.style.display = 'block'
  galeria.style.display = 'block'

  galeria.innerHTML = ''

  let imagenes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

  for (imagen of imagenes){
    galeria.innerHTML += `
        <div class="col-12">
              <div class="card">
                <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                  <img src="./img/lagosGolf1/${imagen}.png" class="card-img-top img-card" alt="Lagos del golf I">
                </a>
              </div>

              <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                  <img src="./img/lagosGolf1/${imagen}.png" class="img-fluid rounded" alt="Lagos del golf I"/>
                </div>
              </div>
        </div>   
      `
  }
})