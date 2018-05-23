/*canGetLicense(license, age) är en funktion som svarar på frågan: är jag tillräckligt gammal för att ta ett körkort av en viss typ?
Om båda parametrarna har tillåtna värden så ska funktionen returnera antingen true eller false. Annars ska funktionen kasta ett Error med throw.
Tillåtna värden på license är alla strängar som matchar en licenstyp i tabellen nedan.
Tillåtna värden på age är alla åldrar som är ett Number i intervallet 0 <= x <= 120.

A == 24
B, BE == 18
C == 21
D == 24
*/

function canGetLicense (license, age) {
  license = license.toUpperCase()
  if(license !== "A" &&
     license !== "B" &&
     license !== "BE" &&
     license !== "C" &&
     license !== "D"){
       throw new Error("Wrong license format.")
     }
  if(age < 0 || age > 120 || isNaN(Number(age))){
    throw new Error("Age must be a number between 0 and 120.")
  }
  return age < 18 ? false :
         license == "B" || license === "BE" ? true :
         age < 21 ? false :
         license === "C" ? true :
         age < 24 ? false : true
}

export {canGetLicense};
