autocannon -c 500 -d 20 -p 100 http://localhost:8000/api/trpc/hello
Running 20s test @ http://localhost:8000/api/trpc/hello
500 connections with 100 pipelining factor


┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 242 ms │ 250 ms │ 295 ms │ 338 ms │ 252.65 ms │ 27.43 ms │ 863 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev    │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┤
│ Req/Sec   │ 162,559 │ 162,559 │ 198,783 │ 201,215 │ 196,640 │ 8,231.99 │ 162,544 │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┤
│ Bytes/Sec │ 26.7 MB │ 26.7 MB │ 32.6 MB │ 33 MB   │ 32.2 MB │ 1.35 MB  │ 26.7 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 20

3983k requests in 20.08s, 645 MB read

# benchmark 
general
55m, 0%

low memory and cpu using
150m，100%

# trpc-uWebSockets.js 安装
pnpm add uNetworking/uWebSockets.js
