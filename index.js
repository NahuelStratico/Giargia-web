let main = document.getElementById('main')
let back = document.getElementById('back')
let galeriaContainer = document.getElementById('galeria_container')
let galeria = document.getElementById('galeria')
let titleCard = document.getElementById('title_card-container')


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
let btnLagoGolL = document.getElementById('btn_lagoGolfL')
let btnCastoresI = document.getElementById('btn_castoresI')
let btnIsalaI = document.getElementById('btn_islaI')
let btnEncuentroI = document.getElementById('btn_encuentroI')
let btnGolfI = document.getElementById('btn_golfI')
let btnPilaraII = document.getElementById('btn_pilaraII')
let btnAlisos = document.getElementById('btn_alisos')
let btnFarmCondos = document.getElementById('btn_farmCondominios')
let btnFarmI = document.getElementById('btn_farmI')
let btnFarmII = document.getElementById('btn_farmII')
let btnMartindaleI = document.getElementById('btn_martindaleI')
let btnFarmIV = document.getElementById('btn_farmIV')
let btnFarmIII = document.getElementById('btn_farmIII')
let btnFarmV = document.getElementById('btn_farmV')
let btnSantaClaraI = document.getElementById('btn_santaClaraI')
let btnCastoresII = document.getElementById('btn_castoresII')
let btnMartindaleII = document.getElementById('btn_martindaleII')
let btnArmeniaI = document.getElementById('btn_armeniaI')
let btnMirafloresI = document.getElementById('btn_mirafloresI')
let btnFarmVII = document.getElementById('btn_farmVII')
let btnFarmVIII = document.getElementById('btn_farmVIII')


// Button back
if(back)
{
  back.addEventListener('click', () => {
    main.style.display = 'block'
    galeriaContainer.style.display = 'none'
})
}

