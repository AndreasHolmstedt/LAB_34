/*toFahrenheit(degrees) är en funktion som ska ta ett tal som motsvarar en temperatur i grader Celsius och returnera motsvarande temperatur i grader Fahrenheit.
Om parametern är ett tal som motsvarar en giltig temperatur så ska funktionen returnera motsvarande värde i Fahrenheit. Samma sak om parametern är en sträng som går att omvandla till ett tal som motsvarar en giltig temperatur.
Om parametern är ett tal som motsvarar en ogiltig temperatur ska funktionen returnera NaN. Om parametern är något annat än ett tal ska funktionen också returnera NaN.

Exempel på giltiga temperaturer:   25, 0, '32', -273.15, 123456789.
Exempel på ogiltiga temperaturer: -273.16, 'kalle', Infinity, null, undefined.
Använd följande formel för att räkna ut temperaturen:  F = C * 9/5 + 32.
Den minsta möjliga temperaturen är -273.15 grader Celsius.*/

function toFahrenheit (celsius) {
  return celsius === Infinity ||
         celsius === null ||
         celsius === true ||
         celsius === false ||
        celsius < -273.15 ? NaN : Number(celsius) * 9/5 + 32
}

export { toFahrenheit };
