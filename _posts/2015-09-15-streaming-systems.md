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
are stored reliably as an RDD, and processed via deterministic parallel operations to produce system output or input to the next
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

The problem addressed in this paper is the design of a stream processing platform that provides the following properties:

* Exactly-once guarantees
* Low latency
* High throughput
* Expressive computation model
* Low overhead of fault-tolerance in the absence of of failures
* Flow control, i.e., ablility to tolerate straggling operators.

The problem itself is quite similar to the one addressed in the Spark Streaming paper, and hence, the discussion on how real the
problem is quite similar.

_What is the solution's main idea?_

The solution's key idea is to exploit distributed snapshots based on Chandy-Lamport's algorithm, guaranteeing "exactly-once" 
semantics. In particular, Flink periodically creates snapshots of _all_ the states the streaming compuation is in. 
The snapshots are stored on persistent storage, and recovery proceeds by reading the latest snapshot and
reconstructing the stream.

_Why is the solution different from previous work?_

Micro-batching suffers from the following issues:
* They employ a modified programming model, which limits expressiveness; for example, users cannot compute on window data in periods other than multiples of checkpoint interval. Moreover, there is no support for count-based or session windows that are popular among many applications. 
* It is hard for them to deal with backpressure
* The micro-batch latency limits applications that require sub-second latencies.

When compared with Google's Cloud Data Flow model, Flink uses distributed snapshots while Cloud Data Flow uses distributed 
transactions. In distributed transactions, record deliveries are logged along with the updates to the state. During a failure, 
both state and record deliveries are repeated from the log, making recovery expensive. Distributed snapshots overcomes this issue
by allowing the periodicity of snapshots determine the time spent in recovery.

_Does the paper identify any fundamental/hard trade-offs?_

The key tradeoff lies in the fault tolerance scheme employed, which plays an important role in the end-to-end design
of such a system. By employing a snapshot-based scheme, the tradeoff is essentially between recovery time and
the overhead of periodic snapshot creations. If there are too many snapshots, and the operators have a lot of state,
then the data processing performance (latency, throughput) degrades; on the other hand, if there are too few snaphots,
then there is significant amount of time spent in recovering from a failure. 

_Will the paper be influential in 10 years?_

The key contribution in Apache Flink is its choice of fault-tolerance mechanism for stream-processing, in that it does 
not constrain the system's ability to achieve other requirements for a stream processing framework. The mechanism for 
fault-tolerance itself is a simple adaptation of Chandy-Lamport algorithm. While the identified requirements for a stream
processing system is interesting (although not new -- the Data Flow model paper already had identified a number of them), 
the choice of fault-tolerance scheme itself isn't fundamental to the design of the stream processing system (unless it 
employs a radically different data processing framework such as micro-batch processing). Since the system is still quite
new, it is hard to predict how impactful it would be in industry. It is unclear if it would be academically influential
in the next 10 years.

## The Dataflow Model: A Practical Approach to Balancing Correctness, Latency, and Cost in Massive-Scale, Unbounded, Out-of-Order Data Processing

_Is the Problem Real?_

The problem addressed in this paper is the correct modeling of data processing for unbounded, unordered, large-scale 
datasets with sophisticated requirements, such as low latency execution of event-time ordering, windowing, etc. There
are a large number of systems that have evolved over time to cater to these widely contrasting requirements, and 
typically achieving different degrees of correctness, latency, and cost. Correctly modeling the semantics of a system
that can cater to such problems could provide the ability to cater to all of these requirements, while the degree of 
correctness, latency and cost would still be governed by the underlying implementation. In this aspect, I feel this 
is an interesting and real problem to solve. 

_What is the solution's main idea?_

The key aspect in this paper isn't the system design itself, but the real-world experiences and a set of principles 
that governed their system design:

* Systems dealing with unbounded datasets shouldn't rely on any notion of completeness.
* It is important to be flexible in terms of the set of operations that can be supported by the system.
* The interface for using the system for analyzing unbounded datasets should be simple
* The system should support robust analysis of data in the context in which it occurred.

In particular, the Data Flow model provides a way to compute "event-time" ordered results, windowed by features of the 
unbounded data, with tunable correctness, latency and cost across a spectrum of combinations. This is made possible by
decomposing the pipeline across the following dimensions:

- What results are being computed
- Where in event time are they being computed
- When in processing time are they materialized
- How earlier results relate to their later refinements

and also by segregating the logical data processing from the underlying implementation (e.g., via batch, micro-batch 
or stream processing). Different degrees of correctness, latency and cost are left to the choice of the underlying
implementation. 

_Why is the solution different from previous work?_

The authors provide a detailed description of existing systems that cater to analyzing unbounded and bounded datasets.
The key observation is that while different existing systems acheive some degree of correctness, low-latency, low-cost, 
flexibility and simplicity, they often sacrifice a number of these aspects that could be attained together by employing
a different model for handling unbounded data. Moreover, the systems are too closely tied to the underlying physical
implementation in order to acheive the desired clarity, composability and flexibility that is expected from these systems.
The Data Flow model addresses these shortcomings. However the limitations of the underlying implementation are still left
in place; what the Data Flow model facilitates is a common platform that can express parallel computation that is independent of the 
underlying implementation, without sacrificing on expressiveness of the model itself.

_Does the paper identify any fundamental/hard trade-offs?_

The paper identifies three key metrics in data processing of unbounded datasets that are always in tension, namely, 
correctness, latency, and cost. Existing systems also trade-off flexibility and simplicity along with the metrics above, 
however that is simply an artifact of a strong coupling between the data processing model and the underlying 
implementation. By separating the model from implementation, the authors show that the model can acheive the
required flexibility, simplicity and composability for processing such datasets; the tradeoff is reduced to that
between correctness, latency and cost, which is dependent on the selected framework (batch, micro-batch or record-at-a-time
streaming).    

_Will the paper be influential in 10 years?_

The paper is motivated by strong real-world applications. The Data Flow model provides expressiveness sufficient to
cater to large number of such applications, and shows promise in being able to support new applications as well. As 
such, since there are no constraints on the underlying implementation for adopting the Data Flow model itself, I feel
this paper will be influential both in academia and in industry for designing processing engines for unbounded datasets. 