$(document).ready(function() {
    $('#igenyfelmeres').submit(function(e) {
        e.preventDefault();
        var radioValue = $("input[name='eldontendo']:checked").val();
        var attendedEvents = $('#megjelent').val();

        // Calculate the recruitment probability based on radio button value and attended events
        var recruitmentProbability = 0;

        if (radioValue === 'igen') {
            recruitmentProbability += 40; // Set 40% for "igen"
        }

        // Allocate the remaining percentage to attended events
        var remainingPercentage = 100 - recruitmentProbability;
        recruitmentProbability += (attendedEvents / 10) * remainingPercentage;

        // Display the result on the page
        $('#recruitmentResult').text('Felvételi esély: ' + recruitmentProbability.toFixed(2) + '%');
    });
});