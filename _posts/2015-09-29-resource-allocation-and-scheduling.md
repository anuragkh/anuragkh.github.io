---
layout: post
title: Resource Allocation and Scheduling
---

## Dominant Resource Fairness (DRF)

_Is the Problem Real?_

_What is the solution's main idea?_

_Why is the solution different from previous work?_

_Does the paper identify any fundamental/hard trade-offs?_

_Will the paper be influential in 10 years?_

## Omega: flexible, scalable schedulers for large compute clusters

_Is the Problem Real?_

The problem addressed in this paper is cluster scheduling in a large-scale environment (scalability), 
with rapidly changing requirements (flexibility). Target high utilization, efficiency in shared 
large-scale compute clusters, running a mix of:

* CPU-intensive and Memory-intensive jobs
* batch and low-latency jobs 
* user-facing and infrastructure services 

As clusters/workloads keep growing, since scheduler’s workload is roughly proportional to cluster size, 
scheduler becomes source of scalability bottleneck.

The authors state that Omega's design is driven by real-life Google’s production workloads. In particular:
> "Google’s production job scheduler has experienced all of this. Over the years, it has evolved into a 
> complicated, sophisticated system that is hard to change."

_What is the solution's main idea?_

The authors employ a parallel scheduler architecture with shared state, using lock-free optimistic concurrency 
control, to achieve both implementation extensibility and performance scalability.

_Why is the solution different from previous work?_

The authors categorize previous work in cluster scheduling as:
* _Monolithic schedulers_ — single, centralized scheduling algorithm for all jobs (Google’s existing scheduler). 
* _Two-level schedulers_ — single, active resource manager that offers compete resources to multiple parallel, independent "scheduler frameworks" (Mesos, Hadoop-on-Demand).

The drawbacks of previous work included:

Monolithic schedulers:
* harder to add new policies
* may not scale up to large cluster sizes

Two-level schedulers:
* conservative resource visibility and locking algorithms limit flexibility and parallelism
* hard to schedule “picky” jobs
* hard to make decisions that require access to the sate of the entire cluster

Omega overcomes these by using a parallel scheduler architecture with shared state, using lock-free optimistic concurrency 
control, to achieve both implementation extensibility and performance scalability.

_Does the paper identify any fundamental/hard trade-offs?_

The primary tradeoff explored in this work is that between degree of parallelism in scheduling resources in a cluster 
enabeld by a shared-state, optimistic concurrency control and the amount of wasted work when the optimistic concurrency
assumptions fail.

_Will the paper be influential in 10 years?_

Omega has already had significant impact since it is the cluster management system used in Google’s production system.
I believe the taxonomy of the option space for cluster scheduling development, together with the ideas of shared state 
for scalable and flexible cluster scheduling will have long lasting impact in resource scheduling research. 

## Sparrow: Distributed, Low Latency Scheduling

_Is the Problem Real?_

_What is the solution's main idea?_

_Why is the solution different from previous work?_

_Does the paper identify any fundamental/hard trade-offs?_

_Will the paper be influential in 10 years?_