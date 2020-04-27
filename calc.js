
// init objects
let rate = [];
var years = [2017, 2015, 2010]; // define the year thresholds

for (var i = 0; i < 6; i++) {
    rate[i] = [];       // build the credit tiers
    for (y in years) {  
        rate[i][years[y]] = []; // build the year objects
    }
}

// define interest rate matrix

rate[0][2010][48] = 3.49;
rate[0][2010][60] = 3.49;

rate[0][2015][60] = 2.49;
rate[0][2015][72] = 2.49;

rate[0][2017][60] = 2.49;
rate[0][2017][72] = 2.49;
rate[0][2017][84] = 3.49;

rate[1][2010][48] = 3.99;
rate[1][2010][60] = 3.99;

rate[1][2015][60] = 2.99;
rate[1][2015][72] = 2.99;

rate[1][2017][60] = 2.99;
rate[1][2017][72] = 2.99;
rate[1][2017][84] = 3.74;

rate[2][2010][48] = 4.49;
rate[2][2010][60] = 4.49;

rate[2][2015][60] = 3.99;
rate[2][2015][72] = 3.99;

rate[2][2017][60] = 3.99;
rate[2][2017][72] = 3.99;
rate[2][2017][84] = 4.74;

rate[3][2010][48] = 6.49;
rate[3][2010][60] = 6.99;

rate[3][2015][60] = 6.24;
rate[3][2015][72] = 6.49;

rate[3][2017][60] = 5.99;
rate[3][2017][72] = 5.99;
rate[3][2017][84] = 6.25;

rate[4][2010][48] = 8.99;
rate[4][2010][60] = 9.24;

rate[4][2015][60] = 6.74;
rate[4][2015][72] = 6.99;

rate[4][2017][60] = 6.49;
rate[4][2017][72] = 6.49;
rate[4][2017][84] = 6.49;

rate[5][2010][48] = 12.99;
rate[5][2010][60] = 11.99;

rate[5][2015][60] = 11.99;
rate[5][2015][72] = 12.49;

rate[5][2017][60] = 10.49;
rate[5][2017][72] = 10.49;
rate[5][2017][84] = 10.49;


function getInterest(credit,yov,months) {

    var c, y, interest;

    switch(true) {
      case (credit >= 740):
        c = 0;
        break;
      case (credit >= 725 && credit <= 739):
        c = 1;
        break;
      case (credit >= 680 && credit <= 724):
        c = 2;
        break;  
      case (credit >= 650 && credit <= 679):
        c = 3;          
        break;  
      case (credit >= 600 && credit <= 649):
        c = 4;
        break;  
      default:
        c = 5;        
        break;
    }

    switch(true) {
        case (yov >= 2017):
            y = 2017;
            break;
        case (yov >= 2015):
            y = 2015;
            break;  
        case (yov >= 2010):
            y = 2010;
            break;  
        default:
            y = 2010;
            break;              
    }

    var ms = 0;
    rate[c][y].forEach(function(index,month) {
        if (months > ms) {
            console.log("months is > "+ms+" ... "+month);
            interest = rate[c][y][month];
        }
        ms = month;
    });

    console.log("The rate is "+interest);
    return interest;
}

function getMontlyPayment(loan,rate,term){
    // using original monthly payment calculation supplied
    var pay = ( ((loan * ((rate / 100) / 12) * ((1 +((rate / 100)/ 12)) ** term)/ (((1 + ((rate / 100)/ 12)) ** term) - 1))) );
    return pay;
}

$(document).ready(function(){
    $('#loan-calc').submit(function(e){
        
        // prevent the default form action
        e.preventDefault();

        // get input values
        var loan = parseInt($('#amount').val());
        var term = parseInt($('#term').val());
        var credit = parseInt($('#credit').val());
        var yov = parseInt($('#yov').val());
        
        // get interest rate
        var interest = parseFloat(getInterest(credit,yov,term));
        
        // calculate monthly payment
        var m_payment = (((loan * ((interest / 100) / 12) * ((1 +((interest / 100)/ 12)) ** term)/ (((1 + ((interest / 100)/ 12)) ** term) - 1))));

        // output values
        $('#output1').text(interest);
        $('#output2').text(m_payment.toFixed(2));
        $('#output').removeClass('hidden');
    });

});