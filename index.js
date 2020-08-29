let main = document.getElementById('main')
let back = document.getElementById('back')
let galeriaContainer = document.getElementById('galeria_container')
let galeria = document.getElementById('galeria')

// Buttons
let btnEncuentroS = document.getElementById('btn_encuentroS')
let btnTortugasR = document.getElementById('btn_tortugasR')

back.addEventListener('click', () => {
    main.style.display = 'block'
    galeriaContainer.style.display = 'none'
})

// Btn Encuentro S
btnEncuentroS.addEventListener('click', () => {
  console.log('presionaste el boton de ver mas')

    main.style.display = 'none'
    galeriaContainer.style.display = 'block'

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
// btnTortugasR .addEventListener('click', () => {
//   console.log('presionaste el boton de ver mas')

//     main.style.display = 'none'
//     galeriaContainer.style.display = 'block'

//     let imagenes = [1,2,3,4,5,6,7,8,9,10,11,12];

//     for (imagen of imagenes){
//         galeria.innerHTML += `
//           <div class="col-12">
//                 <div class="card">
//                   <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
//                     <img src="./img/encuentroS/${imagen}.jpg" class="card-img-top img-card" alt="Encuentro S">
//                   </a>
//                 </div>

//                 <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                   <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
//                     <img src="./img/encuentroS/${imagen}.jpg" class="img-fluid rounded" alt="Encuentro S"/>
//                   </div>
//                 </div>
//           </div>   
//         `
//     }
// })
