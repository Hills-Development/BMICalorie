document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateBMIButton').addEventListener('click', function() {
        const weight = document.getElementById('weight').value;
        const height = document.getElementById('height').value;
        const gender = document.getElementById('gender').value;

        console.log('Weight: ', weight);
        console.log('Height: ', height);
        console.log('Gender: ', gender);

        let bmi;
        if (gender == 'male') {
            console.log('ismale')
            bmi = weight / (height/100 * height/100);
            console.log(weight / (height/100 * height/100))
        } else {
            console.log('isfemale')
            bmi = weight / (height/100 * height/100) *1.05;
            console.log(weight / (height * height)*1.05)
        }

        let category;
    
        const result = bmi.toFixed(2);

        if (result <= 18.5) {
            category = 'Underweight';
        } else if (result <= 25) {
            category = 'Healthy Weight';
        } else if (result <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }
        

        console.log(category);

        document.getElementById('result').innerText = result;
        document.getElementById('topText').style += 'display:block';
        document.getElementById('bottomText').innerText = 'You are: ' + category;
        document.getElementById('bottomText').style += 'display:block';
    }) 
})