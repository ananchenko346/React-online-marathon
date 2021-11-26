const accountPatients = (counter) => {
    let beds = counter;
    let patients = 0;

    function admit() {
        beds = counter - 1;
        patients += 1;
        counter -= 1;
        if (beds >= 0) {
            console.log(`A patient was admitted, ${beds} beds are available`);
        } else if (beds < 0) {
            console.log('Can not admit a patient, no beds available')
            counter = 0;
        }
    }

    function discharge() {
        beds = counter + 1;
        patients -= 1;
        counter += 1;
        if (patients > 0) {
            console.log(`A patient was discharged, ${beds} beds are available`);
        } else if (patients <= 0) {
            console.log('There are no patients to discharge')
        }
    }
    return [admit, discharge];
}

const [admit, discharge] = accountPatients(3);
admit();
admit();
admit();
admit();
discharge();
discharge();
discharge();
discharge();