# Performance assessment

No production performance benchmark, Windows responsiveness trace, memory soak, database load test or model-cost measurement was completed. The following are source-based concerns, not measured bottlenecks.

| ID | Evidence | Potential effect | Measurement / follow-up |
| --- | --- | --- | --- |
| P-01 | Windows `src/OpenClaw.Shared/Capabilities/BrowserProxyCapability.cs:89-98,170-180,285-296` buffers an entire HTTP response string, parses/clones JSON, reads files and Base64-encodes each | Large screenshots/downloads multiply temporary memory; individual file cap is not a total response budget | Profile synthetic response sizes and repeated downloads; measure peak RSS/GC, cancellation latency, and total payload budget before changing behavior. |
| P-02 | Same capability owns an undisposed client; `NodeService.cs:446-456` recreates it | Repeated reconnects can retain pools until GC | Reconnect soak with socket/handler counts; distinguish GC retention from true leak. See BUG_REPORT B-02. |
| P-03 | Core `src/agents/code-mode-node.ts:82,233-238,269-281` permits up to eight idle pools, bounds JS heap but not ArrayBuffer/native RSS, expires surplus after three minutes while retaining a newest warm worker | Burst workloads can retain memory above V8 heap limits | Measure burst/idle RSS with representative workloads; preserve warm-start tradeoff and per-agent isolation. No leak was demonstrated. |
| P-04 | Large orchestration owners recorded in CODE_QUALITY | Maintenance complexity can hide repeated work, but file size does not establish runtime cost | Use existing Core benchmarks and Windows telemetry/profiling with synthetic data. Do not refactor for performance without a measured hot path. |

Core UI ownership instructions already document failed optimization experiments and a cold-load benchmark (`ui/AGENTS.md`, `scripts/bench-control-ui-cold-load.ts`). Reuse its controlled interleaved runs and separate tracing from timing. Do not claim a faster UI from replacing artwork or labels.

Session switching, streaming latency, memory retrieval cost, compaction behavior, background model workers, database contention, tool-call amplification and voice resource usage remain unmeasured. No optimization recommendations were applied automatically.

One disposable Core startup observation: gateway-smoke.log reported roughly1.3GiB RSS with16workers during startup maintenance, before any model request. This is one instrumented run on this host, not a controlled steady-state benchmark, leak proof, or comparison with baseline. Repeat with representative configuration and idle/burst measurements before making optimization decisions.
