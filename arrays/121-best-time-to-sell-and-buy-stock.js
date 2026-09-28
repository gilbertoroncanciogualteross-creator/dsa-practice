/**
 * Best Time to Buy and Sell Stock
 * Dado un array de precios, donde prices[i] es el precio de la acción
 * en el día i, encuentra la ganancia máxima que puedes obtener
 * comprando un día y vendiendo otro día posterior. Si no hay ganancia
 * posible, devuelve 0.
 *
 * Complejidad temporal:
 * Complejidad espacial:
 */
function maxProfit(prices) {

        let max = 0;

        for(let i=0; i<prices.length; i++){
            for(let j=i+1; j<prices.length; j++){
                if(prices[j] -prices[i] > max){
                    max = prices[j] - prices[i];
                } 
            }
        }
            return max; 
    // Fase B: un solo recorrido (O(n))
    }

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1]));    // 0
console.log(maxProfit([2, 4, 1]));          // 2