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

    // Phase A (brute force, two nested loops): Time O(2n) | Space O(n2)

    /*
        let max = 0;

        for(let i=0; i<prices.length; i++){
            for(let j=i+1; j<prices.length; j++){
                if(prices[j] -prices[i] > max){
                    max = prices[j] - prices[i];
                } 
            }
        }
            return max; 
    */

    // Phase B (single pass): Time O(n) | Space O(1)

    let nearbyMin =  prices[0];
    let maximumBenefit = 0;

    for(let i=1; i<prices.length; i++){
        if(nearbyMin > prices[i]){
            nearbyMin = prices[i];
        }
        else if(prices[i] - nearbyMin > maximumBenefit){
            maximumBenefit = prices[i] - nearbyMin;
        }
    }
    return maximumBenefit;
}
