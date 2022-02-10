// Colors
const colors = {
    main: '#568FF0',
    darkMain: '#2F3137',
    blackMain: '#191A1D',
    green: '#27FFA9',
    red: '#FF0077',
    yellow: '#FFCC00',
    white: '#eeeeee',
    black: '#1b1b1b',
    fullWhite: '#fff',
    fullBlack: '#000',
};

class HTMLAlert {
    constructor(text) {
        this.text = text;
        this.canShow = false;
    }

    createAlert() {
        if (!document.querySelector('.alert-container').innerHTML == '') {
            console.error(
                'It is not possible to display multiple HTMLAlerts at the same time.'
            );
        } else {
            const container = document.createElement('div');
            container.classList.add('alert');

            const text = document.createElement('p');
            text.innerText = this.text;

            const closeButton = document.createElement('div');
            closeButton.classList.add('close');

            const lineOne = document.createElement('div');
            lineOne.classList.add('line01');
            const lineTwo = document.createElement('div');
            lineTwo.classList.add('line02');

            closeButton.appendChild(lineOne);
            closeButton.appendChild(lineTwo);

            closeButton.addEventListener('click', () => {
                gsap.to(document.querySelector('.alert-container .alert'), {
                    y: -100,
                    opacity: 0,
                });

                setTimeout(() => {
                    document.querySelector('.alert-container .alert').remove();
                }, 500);

                console.info(
                    '%c Alert was deleted succesfully!',
                    `color: ${colors.red}`
                );
            });

            container.append(text);
            container.append(closeButton);

            document.querySelector('.alert-container').appendChild(container);

            console.info(
                '%c Alert was created succesfully!',
                `color: ${colors.green}`
            );

            this.canShow = true;
        }
    }

    showAlert() {
        if (this.canShow) {
            this.displayAlertTimeline = gsap.timeline();
            this.displayAlertTimeline.from(
                document.querySelector('.alert-container .alert'),
                { y: -100, opacity: 0 }
            );
        }
    }
}

const createTestAlertBTN = document.getElementById('create-test-alert');

createTestAlertBTN.onclick = () => {
    const testAlert = new HTMLAlert(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, consequuntur. Dolorum cumque alias, labore iste sunt quas in quidem! Quis, eaque? Ex dolore molestias exercitationem minima provident recusandae eaque quas laboriosam cum. Illo, repellendus! Tempora blanditiis laborum quidem. Officiis, similique.'
    );
    testAlert.createAlert();
    testAlert.showAlert();
};
