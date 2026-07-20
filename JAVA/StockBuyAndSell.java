public class StockBuyAndSell {
    public static void main(String[] args) {
        
        int prices[] = {1,4,6,2,3};
        int min = prices[0];
        int profit =0;

        for(int i=0;i<prices.length;i++){
            if(prices[i] <min){
                min = prices[i];
            }
            int maxProfit = prices[i] - min;
            if(maxProfit > profit){
                profit = maxProfit;
            }
        }

        System.out.println(profit);
    }
}
