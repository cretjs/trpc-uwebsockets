# trpc-uwebSockets
1. high performance with uWebSockets
2. trpc bindings

# run
```
pnpm install
pnpm run dev
```

# benchmark 
autocannon -c 400 -d 20 -p 100 http://localhost:8000/api/trpc/hello
Running 20s test @ http://localhost:8000/api/trpc/hello
400 connections with 100 pipelining factor


┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 209 ms │ 215 ms │ 223 ms │ 227 ms │ 215.87 ms │ 16.41 ms │ 447 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬───────────┬──────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg       │ Stdev    │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼───────────┼──────────┼─────────┤
│ Req/Sec   │ 169,087 │ 169,087 │ 185,343 │ 187,135 │ 184,179.2 │ 3,830.69 │ 169,010 │
├───────────┼─────────┼─────────┼─────────┼─────────┼───────────┼──────────┼─────────┤
│ Bytes/Sec │ 27.7 MB │ 27.7 MB │ 30.4 MB │ 30.7 MB │ 30.2 MB   │ 628 kB   │ 27.7 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴───────────┴──────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 20

3723k requests in 20.07s, 604 MB read

# trpc-uWebSockets.js 安装
pnpm add uNetworking/uWebSockets.js
