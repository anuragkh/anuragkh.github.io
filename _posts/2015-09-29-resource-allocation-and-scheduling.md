---
layout: post
title: Resource Allocation and Scheduling
---

## Dominant Resource Fairness (DRF)

_Is the Problem Real?_

While the fair allocation of resources has been widely discussed in a single resource environment, and different adaptations
of max-min fairness (maximizing the minimum allocation of a user in a system) are found to work well, this paper addresses
the fair allocation of resources in a multi-resource environment. With a large number of shared platforms that support
coexisting applications (e.g., MapReduce, Spark, etc.) with multiple users, sharing multiple resources (CPU, RAM, etc.) 
fairly across the different users is an important problem to address.

_What is the solution's main idea?_

The main idea behind the solution is the generalization of "max-min" fairness to the multi-resource domain. In particular,
different users have different demands for each of the resources, and fair share is determined by "max-min" fair-share for 
the dominant resource (most heavily allocated resource) for that user. 

_Why is the solution different from previous work?_

The authors discuss properties that such an allocation policy must possess: 
* sharing incentive (better to share than desire exclusive access to resources),
* strategy proofness (no benefit in lying about resource demands),
* envy-freeness (no preference for another user’s allocation), and,
* pareto efficiency (impossible to increase allocation of one user without decreasing allocation of another). 

Additionally, properties like 
* single resource fairness (reduction to max-min fairness in presence of a single resource),
* bottleneck fairness (when a single resource is bottlenecked, reduces to max-min fairness for bottlenecked resource),
* population monotonicity (no decrease in allocation on adding users), and 
* resource monotonicity (no decrease in allocation on adding resources) 
are also desirable. 

The authors show analytically that while DRF possesses all of these properties except resource monotonicity, 
alternate fairness policies like asset fairness and Competitive Equilibrium from Equal Incomes (CEEI) lose 
out on more important properties like sharing incentive or strategy proofness.

_Does the paper identify any fundamental/hard trade-offs?_

As discussed before, the authors mention several desirable properties that are expected from a multi-resource allocation
policy. While these properties may not be complete, there is an inherent tradeoff that is exposed between them, and
different allocation policies typically tradeoff some of the desirable properties for others. However, DRF acheives
almost all these properties, apart from resource monotonicity.

_Will the paper be influential in 10 years?_

Since a majority of resource allocators in and across cluster computing frameworks rely on some notions of fairness, 
DRF is an important contribution in that direction. With its adoption in Mesos, it already has had real-world impact,
and I expect it to continue to be influential both in industry and in academia.

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