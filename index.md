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

* **08/12/20**: [Pancake](papers/pancake.pdf) wins [Distinguished Paper Award](https://cpsc.yale.edu/news/paper-anurag-khandelwal-wins-distinguished-paper-award) at USENIX Security'20! Thank you USENIX!
* **06/22/20**: [Pancake](papers/pancake.pdf) accepted to USENIX Security!
* **01/06/20**: Started at [Yale](https://fas.yale.edu/book/new-ladder-faculty-2019-20/school-engineering-applied-science/anurag-khandelwal)!

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
* A Berkeley View on Serverless Computing \[[UC Berkeley Tech Report](papers/berkeley-view-serverless.pdf)\]

**System stack for emerging hardware:** Today's system stacks were designed to
operate with traditional hardware, e.g., with 1 Gbps links and traditional 
storage media. The next generation of emerging hardware (e.g., 100Gbps links,
non-volatile memory) change the many fundamental assumptions made in the design
and optimization of these systems. To resolve these challenges, we are 
revisiting traditional system designs to bridge the gap between hardware
capabilities and realizable system properties.

_Publications:_
* Distributed Monitoring & Diagnosis Stack for High Speed Networks \[[NSDI'19 Paper](papers/confluo.pdf)\], \[[Code](https://github.com/ucbrise/confluo)\]

**Secure cloud systems:** With web applications and services moving from 
self-owned servers in private data centers to to public cloud platforms, users
must now trust the cloud provider who manages the physical infrastructure that 
their applications run on. Unfortunately, high-profile security breaches in the 
public cloud indicate that this trust may not always be well placed. We are 
exploring the vulnerabilities of existing system deployments hosted on the 
cloud and the design of secure systems that no longer have to trust the cloud 
provider.

_Publications:_
* Pancake: Frequency Smoothing for Encrypted Data Stores \[[USENIX Security'20 Paper](papers/pancake.pdf)\] \[[Code](https://github.com/pancake-security/pancake)\]

**Queries on compressed data:** Ensuring low latency and high throughput for 
user-facing queries is challenging when the volume of data being queried grows 
larger than the DRAM capacity. Traditionally, storage systems have resorted to 
spilling over such data to significantly slower secondary storage, resulting in 
higher query latency and reduced throughput. We have been exploring a 
fundamentally new approach to resolve this challenge --- enabling queries 
_directly_ on a compressed representation of the data.

_Publications:_
* Succinct: Enabling Queries on compressed data \[[NSDI'15 Paper](papers/succinct.pdf)\], \[[Code: C++](http://github.com/amplab/succinct-cpp)\], \[[Code: Java](https://github.com/amplab/succinct)\]
* BlowFish: Dynamic Storage-Performance Tradeoff in Data Stores \[[NSDI'16 Paper](papers/blowfish.pdf)\]
* Sprint: Regular Expression Queries on Compressed Data \[[Tech Report](papers/swift.pdf)\], \[[Code](https://github.com/amplab/sprint)\]
* ZipG: Serving Queries on Compressed Graphs \[[SIGMOD'17 Paper](papers/zipg.pdf)\]

# Teaching

CPSC 637: Big Data Systems
* Fall 2020

CPSC 433/533: Computer Networks
* Spring 2020
