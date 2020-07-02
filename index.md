---
layout: default
title: Anurag Khandelwal
---
# About

I am an Assistant Professor at the [Department of Computer Science](https://cpsc.yale.edu/)
at [Yale University](https://www.yale.edu/). My research interests span 
distributed systems, databases, networking, and algorithms.

Prior to starting at Yale, I did a short post-doc at [Cornell Tech](https://tech.cornell.edu/)
where I worked with [Tom Ristenpart](https://rist.tech.cornell.edu/) and
[Rachit Agarwal](http://www.cs.cornell.edu/~ragarwal/index.html).
I received my PhD from the [University of California, Berkeley](https://eecs.berkeley.edu), 
at the [RISELab](https://rise.cs.berkeley.edu), where I was advised by 
[Ion Stoica](https://people.eecs.berkeley.edu/~istoica/). I completed my
bachelor's degree (B. Tech. in Computer Science and 
Engineering) from the [Indian Institute of Technology, Kharagpur](http://www.iitkgp.ac.in).

**I am looking for highly motivated graduate students. Please send me an email if you are interested.**

# News
1/6: Started at [Yale](https://fas.yale.edu/book/new-ladder-faculty-2019-20/school-engineering-applied-science/anurag-khandelwal)!
6/22: [Pancake](https://www.usenix.org/conference/usenixsecurity20/presentation/grubbs) accepted to USENIX Security!

# Research

**OS Stack for Serverless Architectures:** Cloud services are quickly moving 
from traditional server-based architecture to a serverless model. Such 
serverless architectures enable higher scalability and resource utilization by
allowing applications to launch short-lived compute tasks that operate on data
stored on a remote store. However, today's serverless stacks cater mainly to
_stateless_ (i.e., embarassingly parallel) tasks, there is a tremendous push
towards supporting stateful applications on serverless architectures. To this
end, we are exploring the ground up design of the serverless OS stack that
facilitates stateless and stateful applications.

_Publications:_
* A Berkeley View on Serverless Computing \[[UC Berkeley Tech Report](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2019/EECS-2019-3.pdf)\]

**System stack for emerging hardware:** Today's system stacks were designed to
operate with traditional hardware, e.g., with 1 Gbps links and traditional 
storage media. The next generation of emerging hardware (e.g., 100Gbps links,
non-volatile memory) change the many fundamental assumptions made in the design
and optimization of these systems. To resolve these challenges, we are 
revisiting traditional system designs to bridge the gap between hardware
capabilities and realizable system properties.

_Publications:_
* Distributed Monitoring & Diagnosis Stack for High Speed Networks \[[NSDI'19 Paper](http://cs.berkeley.edu/~anuragk/papers/confluo.pdf)\], \[[Code](https://github.com/ucbrise/confluo)\]

**Secure cloud systems:** With web applications and services moving from 
self-owned servers in private data centers to to public cloud platforms, users
must now trust the cloud provider who manages the physical infrastructure that 
their applications run on. Unfortunately, high-profile security breaches in the 
public cloud indicate that this trust may not always be well placed. We are 
exploring the vulnerabilities of existing system deployments hosted on the 
cloud and the design of secure systems that no longer have to trust the cloud 
provider.

_Publications:_
* Pancake: Frequency Smoothing for Encrypted Data Stores \[[USENIX Security'20 Paper](https://www.usenix.org/conference/usenixsecurity20/presentation/grubbs)\]

**Queries on compressed data:** Ensuring low latency and high throughput for 
user-facing queries is challenging when the volume of data being queried grows 
larger than the DRAM capacity. Traditionally, storage systems have resorted to 
spilling over such data to significantly slower secondary storage, resulting in 
higher query latency and reduced throughput. We have been exploring a 
fundamentally new approach to resolve this challenge --- enabling queries 
_directly_ on a compressed representation of the data.

_Publications:_
* Succinct: Enabling Queries on compressed data \[[NSDI'15 Paper](http://cs.berkeley.edu/~anuragk/papers/succinct.pdf)\], \[[Code: Standalone System](http://github.com/amplab/succinct-cpp)\], \[[Code: Succinct on Spark](https://github.com/amplab/succinct)\]
* BlowFish: Dynamic Storage-Performance Tradeoff in Data Stores \[[NSDI'16 Paper](http://cs.berkeley.edu/~anuragk/papers/blowfish.pdf)\]
* Sprint: Regular Expression Queries on Compressed Data \[[Tech Report](http://cs.berkeley.edu/~anuragk/papers/swift.pdf)\], \[[Code](https://github.com/amplab/sprint)\]
* ZipG: Serving Queries on Compressed Graphs \[[SIGMOD'17 Paper](http://cs.berkeley.edu/~anuragk/papers/zipg.pdf)\]

# Teaching

CPSC 433/533: Computer Networks
* Spring 2020
