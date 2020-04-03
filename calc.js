function getInterest (credit, yov, term) {
	var interest = '';

  
	if (credit <= 599 && 2010 <= yov && yov <= 2014 && term < 48) {
        interest = '11.99%';
    } else if (600 <= credit && credit <= 649 && 2010 <= yov && yov <= 2014 && term < 48) {
        interest = '8.99%';
    } else if (650 <= credit && credit <= 679 && 2010 <= yov && yov <= 2014 && term < 48) {
        interest = '6.49%';
    } else if (680 <= credit && credit <= 724 && 2010 <= yov && yov <= 2014 && term < 48) {
        interest = '4.99%';
    } else if (725 <= credit && credit <= 739 && 2010 <= yov && yov <= 2014 && term < 48) {
        interest = '4.49%';
    } else if (740 <= credit && credit && 2010 <= yov && yov <= 2014 && term < 48) {
        interest = '3.99%';
    } else if (credit <= 599 && 2010 <= yov && yov <= 2014 && 49 <= term && term <= 60) {
        interest = '12.99%';
    } else if (
        600 <= credit && credit <= 649 &&
        2010 <= yov && yov <= 2014 &&
        49 <= term && term <= 60
    ) {
        interest = '9.24%';
    } else if (
        650 <= credit && credit <= 679 &&
        2010 <= yov && yov <= 2014 &&
        49 <= term && term <= 60
    ) {
        interest = '6.99%';
    } else if (
        680 <= credit && credit <= 724 &&
        2010 <= yov && yov <= 2014 &&
        49 <= term && term <= 60
    ) {
        interest = '4.99%';
    } else if (
        725 <= credit && credit <= 739 &&
        2010 <= yov && yov <= 2014 &&
        49 <= term && term <= 60
    ) {
        interest = '4.49%';
    } else if (740 <= credit && 2010 <= yov && yov <= 2014 && 49 <= term && term <= 60) {
        interest = '3.99%';
    } else if (credit <= 599 && 2015 <= yov && yov <= 2016 && term <= 60) {
        interest = '11.99%';
    } else if (600 <= credit && credit <= 649 && 2015 <= yov && yov <= 2016 && term <= 60) {
        interest = '6.74%';
    } else if (650 <= credit && credit <= 679 && 2015 <= yov && yov <= 2016 && term <= 60) {
        interest = '6.24%';
    } else if (680 <= credit && credit <= 724 && 2015 <= yov && yov <= 2016 && term <= 60) {
        interest = '4.24%';
    } else if (725 <= credit && credit <= 739 && 2015 <= yov && yov <= 2016 && term <= 60) {
        interest = '3.49%';
    } else if (740 <= credit && 2015 <= yov && yov <= 2016 && term <= 60) {
        interest = '2.99%';
    } else if (credit <= 599 && 2015 <= yov && yov <= 2016 && 61 <= term && term <= 72) {
        interest = '12.49%';
    } else if (
        600 <= credit && credit <= 649 &&
        2015 <= yov && yov <= 2016 &&
        61 <= term && term <= 72
    ) {
        interest = '6.99%';
    } else if (
        650 <= credit && credit <= 679 &&
        2015 <= yov && yov <= 2016 &&
        61 <= term && term <= 72
    ) {
        interest = '6.49%';
    } else if (
        680 <= credit && credit <= 724 &&
        2015 <= yov && yov <= 2016 &&
        61 <= term && term <= 72
    ) {
        interest = '4.24%';
    } else if (
        725 <= credit && credit <= 739 &&
        2015 <= yov && yov <= 2016 &&
        61 <= term && term <= 72
    ) {
        interest = '3.49%';
    } else if (740 <= credit && 2015 <= yov && yov <= 2016 && 61 <= term && term <= 72) {
        interest = '2.99%';
    } else if (credit <= 599 && 2017 <= yov && yov <= 2020 && 0 <= term && term <= 60) {
        interest = '10.49%';
    } else if (600 <= credit && credit <= 649 && 2017 <= yov && yov <= 2020 && 0 <= term && term <= 60) {
        interest = '6.49%';
    } else if (650 <= credit && credit <= 679 && 2017 <= yov && yov <= 2020 && 0 <= term && term <= 60) {
        interest = '5.99%';
    } else if (680 <= credit && credit <= 724 && 2017 <= yov && yov <= 2020 && 0 <= term && term <= 60) {
        interest = '4.24%';
    } else if (725 <= credit && credit <= 739 && 2017 <= yov && yov <= 2020 && 0 <= term && term <= 60) {
        interest = '3.49%';
    } else if (740 <= credit && 2017 <= yov && yov <= 2020 && 0 <= term && term <= 60) {
        interest = '2.99%';
    } else if (credit <= 599 && 2017 <= yov && yov <= 2020 && 61 <= term && term <= 72) {
        interest = '10.49%';
    } else if (
        600 <= credit && credit <= 649 &&
        2017 <= yov && yov <= 2020 &&
        61 <= term && term <= 72
    ) {
        interest = '6.49%';
    } else if (
        650 <= credit && credit <= 679 &&
        2017 <= yov && yov <= 2020 &&
        61 <= term && term <= 72
    ) {
        interest = '5.99%';
    } else if (
        680 <= credit && credit <= 724 &&
        2017 <= yov && yov <= 2020 &&
        61 <= term && term <= 72
    ) {
        interest = '4.24%';
    } else if (
        725 <= credit && credit <= 739 &&
        2017 <= yov && yov <= 2020 &&
        61 <= term && term <= 72
    ) {
        interest = '3.49%';
    } else if (740 <= credit && 2017 <= yov && yov <= 2020 && 61 <= term && term <= 72) {
        interest = '2.99%';
    } else if (
        650 <= credit && credit <= 679 &&
        2017 <= yov && yov <= 2020 &&
        73 <= term && term <= 84
    ) {
        interest = '6.25%';
    } 
  
    else if (
        680 <= credit && credit <= 724 &&
        2017 <= yov && yov <= 2020 &&
        73 <= term && term <= 84
    ) {
        interest = '4.74%';
    } else if (
        725 <= credit && credit <= 739 &&
        2017 <= yov && yov <= 2020 &&
        73 <= term && term <= 84
    ) {
        interest = '3.74%';
    } else if (740 <= credit && 2017 <= yov && yov <= 2020 && 73 <= term && term <= 84) {
        interest = '3.49%';
	}

	return interest;
}

function calculator() {
    var loan = parseFloat($('#amount').val());
    var term = parseFloat($('#term').val());
    var credit = parseFloat($('#credit').val());
    var yov = parseFloat($('#yov').val());
    var minterest = parseFloat(getInterest(credit, yov, term));
    var interest = parseFloat(getInterest(credit, yov, term));

    var m_payment = (((loan * ((minterest / 100) / 12) * ((1 +((minterest / 100)/ 12)) ** term)/ (((1 + ((minterest / 100)/ 12)) ** term) - 1))));


   document.getElementById('output1').innerHTML = interest;
    document.getElementById('output2').innerHTML = m_payment.toFixed(2);
    document.getElementById('output').classList.remove('hidden');
};

