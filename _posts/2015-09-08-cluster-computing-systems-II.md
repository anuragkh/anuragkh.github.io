---
layout: post
title: Cluster Computing Systems (II)
---

## Spark: Cluster Computing with Working Sets

_Is the Problem Real?_

The MapReduce paper introduced the model for computing on large volumes of data using the map and reduce primitives. 
It also presented a system that could automatically cater to failures, stragglers, etc, for jobs expressed in the MapReduce model.
More complex operations on MR are expressed as cascaded jobs -- these can often be _inefficient_ since the MapReduce model
doesn't capture semantics _across_ multiple MR jobs (e.g., MapReduce would typically read and write to disk repeatedly 
for iterative applications that compute over the same data.). Spark caters to this particular issue.

The problem is shown to be common in machine learning applications, where jobs are typically iterative, and interactive analytics, 
where a user may issue multiple queries (which translate to jobs) on the same data.

_What is the solution's main idea?_

Spark enables the reuse of working set _efficiently_ across multiple MapReduce-like jobs. Spark uses the concept of Resilient Distributed Datasets, 
which are a restricted form of distributed shared memory, in that they are immutable partitioned collection of records. RDDs can only be created 
through deterministic transformations, and these transformations are tracked and logged to maintain the lineage or history of the RDD. 
This permits both efficient implementations by allowing reuse of the working set by keeping it in memory (and avoiding disk I/Os when 
unnecessary), and fault tolerance, since the data can be reconstructed using the lineage information. RDDs permit actions like count, reduce, collect, etc. 

_Why is the solution different from previous work?_

As discussed above, MapReduce lacked support for supporting iterative jobs _efficiently_. Spark caters to the issue by persisting data in memory
across iterations. Moreover, Spark's RDD abstraction is quite novel and powerful; for instance, it encapsulates lineage information, enabling 
efficient fault tolerance across jobs. Another key difference from existing solutions was the adoption of a functional programming language to 
express Spark computations: MapReduce computations are inherently easier to express in a functional programming language.

_Does the paper identify any fundamental/hard trade-offs?_

The paper identifies a tradeoff between the storage cost of data in memory and the speed of accessing it. While significantly speeding up queries,
RDDs can be expensive to store in memory; if persisted on disk, their performance characteristics would be similar to that of MapReduce. By supporting
partial caching of an RDD in memory, Spark can attain several points on the trade-off curve. 

_Will the paper be influential in 10 years?_

Given the popularity and adoption of the system, it seems very likely that the paper will be influential for the next 10 years. The key concepts in the paper,
namely the RDD abstraction, reuse of data across operations, etc., are general and practical approaches to handling large volumes of data, and should
remain relevant for time to come.

## Naiad: A Timely Dataflow System

_Is the Problem Real?_

Distributed dataflow systems typically provide one of three desired aspects: (1) low-latency stream processing, (2) high-throughput batch processing, (3) iterative computation. 
A large number of applications require all three, and while it is possible to compose several systems to obtain these goals, it would incur significant development
and maintenance cost, and would be less efficient than a unified platform. Naiad adresses this particular issue. In my opinion, applications requiring all three
goals from a unified platform in a real problem, and concerns of efficiency, development and maintenance costs for multiple platforms to acheive the same are legitimate.
The paper cites batch iterative graph computation and machine learning, together with streaming acyclic computations and iterative graph analytics as real-world application 
scenarios.  

_What is the solution's main idea?_

Naiad achieves its goals of low-latency stream processing, high throughput batch processing and iterative, incremental computations through a new computational model called 
_timely dataflow_. This model enriches dataflow computation with timestamps that represent logical points in the computation and provide the basis for an efficient, 
lightweight coordination mechanism. Timely dataflow supports the following three features:

* structured loops allowing feedback in the dataflow.
* stateful dataflow vertices capable of consuming and producing records without global coordination.
* notifications for vertices once they have received all records for a given round of input or loop iteration.

_Why is the solution different from previous work?_

As stated before, existing systems provide on of the three desired aspects (stated above), but not all three; Naiad strives to be the first system that acheives all three in 
a single framework. (Although this is unclear --- arguably, Discretized Streams on Spark provide the same guarantees in the same framework.) 

_Does the paper identify any fundamental/hard trade-offs?_

As with Dryad, in order to acheive efficiency for its system goals (stream processing, batch processing, iterative processing), Naiad gives up on simplicity of system design, and
simplicity of programming abstraction. In particular, fault tolerance is much more complex due to stateful computations, complicating handling of certain common caveats in big 
data processing (e.g., stragglers). Moreover, the developers need to deal with more complicated programming constructs such as graph operators and timestamps in order to enable more
efficient processing for their applications.

_Will the paper be influential in 10 years?_

Naiad suffers from problems similar to Dryad; Naiad enables low latency stream processing, high throughput batch processing as well as iterative computation on the same framework, 
but at the cost of increased system complexity, and inherent complexity in the programming interface. As such, I see Naiad becoming influential in terms of academic research, but 
not in terms of its adoption in the industry.