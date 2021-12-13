const anInitialFee = document.getElementById('an-initial-fee'),
      creditTerm = document.getElementById('credit-term');

      /* Значения из range инпутов */
const anInitialFeeRange = document.getElementById('an-initial-fee-range'),
      creditTermRange = document.getElementById('credit-term-range');

      /* Итоговые значения */
const totalAmountOfCredit = document.getElementById('amount-of-credit'),
      totalMonthlyPayment = document.getElementById('monthly-payment'),
      totalRecommendedIncome = document.getElementById('recommended-income');

      /* Все range */
const inputsRange = document.querySelectorAll('.input-range');

const assignValue = () => {
    anInitialFee.value = anInitialFeeRange.value;
    creditTerm.value = creditTermRange.value;
}

assignValue();

for(let input of inputsRange) {
    input .addEventListener('input', () => {
        assignValue();
        calculation(anInitialFee.value, creditTerm.value)
    })
}

const calculation = (anInitialFee = 1000, creditTerm = 1) => {
    /*
        ЕП - Ежемесячный платеж
        РК - Размер кредита
        КМ - Количество месяцев

        ЕП = (РК + (((РК / 100) * 1) / 12) * КМ) / КМ;
    */

    let monthlyPayment; // Ежемесячный платеж
    let lounAmount = 495000 - anInitialFee; // Размер кредита
    let numberOfMonths = creditTerm; // Кол-во месяцев

    monthlyPayment = (lounAmount + (((lounAmount / 100) * 1) / 12) * numberOfMonths) / numberOfMonths;
    const monthlyPaymentArounded = Math.round(monthlyPayment);
    if (monthlyPaymentArounded < 0) {
        return false;
    } else {
        totalAmountOfCredit.innerHTML = `${lounAmount} грн`;
        totalMonthlyPayment.innerHTML = `${monthlyPaymentArounded} грн`;
        totalRecommendedIncome.innerHTML = `${monthlyPaymentArounded + ((monthlyPaymentArounded / 100) * 35)} грн`;
    }
}