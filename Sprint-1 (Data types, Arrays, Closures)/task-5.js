function checkAdult(age) {
    const firstCheck = 'Error Please, enter your age',
        secondCheck = 'Error Please, enter positive number',
        thirdCheck = 'Error Please, enter number',
        fourthCheck = 'Error Please, enter Integer number',
        fifthCheck = 'Error Access denied - you are too young!',
        checkOkay = 'Access allowed',
        completeCheck = 'Age verification complete';
    try {
        if (age == '' || age == null) throw (firstCheck);
        if (age < 0) throw (secondCheck);
        if (typeof age !== 'number') throw (thirdCheck);
        if (Number.isInteger(age) !== true) throw (fourthCheck);
        if (age < 18) throw (fifthCheck);
        else { console.log(checkOkay) }
    } catch (error) {
        console.log(error);
    } finally {
        console.log(completeCheck);
    }
}
checkAdult();
