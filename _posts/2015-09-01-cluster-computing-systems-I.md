---
layout: post
title: Cluster Computing Systems (I)
---

## MapReduce: Simplified Data Processing on Large Clusters

_Is the Problem Real?_

The problem tackled in this paper is parallelization of computation on large volumes of data that are typically distributed across hundreds or thousands of machines. Under such a setting, data distribution, fault and failure tolerance are important issues, particularly when running the computation across commodity clusters. Since this work was largely inspired by real problems within Google's own application domains (processing crawled documents, web request logs, computing inverted indices, graph representations of web documents, etc.), which are representative of general issues in processing large volumes of data, the problem addressed in the paper is indeed a real one.     

_What is the solution's main idea?_

This paper describes MapReduce, a programming model that supports parallel execution of a job on a cluster of commodity machines. The programming model is functional, and entails a user describing their jobs in terms of two functions — map and reduce. The map function processes key-value pairs to generate intermediate key-value pairs. These are in turn processed aggregated by the reduce function, which merges all intermediate values associated with the same intermediate value based on the user’s specification of the reduce function. The authors cite the main contribution of this paper to be the simple and powerful interface that enables automatic parallelization and distribution of large-scale computations with performance on large clusters of commodity computers.

_Why is the solution different from previous work?_

While programming model or the idea of employing a functional style of programming for distributed data computation isn’t particularly novel, the novelty lies in the system implementation which takes care of the fault-tolerance, task-scheduling, programming complexity, data distribution and partitioning, etc. This work re-enforces a functional approach to handling large volumes of data in a distributed setting, and provides a novel implementation of a framework to handle the same. MapReduce also handles a number of issues of scale (such as fault-tolerance, programming complexity, data distribution and partitioning) that are typically faced by applications that operate on large volumes of data. These are handled by the run-time system without adding complexity for the user/programmer.

_Does the paper identify any fundamental/hard trade-offs?_

The paper offers a _restrictive_ programming model in order to enable a computation framework that can be easily parallelized. The programming model, though simple, is arguably limited in its expressibility — not all real-world applications may have a direct or efficient mapping to a MapReduce model. However, the paper shows that there are several real-world applications that can be adapted to this model, and given the wide-spread adoption of the MapReduce model (in some form or another), the trade-off between expressiveness and a parallelizable computation model seems quite reasonable.

_Will the paper be influential in 10 years?_

MapReduce has been one of the most influential contributions to research in data processing in recent times; there have been numerous implementations in several languages, and despite the various optimizations, the core idea has remained the same across numerous computational frameworks. I believe that the MapReduce paper will continue to shape both big data processing systems as well as research around them for some time to come. 

## Dryad: Distributed Data-Parallel Programs from Sequential Building Blocks

_Is the Problem Real?_

As with MapReduce, this paper addresses the problem of parallelization of large-scale internet services which typically depend on clusters of 100s-1000s of commodity servers, in the face of high latency, unreliable networks, scalability issues, etc. The goal for Dryad is stated to be the simplicity of the programming model, along with the reliability, efficiency and scalability of the applications. Again, as with the MapReduce paper, this is an important problem for application designers and programmers that need to handle large volumes of data on large commodity clusters.   

_What is the solution's main idea?_

The solution proposed by the authors is Dryad, an execution engine for coarse-grained data-parallel applications where the developer has _fine control_ over the application's communication graph. The developer can specify an arbitrary directed acyclic graph composed of Dryad operators to describe application communication patterns and the data transport mechanisms between the computation vertices. The graph vertices can use arbitrary number of inputs and outputs where MapReduce restricts all computations to operate on a single input and output set. The authors describe optimizations, such as aggregate trees for associative operations. Other components of the system are responsible for automatically handling failures, scheduling Dryad jobs, and distributed file storage using a GFS-like filesystem (similar to MapReduce).  

_Why is the solution different from previous work?_

The authors mention that they draw inspiriation from three prior models: shader languages for GPUs, MapReduce and parallel databases: all three enable developers to write concurrent software that is reliably executed in a distributed fashion. However, all three restrict an application's communication flow for different reasons:

* GPU shader languages are strongly tied to efficient underlying hardware for commong graphics patterns
* MapReduce aims for simplicity at the expense of generality and performance
* Parallel databases were designed for relational algebra manipulations where the communication graph is implicit.

Dryad, on the other hand, aims to enable _fine control_ over the communication graph for the application as well as the the subroutines at the vertices.

_Does the paper identify any fundamental/hard trade-offs?_

I feel that the tradeoff explored in this paper is between _expressiveness and efficiency_ and _simplicity of programmablity_ in distributed programming. While Dryad acheives expressiveness using the DAG structure for its communication graph, and efficiency as a consequence of a more expressive flow graph, the use of multiple channels of communication, etc, Dryad loses out on programmability, since programmers must visualize the data flows which were conveniently abstracted out (or implicit) in MapReduce.

_Will the paper be influential in 10 years?_

In my opinion, the key tradeoff that Dryad makes, i.e., sacrificing _simplicity in programming_ for _expressiveness and efficiency_, is its primary drawback. As time has shown, simpler cluster compute systems that expose simpler abstractions (e.g., MapReduce, Spark) have gained higher impact despite their reduced expressiveness, since they are simpler to reason with. Another reason for its relatively lower impact could be attributed to its closed-source nature; however, with Dryad's and DryadLINQ's recent open-source release, this could potentially change. 