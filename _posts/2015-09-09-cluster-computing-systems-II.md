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

Given the popularity and adoption of the system, it seems very likely that the paper will be influential for the next 10 years. The key aspects of the paper,
namely the RDD abstraction, reuse of data across operations, etc., are general and practical approaches to handling large volumes of data, and should
remain relevant for time to come.

## Naiad: A Timely Dataflow System

_Is the Problem Real?_

_What is the solution's main idea?_

_Why is the solution different from previous work?_

_Does the paper identify any fundamental/hard trade-offs?_

_Will the paper be influential in 10 years?_