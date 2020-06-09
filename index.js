// Listening the submmit page
function handlerSubmmit(event) {
    event.preventDefault();
    extractValuesInputs();
    let nationalSimpleValue = calculateNationalSimple();
    let presumidProfitValue = calculatePresumedProfit();
    let realProfitValue = calculateRealProfitValue();
    renderTable(nationalSimpleValue, presumidProfitValue, realProfitValue);
}

function renderTable(nSimpleValue, nProfitValue, nRealProfit) {
    tableSection.style.display = "flex";
    form.style.display = "none";
    tableCellNationalSimple.innerHTML = nSimpleValue;
    tableCellPresumeProfit.innerHTML = nProfitValue;
    tableCellRealProfit.innerHTML = nRealProfit;
}

function extractValuesInputs() {
    let labelListOfValues = ['annualReveneus', 'costs', 'expenses', 'payrol']
    
    for ( let i = 0; i <= 3 ; i++ ) {
        inputFieldsValues[labelListOfValues[i]] = inputFields[i].valueAsNumber
    }
}


function calculateNationalSimple() {
    let annualReveneus = parseFloat(inputFieldsValues['annualReveneus']);
    
    let overralTax = annualReveneus * percentageOfTaxNationalSimples();

    overralTax = overralTax.toFixed(2)

    return overralTax;
}


function percentageOfTaxNationalSimples() {
    return 0.06;
}

function calculatePresumedProfit() {
    let annualReveneus = parseFloat(inputFieldsValues['annualReveneus'])
    
    let overralTax = annualReveneus * percentageOfTaxPresumedProfit();
    
    let overralTaxPayrol = calculatePayrollTax()

    overralTax = (overralTax + overralTaxPayrol).toFixed(2)

    return overralTax;
}


function percentageOfTaxPresumedProfit() {
    let taxPercentagePis = 0.0065;
    let taxPercentageCofins = 0.03;
    let taxPercentageIr = 0.0488;
    let taxPercentageCsll = 0.0288;

    return (taxPercentagePis + taxPercentageCofins + taxPercentageIr + taxPercentageCsll)
}

function calculateRealProfitValue() {
    let annualReveneus = parseFloat(inputFieldsValues['annualReveneus'])
    
    console.log(annualReveneus)

    let overralSaleTax = annualReveneus * percentageOfSalesTax();

    console.log(overralSaleTax)

    let netSales = annualReveneus - overralSaleTax

    let overralTaxPayrol = calculatePayrollTax()

    let profit = ((netSales - overralTaxPayrol));

    let profitTax = calculateProfitTax(profit)

    profitTax = profitTax.toFixed(2)

    return profitTax;
}

function percentageOfSalesTax() {
    let taxPercentagePis = 0.0065;
    let taxPercentageCofins = 0.03;

    return (taxPercentagePis + taxPercentageCofins)
}

function calculateRealProfit(netSales) {
    
    let costs = parseFloat(inputFieldsValues['cost']);
    let expenses = parseFloat(inputFieldsValues['expeses']);
    let payrol = parseFloat(inputFieldsValues['payrol']);
    let profit = netSales - costs - expenses - payrol

    return parseFloat(profit)
}

function calculateProfitTax(profit) {
    
    let profitTax;

    if (profit <= 0) {
        profitTax = 0
    } else {
        let incomeTax = profit * 0.15
        let contribuitionTax = profit * 0.09
        let adicionalIncomeTax = profit >= 240000 ? profit * 0.1 : 0
    
        profitTax = (incomeTax + contribuitionTax + adicionalIncomeTax)
    }

    return profitTax
}

function calculatePayrollTax() {
    let payrol = parseFloat(inputFieldsValues['payrol']);

    let overralTaxPayrol = payrol * 0.28;

    overralTaxPayrol = overralTaxPayrol.toFixed(2);

    return parseFloat(overralTaxPayrol);
}

const form = document.getElementById('formId');
const inputFields = document.querySelectorAll('input[type="number"]')
const tableSection = document.getElementById('tableId');
const tableCellNationalSimple = document.getElementById('resultNationSimple');
const tableCellPresumeProfit = document.getElementById('resultPresumeProfit');
const tableCellRealProfit = document.getElementById('resultRealProfit');
const inputFieldsValues = {
    annualReveneus: '',
    costs:         '',
    expenses:      '',
    payrol:        ''
}
form.addEventListener('submit', handlerSubmmit);