if(btnEncuentroS){
  // Btn Encuentro S
  btnEncuentroS.addEventListener('click', () => {
    
  
      main.style.display = 'none'
      galeriaContainer.style.display = 'block'
      galeria.style.display = 'block'
      titleCard.style.display = 'block'
  
      titleCard.innerHTML = ' <h1 class="title_card_galery">Encuentro S</h1>'
  
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
}

if(btnTortugasR){
  // btn Tortugas R
  btnTortugasR.addEventListener('click', () => {
  
      main.style.display = 'none'
      galeriaContainer.style.display = 'block'
      galeria.style.display = 'block'
  
      titleCard.innerHTML = ' <h1 class="title_card_galery">Tortugas R</h1>'
  
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

}

if(btnTortugasQ){
  
  // btn Tortugas Q
  btnTortugasQ .addEventListener('click', () => {
  
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Tortugas Q</h1>'
  
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
}

if(btnGolfY){
  
  // btn GOLF Y
  btnGolfY.addEventListener('click', () => {
  
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Golf Y</h1>'
  
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
}

if(btnpuertosF){
  
  // btn Muelles Puertos F
  btnpuertosF.addEventListener('click', () => {
  
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Muelles Puertos F</h1>'
  
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
}

if(btnpachecoPS){
  
  // btn Pacheco Golf PS
  btnpachecoPS.addEventListener('click', () => {
  
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Pacheco Golf PS</h1>'
  
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
}

if(btnPilarA){
  
  // btn Pilar A
  btnPilarA.addEventListener('click', () => {
  
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Pilar A</h1>'
  
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
}

if(btnMirafloresM){
  
  // btn miraflores M
  btnMirafloresM.addEventListener('click', () => {
  
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Miraflores M</h1>'
  
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
}

if(btnLagoGolfI){
  
  // btn Lagos del golf I
  btnLagoGolfI.addEventListener('click', () => {
  
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Lagos del Golf I</h1>'
  
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
}

if(btnLagoGolL){
  
  // btn Lagos del golf L
  btnLagoGolL.addEventListener('click', () => {
  
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Lagos del Golf L</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5,6,7,8];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/lagoGolfL/${imagen}.jpg" class="card-img-top img-card" alt="Lagos del golf L">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/lagoGolfL/${imagen}.jpg" class="img-fluid rounded" alt="Lagos del golf L"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnCastoresI){
  
  // btn Castores I
  btnCastoresI.addEventListener('click', () => {
  
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Castores I</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5,6,7,8,9];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/castoresI/${imagen}.jpg" class="card-img-top img-card" alt="Castores I">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/castoresI/${imagen}.jpg" class="img-fluid rounded" alt="Castores I"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnIsalaI){
  
  // btn Isla I
  btnIsalaI.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Isla I</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5,6,7,8,9];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/islaI/${imagen}.jpg" class="card-img-top img-card" alt="isla I">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/islaI/${imagen}.jpg" class="img-fluid rounded" alt="isla I"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnEncuentroI){
  
  // btn Encuentro I
  btnEncuentroI.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Encuentro I</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5,6,7,8,9];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/encuentroI/${imagen}.png" class="card-img-top img-card" alt="encuentroI">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/encuentroI/${imagen}.png" class="img-fluid rounded" alt="encuentroI"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnGolfI){
  
  // btn Golf I
  btnGolfI.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Golf I</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5,6,7,8,9,10,11,12];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/golfI/${imagen}.png" class="card-img-top img-card" alt="Golf I">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/golfI/${imagen}.png" class="img-fluid rounded" alt="Golf I"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnPilaraII){
  
  // btn Pilara II
  btnPilaraII.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Pilar II</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5,6];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/pilaraII/${imagen}.png" class="card-img-top img-card" alt="Pilara II">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/pilaraII/${imagen}.png" class="img-fluid rounded" alt="Pilara II"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnAlisos){
  
  // btn Alisos
  btnAlisos.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Alisos</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/alisos/${imagen}.png" class="card-img-top img-card" alt="Alisos">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/alisos/${imagen}.png" class="img-fluid rounded" alt="Alisos"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnFarmCondos){
  
  // btn Farm Condominios
  btnFarmCondos.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Farm Condominios</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/farmCondominios/${imagen}.png" class="card-img-top img-card" alt="Farm Condominios">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/farmCondominios/${imagen}.png" class="img-fluid rounded" alt="Farm Condominios"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnFarmI){
  
  // btn Farm I
  btnFarmI.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Farm I</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5,6];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/farmI/${imagen}.png" class="card-img-top img-card" alt="Farm I">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/farmI/${imagen}.png" class="img-fluid rounded" alt="Farm I"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnFarmII){
  
  // btn Farm II
  btnFarmII.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Farm II</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5,6];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/farmII/${imagen}.png" class="card-img-top img-card" alt="Farm II">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/farmII/${imagen}.png" class="img-fluid rounded" alt="Farm II"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnMartindaleI){
  
  // btn Martindale I
  btnMartindaleI.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Martindale I</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5,6];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/martindaleI/${imagen}.jpg" class="card-img-top img-card" alt="Martindale I">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/martindaleI/${imagen}.jpg" class="img-fluid rounded" alt="Martindale I"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnFarmIV){
  
  // btn Farm IV
  btnFarmIV.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Farm IV</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5,6,7];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/farmIV/${imagen}.png" class="card-img-top img-card" alt="Farm IV">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/farmIV/${imagen}.png" class="img-fluid rounded" alt="Farm IV"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnFarmIII){
  
  // btn Farm III
  btnFarmIII.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Farm III</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/farmIII/${imagen}.png" class="card-img-top img-card" alt="Farm III">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/farmIII/${imagen}.png" class="img-fluid rounded" alt="Farm III"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnFarmV){
  
  // btn Farm V
  btnFarmV.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Farm V</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/farmV/${imagen}.png" class="card-img-top img-card" alt="Farm V">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/farmV/${imagen}.png" class="img-fluid rounded" alt="Farm V"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnSantaClaraI){
  
  // btn Santa Clara I
  btnSantaClaraI.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Santa Clara I</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5,6,7];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/santaClaraI/${imagen}.png" class="card-img-top img-card" alt="Santa Clara I">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/santaClaraI/${imagen}.png" class="img-fluid rounded" alt="Santa Clara I"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnCastoresII){
  
  // btn Castores II
  btnCastoresII.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Castores II</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5,6];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/castoresII/${imagen}.jpg" class="card-img-top img-card" alt="Castores II">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/castoresII/${imagen}.jpg" class="img-fluid rounded" alt="Castores II"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnMartindaleII){
  
  // btn Martindale II
  btnMartindaleII.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Martindale II</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12 justify-content-center">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/martindaleII/${imagen}.png" class="card-img-top img-card" alt="Martindale II">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/martindaleII/${imagen}.png" class="img-fluid rounded" alt="Martindale II"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnArmeniaI){
  
  // btn Armenia I
  btnArmeniaI.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Armenia I</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5,6,7];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12 justify-content-center">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/armeniaI/${imagen}.png" class="card-img-top img-card" alt="Armenia I">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/armeniaI/${imagen}.png" class="img-fluid rounded" alt="Armenia I"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnMirafloresI){
  
  // btn Miraflores I
  btnMirafloresI.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Miraflores I</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12 justify-content-center">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/mirafloresI/${imagen}.png" class="card-img-top img-card" alt="miraflores I">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/mirafloresI/${imagen}.png" class="img-fluid rounded" alt="miraflores I"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnFarmVII){
  
  // btn Farm VII
  btnFarmVII.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Farm VII</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12 justify-content-center">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/farmVII/${imagen}.png" class="card-img-top img-card" alt="Farm VII">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/farmVII/${imagen}.png" class="img-fluid rounded" alt="Farm VII"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}

if(btnFarmVIII){
  
  // btn Farm VIII
  btnFarmVIII.addEventListener('click', () => {
    main.style.display = 'none'
    galeriaContainer.style.display = 'block'
    galeria.style.display = 'block'
  
    titleCard.innerHTML = ' <h1 class="title_card_galery">Farm VIII</h1>'
  
    galeria.innerHTML = ''
  
    let imagenes = [1,2,3,4,5];
  
    for (imagen of imagenes){
      galeria.innerHTML += `
          <div class="col-12 justify-content-center">
                <div class="card">
                  <a href="#" data-toggle="modal" data-target="#id${imagen}" class="content_img_card">
                    <img src="./img/farmVIII/${imagen}.png" class="card-img-top img-card" alt="Farm VIII">
                  </a>
                </div>
  
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="./img/farmVIII/${imagen}.png" class="img-fluid rounded" alt="Farm VIII"/>
                  </div>
                </div>
          </div>   
        `
    }
  })
}
