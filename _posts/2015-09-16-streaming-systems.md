---
layout: post
title: Streaming Systems
---

## Discretized Streams: A Fault-Tolerant Model for Scalable Stream Processing

_Is the Problem Real?_

The problem addressed in this paper is that of stream processing in distributed systems. Although this isn't a new
problem in itself, a key focus in this work is efficient fault and straggler mitigation for stream processing systems.
This is a real problem in stream processing systems, since most stream processing systems employ expensive mechanisms
for fault tolerance, and generally lack in straggler mitigation, both of which are prevalant problems at scale. 

_What is the solution's main idea?_

The main idea behind Discretized Streams is to run each streaming computation as a series of deterministic batch computations
on small time intervals (as low as half a second). These batch computations employ Spark as the computation framework, with
in-memory RDDs used to implement streaming operators including stateful computations and incremental sliding windows. Failures
are taken care of using lineage information associated with RDDs --- upon a node failure, all nodes reconstruct parts of the 
lost RDD(s) in parallel (leading to faster recovery). Similarly, Discretized Streams are able to recover from stragglers using
speculative execution. With this model Spark Streaming is able to process over 60 million records per second on a 100-node 
cluster.

_Why is the solution different from previous work?_

There are three key ways in which Spark streaming differs from previous approaches to stream processing:

* Previous approaches have primarily employed a record-at-a-time model, where each node continuously receives records,
updates internal state, and sends new records. In contrast, in Spark Streaming, all records that arrive within a time interval
are store reliably as an RDD, and processed via deterministic parallel operations to produce system output or input to the next
interval.

* As a consequence of a record-at-a-time approach, all nodes need to maintain complex state; this makes recovery challenging
when the state of a node is lost (failure) or slow (straggler). Typical approaches to fault tolerance are either replication, 
which requires expensive synchronization to maintain consistency between replicas during stream processing, or upstream backup,
which requires a single node to recompute the lost node's state by replaying the stored messages at the parents. Spark Streaming
avoids shortcomings of both approaches, and also enables straggler mitigation, by virtue of RDDs lineage and speculative execution.

* Finally, Spark Streaming is unique in that it interoperates seamlessly with Spark's batch and interactive processing features. This
allows users to run ad-hoc queries on arriving streams, or combine streams with historical data using the same API.

_Does the paper identify any fundamental/hard trade-offs?_

A key trade-off in Spark Streaming is between _minimum latency_ of streaming updates and _efficiency_  handling failures and stragglers,
as well as in resource utilization. In particular, Spark Streaming is suitable for applications where latency needs are of the order of
0.5-2 seconds or higher, and does not target applications with latency requirements lower than 100ms (e.g., high frequency trading). On
the other hand, this enables much simpler fault tolerance and straggler mitigation, as well as efficiency and rich functionality, all of
which become increasingly useful at scale. 

_Will the paper be influential in 10 years?_

I believe the paper would still be influential in 10 years. Spark Streaming makes a radical use of efficient batch processing to facilitate
efficient stream processing, while catering to fault recovery and straggler mitigation in a simple and efficient way. This makes it practical
for large scale deployments. Moreover, enabling efficient batch processing as well as stream processing on the same framework has attractive
advantages, which work in favor of Spark Streaming's adoption.   

## Fink

_Is the Problem Real?_

_What is the solution's main idea?_

_Why is the solution different from previous work?_

_Does the paper identify any fundamental/hard trade-offs?_

_Will the paper be influential in 10 years?_

## The Dataflow Model: A Practical Approach to Balancing Correctness, Latency, and Cost in Massive-Scale, Unbounded, Out-of-Order Data Processing

_Is the Problem Real?_

_What is the solution's main idea?_

_Why is the solution different from previous work?_

_Does the paper identify any fundamental/hard trade-offs?_

_Will the paper be influential in 10 years?_