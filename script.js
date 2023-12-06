$(document).ready(function() {
    $('#igenyfelmeres').submit(function(e) {
        e.preventDefault();
        var radioValue = $("input[name='eldontendo']:checked").val();
        var attendedEvents = $('#megjelent').val();
        var recruitmentProbability = 0;

        if (radioValue === 'igen') {
            recruitmentProbability += 40;
        }

        var remainingPercentage = 100 - recruitmentProbability;
        recruitmentProbability += (attendedEvents / 10) * remainingPercentage;

        $('#recruitmentResult').text('Felvételi esély: ' + recruitmentProbability.toFixed(2) + '%');
    });
});
