// Clase MudiExperience
if (!window.mudiExperience) {
    class MudiExperience {
        constructor() {
            this.color = "#33a5ff";
            this.dataSever = null;
            this.skuNumber = null;
            this.fatherContainer = null;
        }

        /** Conect mudiServer  ✔️ */
        async conectServer(skuNumber) {
            console.log("este es el", skuNumber);
            const myBody = {
                "skus": [skuNumber] // Usa el SKU dinámico proporcionado al llamar la función
            };

            this.skuNumber = skuNumber;
            console.log("ESTA FUNCIONADO !!!", myBody);
            try {
                const request = await fetch(
                    'https://03c1ca50-4a30-4d4f-b01c-dff83a0c1596-00-28m91vza06npg.riker.replit.dev/api/products/get-urls',
                    {
                        method: 'POST',
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify(myBody),
                    }
                );

                if (!request.ok) {
                    // Manejo de errores HTTP
                    throw new Error(`HTTP Error! Status: ${request.status}`);
                }
                const response = await request.json();
                this.dataServer = response.data[0];
                console.log("Este es el objeto", response.data[0]);
            } catch (error) {
                console.error(`Mudi Error:\n${error}`);
            }
        }

        /** Create Styles ✔️ */
        createStyles() {
            if (document.head.querySelector('#stylesMudiGeneral')) {
                return;
            }

            const link = document.createElement('LINK');
            link.setAttribute('rel', 'stylesheet');
            link.id = "stylesMudiGeneral";
            link.href = `https://cdn.jsdelivr.net/gh/3dymedios/3dymedios3D@latest/index.css`; /* Customiza este path */

            document.head.appendChild(link);
        }

        /** Create button only 3D  ✔️*/
        createBtns() {
            if (document.body.querySelector('.btnsMudiContainer')) {
                document.body.querySelector('.btnsMudiContainer').remove();
            }

            const fragment = document.createDocumentFragment();

            const containerBtns = document.createElement('DIV');
            containerBtns.classList.add('btnsMudiContainer');
            containerBtns.innerHTML = `
                <button class="btnMudi3D" style="background-color: ${this.color}; color: white; border: none; padding: 10px; cursor: pointer;">
                    Ver en 3D
                </button>
            `;

            containerBtns.querySelector('.btnMudi3D').addEventListener('click', () => {
                this.createModal();
                this.sendEventInteraction('3D');
            });

            fragment.appendChild(containerBtns);
            this.fatherContainer.appendChild(fragment);
        }

        /** Create Modal ✔️ */
        createModal() {
            const modalMudi = document.createElement('DIV');
            modalMudi.id = `modalMudi`;
            modalMudi.classList.add(`mudiModal`);
            modalMudi.style.cssText = `
                position: fixed; 
                top: 0; 
                left: 0; 
                width: 100%; 
                height: 100%; 
                background: rgba(0, 0, 0, 0.8); 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                z-index: 1000;
            `;
            modalMudi.innerHTML = `
                <div style="position: relative; width: 80%; height: 80%; background: white; border-radius: 10px; overflow: hidden;">
                    <button style="position: absolute; top: 10px; right: 10px; background: red; color: white; border: none; padding: 5px 10px; cursor: pointer;">X</button>
                    <iframe class="modelMudi" src="${this.dataServer.URL_WEB}" style="width: 100%; height: 100%; border: none;"></iframe>
                </div>
            `;

            modalMudi.querySelector('button').addEventListener('click', () => {
                modalMudi.remove();
            });

            document.body.appendChild(modalMudi);
        }

        /** Send Event Interacción  ✔️ */
        sendEventInteraction(eventName) {
            console.log(`Evento de interacción: ${eventName}`);
        }

        /** Verify Experience  ✔️ */
        async experienceOn(skuNumber, fatherContainer) {
            this.fatherContainer = fatherContainer;
            this.skuNumber = skuNumber;

            await this.conectServer(skuNumber);

            if (!this.dataServer) {
                console.warn(`El SKU: ${skuNumber} no posee experiencias de 3D y AR`);
                return;
            }

            this.createStyles();
            this.createBtns();
        }
    }

    const mudiExperience = new MudiExperience();
    window.mudiExperience = mudiExperience;

    let pathActual = window.location.href;

    setTimeout(() => {
        mudiExperience.experienceOn(
            document.body.querySelector('.skuIDMudi').innerHTML,
            document.body.querySelector('.vtex-store-components-3-x-productImagesContainer')
        );
    }, 2000);
}
