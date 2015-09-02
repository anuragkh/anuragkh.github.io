---
layout: post
title: Cluster Computing Systems (I)
---

## MapReduce: Simplified Data Processing on Large Clusters
A
_Is the Problem Real?_

_What is the solution's main idea?_

This paper describes MapReduce, a programming model that supports parallel execution of a job on a cluster of commodity machines. The programming model is functional, and entails a user describing their jobs in terms of two functions — map and reduce. The map function processes key-value pairs to generate intermediate key-value pairs. These are in turn processed aggregated by the reduce function, which merges all intermediate values associated with the same intermediate value based on the user’s specification of the reduce function. The authors cite the main contribution of this paper to be the simple and powerful interface that enables automatic parallelization and distribution of large-scale computations with performance on large clusters of commodity PCs.

_Why is the solution different from previous work?_

_Does the paper identify any fundamental/hard trade-offs?_

## Dryad: Distributed Data-Parallel Programs from Sequential Building Blocks

_Is the Problem Real?_

_What is the solution's main idea?_

_Why is the solution different from previous work?_

_Does the paper identify any fundamental/hard trade-offs?_

