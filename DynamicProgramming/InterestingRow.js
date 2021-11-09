function interestingRow(n) {
   let dp = [];
   dp[0] = 0;
   dp[1] = 1;

   for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + 2 * dp[i - 2];
   }

   return dp.slice(1);
}

console.log(interestingRow(5));