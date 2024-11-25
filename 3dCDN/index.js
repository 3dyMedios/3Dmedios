if( !window.mudiExperience ){
    class MudiExperience{

        constructor(){
            this.color              = "#c54b06";
            this.dataSever          = null;
            this.skuNumber          = null;
            this.fatherContainer    = null;
        }
    
        /** Conect mudiServer  ✔️ */
        async conectServer(skuNumber){
            
            const myBody = {"skus":[skuNumber]};
            this.skuNumber = skuNumber;
        
            try {
        
                /** We make the request to the MUDI server */
               const request = await fetch('https://03c1ca50-4a30-4d4f-b01c-dff83a0c1596-00-28m91vza06npg.riker.replit.dev/api/products/get-urls',{
                    method:'POST',
                    headers:{   "Content-type":"application/json",
                                // "tokenapi":"Hr6DpyHXjdvavYjfZ74h"
                    },
                    body: JSON.stringify(myBody)
                })
                const response = await request.json();
                this.dataServer = response.data[0];
                console.log("este es el objeto", response.data[0])
        
            } catch (error) {console.error(`Mudi Error:\n${error}`)}
    
        };
    
        /** Create Styles ✔️ */
        createStyles(){
    
            /** Verify element HTML */
            if(document.head.querySelector('#stylesMudiGeneral')){return}
    
            const 
            link = document.createElement('LINK');
            link.setAttribute('rel','stylesheet');
            link.id="stylesMudiGeneral";
            link.href=`https://cdn.jsdelivr.net/gh/3dymedios/3dymedios3D@latest/index.cs`; /* custom this path */
           
            document.head.appendChild(link)
        };
    
        /** Create button only 3D  ✔️*/
        createBtns(){
    
            /** Verify btns */
            document.body.querySelector('.btnsMudiContainer') && document.body.querySelector('.btnsMudiContainer').remove();
    
            /** Create Fragment */
            const fragment = document.createDocumentFragment();
    
            /** Create containers */
            const 
            containerBtns = document.createElement('DIV');
            containerBtns.classList.add('btnsMudiContainer');
            containerBtns.appendChild(this.createTooltip());
            containerBtns.innerHTML +=`
            <?xml version="1.0" encoding="UTF-8"?>
                <svg id="img3DBtn" class="btnMudi3D" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360">
                    <defs>
                        <style>
                            .cls-1{
                                fill:#fdae2a;
                                opacity:.6;
                            }
                            
                            .cls-1,.cls-2,.cls-3{
                                stroke-width:0px;
                            }
                            .cls-2{
                                fill:#f4f4f4;
                            }
                            .cls-3{
                                fill:#eb5a29;
                            }
                        </style>
                    </defs>
                    <circle class="cls-2" cx="170" cy="178.45" r="150.5"/>
                    <g id="vert3b-thumb">
                        <path id="Shape" class="cls-1" d="m270.61,176.12c0-20.59-22.41-38-55.68-46.34-8.14-34.05-25.18-56.97-45.29-56.97s-37.14,22.96-45.3,57.04c-4.71,1.2-9.26,2.58-13.59,4.16-1.88.69-2.86,2.8-2.18,4.72.67,1.92,2.74,2.92,4.62,2.24,3.04-1.11,6.21-2.08,9.45-2.98-.41,2.27-.77,4.53-1.11,6.84h.19c-3.33,22.19-3.12,44.79.61,66.91h-.09c.15.81.28,1.65.43,2.49v.04c-27.7-7.79-46.71-22.1-46.72-38.07,0-8.41,5.43-16.79,15.41-24.01l-1.15,6.06h0c-.19.97,0,1.97.54,2.79.54.82,1.37,1.38,2.32,1.57h0c.23.05.46.07.69.07,1.72-.02,3.2-1.26,3.54-2.99l2.9-15.36h0c.18-.96-.01-1.95-.55-2.76-.53-.81-1.36-1.37-2.3-1.55h0l-15.07-3.11c-1.94-.41-3.85.84-4.3,2.82-.1.48-.1.98,0,1.46.26,1.46,1.35,2.63,2.77,2.95h.17l7.05,1.4c-12.44,8.79-19.31,19.49-19.31,30.6h0c0,20.59,22.41,38,55.68,46.35,8.16,34.04,25.18,56.96,45.29,56.96,11.18,0,21.93-7.46,30.61-20.88l.9,7.36c.24,2.02,2.04,3.46,4.01,3.22,1.98-.25,3.38-2.08,3.14-4.11h0l-1.82-15.54c-.11-.97-.6-1.86-1.35-2.46-.75-.61-1.71-.88-2.66-.76h0l-15.19,1.87c-1.97.25-3.38,2.09-3.14,4.1h0c.24,2.02,2.03,3.46,4.01,3.22l5.99-.74c-7.26,11.15-15.84,17.31-24.45,17.31-15.61,0-29.58-19.46-37.21-47.77,12.27,2.37,24.73,3.55,37.21,3.51,12.51.04,24.99-1.15,37.28-3.53-.89,3.31-1.82,6.56-2.91,9.66-.16.47-.23.96-.19,1.45.09,1.76,1.38,3.2,3.08,3.45s3.34-.77,3.91-2.43h0c1.54-4.43,2.89-9.09,4.07-13.91,33.31-8.35,55.75-25.76,55.75-46.35h0l-.03.03Zm-53.98,38.09c2.35-12.55,3.52-25.3,3.49-38.08h0c.04-12.77-1.11-25.51-3.43-38.06,27.69,7.8,46.7,22.1,46.71,38.07,0,15.97-19.05,30.27-46.76,38.07h0Zm-84.21-86.17c7.61-28.35,21.6-47.83,37.22-47.83s29.58,19.45,37.21,47.78c-1.12-.22-2.22-.41-3.34-.62v.14c-11.19-2.01-22.53-3.03-33.89-3.03-10.91.03-21.79,1-32.54,2.89l.07-.2c-1.57.28-3.15.57-4.73.88Zm76.36,8.03c2.77,13.16,4.15,26.6,4.12,40.06.04,13.45-1.31,26.88-4.05,40.04-12.89,2.84-26.04,4.26-39.22,4.22-13.16.04-26.29-1.38-39.15-4.21v-.15c-5.48-26.38-5.48-53.65,0-80.04,25.82-5.54,52.49-5.52,78.3.07h0Z"/>
                        <path id="Path" class="cls-3" d="m122.61,187.91c4.2,4.12,9.83,6.44,15.7,6.49,6.91,0,10.75-2.98,10.75-7.34,0-4.61-3.51-6.75-11.43-6.75-2.39,0-6.24,0-7.09.09v-10.59c1.02.08,4.86.08,7.09.08,6.31,0,10.5-2.05,10.5-6.31,0-4.52-4.61-6.83-10.58-6.83-5.43,0-10.65,2.14-14.51,5.97l-5.98-7.51c5.57-6.07,13.53-9.38,21.76-9.06,13.31,0,21.51,5.97,21.51,15.44-.45,6.78-5.7,12.26-12.46,12.98,7.27.48,13.01,6.37,13.31,13.65,0,9.81-8.79,16.73-22.44,16.73-8.47.46-16.7-2.88-22.45-9.12l6.32-7.94Z"/>
                        <path id="Shape-2" class="cls-3" d="m170.32,147.04h22.45c17.83,0,30.21,11.35,30.21,28.51s-12.38,28.42-30.21,28.42h-22.45v-56.93Zm22.45,46.26c4.78.23,9.44-1.56,12.84-4.94,3.39-3.38,5.21-8.03,4.99-12.81.36-4.83-1.41-9.58-4.83-13-3.42-3.43-8.17-5.19-13-4.84h-10.33v35.59h10.33Z"/>
                    </g>
                </svg>
            `;
    
            containerBtns.querySelector('#img3DBtn').addEventListener('click',()=>{
                this.createModal();
                this.sendEventInteraction('3D');
            })
    
            fragment.appendChild(containerBtns)
    
            /** Add DOM */
            this.fatherContainer.appendChild(fragment)
        };
    
        /** Create Modal ✔️ */
        createModal(){
    
            /** create variables */
            let flagAR = false;
    
            /** We create a shell for the MUDI modal */
            const 
            modalMudi = document.createElement('DIV');
            modalMudi.id=`modalMudi`;
            modalMudi.classList.add(`mudiModal`);
            modalMudi.innerHTML=`
                <div class="iframeMudi3D">
                    <button class="closeModalMudi" style="color:${this.color}">X</button>
                    <iframe class="modelMudi" src="${this.dataServer.URL_WEB}"></iframe>
                    <div class="containerBtnsActions">
                        <svg xmlns="http://www.w3.org/2000/svg"  id="imgARBtn" class="imgBtnAR" data-name="Capa 2" viewBox="0 0 256.51 56.04">
                              <defs>
                                <style>
                                  .cls-1 {
                                    fill: #f29100;
                                    opacity:1 !important;
                                  }
                            
                                  .cls-1, .cls-2, .cls-3 {
                                    stroke-width: 0px;
                                  }
                            
                                  .cls-4 {
                                    font-family: Poppins-SemiBold, Poppins;
                                    font-size: 15.2px;
                                    font-weight: 600;
                                  }
                            
                                  .cls-4, .cls-2, .cls-3 {
                                    fill: #fff;
                                  }
                            
                                  .cls-3 {
                                    opacity: 1;
                                  }
                                </style>
                              </defs>
                              <g id="Capa_1-2" data-name="Capa 1">
                                <g>
                                  <g>
                                    <rect class="cls-1" x="0" y="0" width="256.51" height="56.04"/>
                                    <text class="cls-4" transform="translate(70.73 34.53)"><tspan x="0" y="0">VER EN TU ESPACIO </tspan></text>
                                  </g>
                                  <g>
                                    <path id="Shape" class="cls-3" d="M56.36,28.44c0-1.02-.31-1.89-.87-2.55.1.98.15,1.97.15,2.95,0,.68-.02,1.37-.07,2.05.51-.65.79-1.48.79-2.45ZM56.36,28.44c0-1.02-.31-1.89-.87-2.55.1.98.15,1.97.15,2.95,0,.68-.02,1.37-.07,2.05.51-.65.79-1.48.79-2.45ZM64.42,28.84c0-3.13-3.41-5.78-8.48-7.05-1.24-5.19-3.83-8.68-6.89-8.68s-5.66,3.5-6.9,8.69c-.72.18-1.41.39-2.07.63-.29.11-.43.43-.33.72.1.29.42.44.7.34.47-.17.95-.32,1.44-.45-.06.34-.12.69-.17,1.04h.03v.03c.36-.21.75-.36,1.17-.47.05-.3.11-.61.17-.91,3.93-.84,7.99-.84,11.92.01h0c.08.38.15.75.21,1.12.45.19.87.43,1.24.73-.07-.52-.15-1.03-.25-1.54,4.22,1.19,7.11,3.36,7.11,5.8s-2.9,4.61-7.12,5.79c.13-.67.23-1.34.3-2.01-.36.3-.76.55-1.2.73-.08.53-.17,1.06-.28,1.58-1.96.43-3.97.65-5.97.64-2.01.01-4.01-.21-5.96-.64v-.02c-.09-.44-.17-.88-.24-1.32-.42-.11-.82-.28-1.18-.49.05.38.11.77.17,1.16h0c.02.12.04.25.07.38-2.11-.59-3.89-1.43-5.14-2.43-1.25-.99-1.98-2.15-1.98-3.36,0-1.28.83-2.56,2.35-3.66l-.18.92s-.01.07-.01.11c0,.11.03.22.1.32.08.12.2.21.35.24.03,0,.07.01.1.01.27-.01.49-.19.54-.46l.44-2.34s0-.07,0-.11c0-.11-.03-.21-.09-.31-.08-.12-.21-.21-.35-.23l-2.29-.48c-.3-.06-.59.13-.66.43,0,.08,0,.15,0,.22.04.23.21.41.42.45h.03l1.07.22c-1.89,1.34-2.94,2.96-2.94,4.66,0,1.56.85,3.01,2.34,4.22,1.48,1.22,3.6,2.2,6.14,2.83,1.24,5.19,3.83,8.68,6.9,8.68,1.7,0,3.34-1.14,4.66-3.18l.13,1.12c.04.31.32.53.62.49.3-.04.51-.32.47-.63l-.27-2.36c-.02-.15-.1-.29-.21-.38-.11-.09-.26-.13-.4-.11l-2.32.28c-.3.04-.51.32-.48.63.04.28.28.49.56.49h.06l.91-.12c-1.11,1.7-2.41,2.64-3.73,2.64-2.37,0-4.5-2.96-5.66-7.27,1.87.36,3.76.54,5.66.53,1.91.01,3.81-.18,5.68-.54-.13.51-.28,1-.44,1.47-.03.07-.04.15-.03.22,0,.27.21.49.47.53.26.04.51-.12.59-.37.24-.68.44-1.39.62-2.12,5.06-1.27,8.48-3.91,8.49-7.05h-.01ZM54.21,21.42v.02c-1.71-.3-3.44-.46-5.16-.46s-3.32.15-4.96.44v-.03c-.23.04-.47.09-.71.13,1.16-4.31,3.29-7.28,5.67-7.28s4.5,2.96,5.66,7.27c-.17-.03-.33-.06-.5-.09ZM56.36,28.44c0-1.02-.31-1.89-.87-2.55.1.98.15,1.97.15,2.95,0,.68-.02,1.37-.07,2.05.51-.65.79-1.48.79-2.45ZM41.66,25.62l.83,1.04s.04-.04.06-.06c.04-.6.1-1.2.19-1.79-.4.19-.77.47-1.08.81ZM42.5,30.22s-.05-.04-.07-.06l-.88,1.1c.32.34.69.62,1.09.82-.07-.62-.12-1.24-.14-1.86Z"/>
                                    <path class="cls-1" d="M47.78,30.2c0,1.36-1.22,2.32-3.11,2.32-.71.04-1.41-.11-2.03-.44-.4-.2-.77-.48-1.09-.82l.88-1.1s.04.04.07.06c.57.53,1.32.83,2.11.84.96,0,1.49-.41,1.49-1.02,0-.64-.49-.94-1.59-.94-.33,0-.86,0-.98.02v-1.47c.14.01.67.01.98.01.88,0,1.46-.29,1.46-.88,0-.63-.64-.95-1.47-.95-.72,0-1.43.28-1.95.77-.02.02-.04.04-.06.06l-.83-1.04c.31-.34.68-.62,1.08-.81.59-.32,1.26-.47,1.94-.45,1.85,0,2.98.83,2.98,2.14-.06.95-.79,1.71-1.72,1.81,1,.06,1.8.88,1.84,1.89Z"/>
                                    <path class="cls-1" d="M55.49,25.89c-.74-.89-1.9-1.41-3.32-1.41h-3.12v7.91h3.12c1.47,0,2.67-.55,3.4-1.5.51-.65.79-1.48.79-2.45,0-1.02-.31-1.89-.87-2.55ZM53.95,30.22c-.47.47-1.12.72-1.78.69h-1.44v-4.94h1.44c.67-.05,1.33.19,1.8.67.48.47.72,1.13.67,1.8.03.67-.22,1.31-.69,1.78Z"/>
                                    <path class="cls-2" d="M47.78,30.2c0,1.36-1.22,2.32-3.11,2.32-.71.04-1.41-.11-2.03-.44-.4-.2-.77-.48-1.09-.82l.88-1.1s.04.04.07.06c.57.53,1.32.83,2.11.84.96,0,1.49-.41,1.49-1.02,0-.64-.49-.94-1.59-.94-.33,0-.86,0-.98.02v-1.47c.14.01.67.01.98.01.88,0,1.46-.29,1.46-.88,0-.63-.64-.95-1.47-.95-.72,0-1.43.28-1.95.77-.02.02-.04.04-.06.06l-.83-1.04c.31-.34.68-.62,1.08-.81.59-.32,1.26-.47,1.94-.45,1.85,0,2.98.83,2.98,2.14-.06.95-.79,1.71-1.72,1.81,1,.06,1.8.88,1.84,1.89Z"/>
                                    <g id="Shape-2">
                                      <path class="cls-2" d="M55.49,25.89c-.74-.89-1.9-1.41-3.32-1.41h-3.12v7.91h3.12c1.47,0,2.67-.55,3.4-1.5.51-.65.79-1.48.79-2.45,0-1.02-.31-1.89-.87-2.55ZM53.95,30.22c-.47.47-1.12.72-1.78.69h-1.44v-4.94h1.44c.67-.05,1.33.19,1.8.67.48.47.72,1.13.67,1.8.03.67-.22,1.31-.69,1.78Z"/>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
    
                        <div id="containerQR" class="containerQRMudi" style="background-color:${this.color}">
                            <img class="mudiQR" src="${this.dataServer.URL_QR}" >
    
                            <div class="containerText">
                                <div class="titleContainer">
                                    <h4>ESCANÉAME PARA <br><b>VER EN TU ESPACIO</b></h4>
                                    <hr class="hrTitle">
                                </div>
    
                                <div class="titleContainer">
                                    <div class="iconTitle">
                                        <img class="stepMudi step1" src="https://cdn.jsdelivr.net/gh/3dyMedios/3dymedios3D@main/assets/step3colchonesFantasia.webp">
                                    </div>
                                    <p class="textInfoMudi">Apunta el teléfono al piso.</p>
                                </div>
    
                                <div class="titleContainer">
                                    <div class="iconTitle">
                                        <img class="stepMudi step2" src="https://cdn.jsdelivr.net/gh/3dyMedios/3dymedios3D@main/assets/step4colchonesFantasia.webp">
                                    </div>
                                    <p class="textInfoMudi">Desplaza para visualizar.</p>
                                </div>
    
                                <div class="titleContainer">
                                    <div class="iconTitle">
                                        <img class="stepMudi step3" src="https://cdn.jsdelivr.net/gh/3dyMedios/3dymedios3D@main/assets/step2colchonesFantasia.webp">
                                    </div>
                                    <p class="textInfoMudi">Amplia y detalla el producto.</p>
                                </div>
    
                                <div class="titleContainer">
                                    <div class="iconTitle">
                                        <img class="stepMudi step4" src="https://cdn.jsdelivr.net/gh/3dyMedios/3dymedios3D@main/assets/step1colchonesFantasia.webp">
                                    </div>
                                    <p class="textInfoMudi">Toca dos veces para restablecer.</p>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            `;
    
            /** We close the MUDI modal*/
            modalMudi.querySelector(`.closeModalMudi`).addEventListener('click',()=>{
                document.body.querySelector('#modalMudi').remove();
            });
    
            /** Init ARExperience */
            modalMudi.querySelector(`#imgARBtn`).addEventListener('click',()=>{
    
                if(window.innerWidth>1000){
                    !flagAR 
                    ? (
                        document.body.querySelector('.containerQRMudi').style.right="0%",
                        changeStyleBtnAR(flagAR,this.color),
                        flagAR = !flagAR
                    )
                    : (
                        document.body.querySelector('.containerQRMudi').style.right="-300%",
                        changeStyleBtnAR(flagAR,this.color),
                        flagAR = !flagAR
                    )
                }
                else window.open(`${this.dataServer.URL_AR}`,"_BLANK");
                flagAR && this.sendEventInteraction('AR')
            });
    
            /** Verify Style Bttn AR  */
            function changeStyleBtnAR(flagAR,color){
    
                let icon = document.body.querySelectorAll('.cls-3_modal')
    
                flagAR
                ? (
                    document.body.querySelector('.cls-1_modal').style.fill=color,
                    icon.forEach((icon)=>icon.style.fill="white"),
                    document.body.querySelector('.cls-2_modal').style.fill="white"
                ) 
                : (
                    document.body.querySelector('.cls-1_modal').style.fill="white",
                    icon.forEach((icon)=>icon.style.fill=color),
                    document.body.querySelector('.cls-2_modal').style.fill=color
                )
            };
    
            document.body.appendChild(modalMudi)
        };
    
        /** create tooltip ✔️ */
        createTooltip(){
            const 
            tooltip = document.createElement('P');
            tooltip.classList.add('tooltipMudiCDN');
            tooltip.innerHTML=`<b>¡Nuevo!</b> Descubre como se ve este producto en tu espacio`;
    
            setTimeout(()=>{
                document.body.querySelector('.tooltipMudiCDN').remove();
            },9000)
    
            return tooltip;
        };
    
        /** Send Evnt Interacción  ✔️ */
        sendEventInteraction(eventName){
    
            let OSdevice;
    
            if (navigator.userAgent.includes('Android')) OSdevice = 'Android';
            else if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) OSdevice = "IOS";
            else OSdevice = 'DESK';
    
            window.dataLayer && dataLayer.push({
                event: `Evento de interaccion ${eventName}`,
                valorMudi: 1,
                sku: this.skuNumber,
                category: document.body.querySelector('[data-testid="breadcrumb"]').children[1].outerText ,
                subCategory: document.body.querySelector('[data-testid="breadcrumb"]').children[1].outerText,
                sistemaOperativo: OSdevice
            })
        };
    
        /** verifyExperience  ✔️ */
        async experienceOn(skuNumber, fatherContainer){
        
            document.body.querySelector('.flex.flex-column.undefined').style.display="none";
            
            fatherContainer && (this.fatherContainer = fatherContainer);
            this.skuNumber = skuNumber;
    
            /** Response Mudi server */
            await this.conectServer(skuNumber);
    
            /** verify process */
            if (!this.dataServer){
                document.body.querySelector('.btnsMudiContainer') && document.body.querySelector('.btnsMudiContainer').remove();
                console.warn(`El sku: ${skuNumber} no posee experiencias de 3D  y AR`)
                return;
            }
    
            /** Create Styles */
            this.createStyles();
    
            /** Create Buttons */
            this.createBtns();
    
            /** Create Flag Event Btns Mudi*/
            let flag = null;
    
            for(let i = 0 ; i < window.dataLayer.length ; i++ ){window.dataLayer[i].event == 'visualizacion_botones' && ( flag = true ) };
    
            flag 
            ? false 
            : dataLayer.push({
                event: "visualizacion_botones",
                valorMudi: "1",
                sku: this.skuNumber,
                category: document.body.querySelector('[data-testid="breadcrumb"]').children[1].outerText,
                subCategory: document.body.querySelector('[data-testid="breadcrumb"]').children[1].outerText
            });  
    
            flag ? false : (
                setTimeout(()=>{
                    document.body.querySelector('.vtex-add-to-cart-button-0-x-buttonText').parentNode.parentNode.parentNode.addEventListener('click',()=>{
                        this.sendEventInteraction('ADD TO CAR');
                    })
                },2000)
            )
    
        };
    
    };
    
    const mudiExperience = new MudiExperience();
    window.mudiExperience = mudiExperience;
    
    let pathActual = window.location.href;
    
    setTimeout(()=>{
        mudiExperience.experienceOn( document.body.querySelector('.skuIDMudi').innerHTML , document.body.querySelector('.vtex-store-components-3-x-productImagesContainer') );
        verifySKU()
    },2000)
    
    function verifySKU(){
        
        if( pathActual == window.location.href ){
            requestAnimationFrame(verifySKU);
            return;
        }
    
        pathActual = window.location.href;
        if(pathActual.includes('?skuId')){
            setTimeout  (()=>{
                let skuNumber = document.body.querySelector('.skuIDMudi').innerHTML
                window.mudiExperience.experienceOn( skuNumber , document.body.querySelector('.vtex-store-components-3-x-productImagesContainer') );
                console.log('cambio el sku')
                requestAnimationFrame(verifySKU);
                return;
            },2000)
        }
    
        else requestAnimationFrame(verifySKU)
    }
}   



