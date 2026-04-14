---
layout: default
title: Anurag Khandelwal
---
# About

<div class="content-box" markdown="1">

I am an Assistant Professor at the [Department of Computer Science](https://cpsc.yale.edu/)
at [Yale University](https://www.yale.edu/). My research interests span computer systems,
networks, and security. My work addresses challenges in processing, storing, and
serving large volumes of data to empower real-world systems: from sprawling internet services
like social media to critical tools in health and medicine.

_I am always looking for motivated graduate students and postdoctoral researchers!_

</div>

# Recent News

<div class="content-box" markdown="1">

**[2026]**

* [CORD](papers/cord.pdf) selected for inclusion in [IEEE Micro's Top Picks in Computer Architecture in 2025]()!
* [BulletTime](papers/bullettime.pdf) accepted to ISCA'26!
* [Soul](papers/soul.pdf) accepted to OSDI'26!
* [TimelyLLM](papers/timelyllm.pdf) accepted to MobiSys'26!
* [CounterPoint](papers/counterpoint.pdf) accepted to ASPLOS'26, wins [Best Paper Award]()!

</div>

<div class="content-box" markdown="1">

**[2025]**

* [NSF Award](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2444660) to fortify cloud confidential computing environments (with [Lin](http://www.linzhong.org/), [Seung-seob](https://www.seungseoblee.com/))! Thanks NSF!
* [Spirit](papers/spirit.pdf) and [Mage](papers/mage.pdf) accepted to SOSP'25!
* [Found In Translation](papers/fit.pdf) accepted to USENIX Security'25!
* [Weave](papers/weave.pdf) accepted to OSDI'25!
* [CORD](papers/cord.pdf) accepted to ISCA'25, wins [Distinguished Artifact Award]()!
* [PULSE](papers/pulse.pdf) accepted to ASPLOS'25!

</div>

<details class="animated-details" markdown=1>

<summary style="list-style-type: none;"><b><a style="cursor: pointer;">[Older News]</a></b></summary>

<div class="details-panel">
<div class="content-box" markdown="1">

**[2024]**

* [NetApp Faculty Fellowship](https://cpsc.yale.edu/news/anurag-khandelwal-receives-award-netapp-university-research-fund)! Thanks NetApp!
* [Yupeng](https://yupengtang.com/) successfully defended his Thesis! Congrats Dr. Tang!
* [Length leakage in oblivious storage](papers/length-leakage.pdf) accepted to USENIX Security'24!
* [Trinity](papers/trinity.pdf) accepted to EuroSys'24, wins [Best Student Paper Award](https://2024.eurosys.org/awards.html)! Congratulations [Ziming Mao](https://maoziming.github.io/)!
* [PromptCache](papers/promptcache.pdf) accepted to MLSys'24!
* [SCALO](papers/scalo.pdf) selected for inclusion in [IEEE Micro's Top Picks in Computer Architecture in 2023]()!

</div>

<div class="content-box" markdown="1">

**[2023]**

* [SCALO](papers/scalo.pdf) accepted to ISCA'23, wins [Best Paper Award](https://www.sigarch.org/other-announcements/congratulating-isca-2023-awards-recipients/)!
* Work on using [brain-inspired prefetching techniques for disaggregated memory](papers/cls.pdf) accepted to HotOS'23!
* [Karma](papers/karma.pdf) accepted to OSDI'23!
* Received [Roberts Innovation Fund Award](https://seas.yale.edu/news-events/news/roberts-innovation-fund-support-10-bold-seas-faculty-inventions) for work on resource disaggregation!

</div>

<div class="content-box" markdown="1">

**[2022]**

* Congratulations to [Ziming Mao](https://maoziming.github.io/) for [CRA Outstanding Undergraduate Researcher Award](https://cra.org/2023-outstanding-undergraduate-researcher-award-recipients/) (runner up)!
* [Shepherd](papers/shepherd.pdf) accepted to NSDI'23!
* [NSF Award](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2147946&HistoricalAwards=false) to build disaggregated & serverless infrastructure for virtualizing Massive MIMO PHY layer (with [Lin](http://www.linzhong.org/))! Thanks NSF!
* [Shortstack](papers/shortstack.pdf) accepted to OSDI'22!
* [Jiffy](papers/jiffy.pdf) accepted to EuroSys'22!

</div>

<div class="content-box" markdown="1">

**[2021]**

* [MIND](papers/mind.pdf) accepted to SOSP'21!
* Member of [NSF AI Institute](https://seas.yale.edu/news-events/news/yale-scientists-take-lead-roles-two-nsf-funded-ai-institutes) for Edge Computing Leveraging Next-generation Networks!
* [NSF Award](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2054957) for work on [Pancake](papers/pancake.pdf) (with [Rachit](https://www.cs.cornell.edu/~ragarwal/) and [Tom](https://rist.tech.cornell.edu/))! Thanks NSF!
* [What serverless computing is and should become](papers/serverless-next.pdf) published in [CACM](https://t.co/v2wtKRnxBe?amp=1)!
* [NetApp Faculty Fellowship](https://cpsc.yale.edu/news/netapp-faculty-fellowship-awarded-anurag-khandelwal-and-abhishek-bhattacharjee) (with Abhishek Bhattacharjee)! Thanks NetApp!
* [NSF CAREER Award](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2047220)! Thanks NSF!
* [Caerus](papers/caerus.pdf) accepted to NSDI'21!

</div>

<div class="content-box" markdown="1">

**[2020]**

* [Pancake](papers/pancake.pdf) accepted to USENIX Security'20, wins [Distinguished Paper Award](https://cpsc.yale.edu/news/paper-anurag-khandelwal-wins-distinguished-paper-award)!
* [Le Taureau](https://dl.acm.org/doi/10.1145/3318464.3383130) accepted to SIGMOD'20!
* Started at [Yale](https://fas.yale.edu/book/new-ladder-faculty-2019-20/school-engineering-applied-science/anurag-khandelwal)!

</div>
</div>

</details>

# Research

You can find a full list of my publications [here](publications).

<div class="content-box" markdown="1">

**Memory Disaggregation:** Scaling resources at server granularity wastes resources when compute and memory needs are mismatched, increasing both costs and carbon emissions. Memory disaggregation separates compute and memory into shared network-connected pools to improve resource efficiency, capacity, and elasticity. We are rethinking the cloud software and hardware stack to realize memory disaggregation:

* Scalable cache coherence for disaggregated shared memory pools: [SOSP'21](papers/mind.pdf), [ISCA'25](papers/cord.pdf), [OSDI'26](papers/soul.pdf)
* Fair sharing across disaggregated memory resources: [OSDI'23](papers/karma.pdf), [SOSP'25](papers/spirit.pdf)
* Low-latency, high-throughput access to disaggregated memory: [ASPLOS'25](papers/pulse.pdf), [SOSP'25](papers/mage.pdf)
* Understanding memory performance: [ISCA'26](papers/bullettime.pdf), [ASPLOS'26](papers/counterpoint.pdf)

</div>

<div class="content-box" markdown="1">

**Secure cloud systems:** As more privacy-sensitive applications move storage and computation to the cloud, encrypted data and secure enclaves can still leak sensitive information through access patterns. Existing defenses are often too expensive in bandwidth or storage to deploy widely. Our research studies these real-world access-pattern vulnerabilities and designs more efficient protections against them.

* Protecting against access pattern vulnerabilities: [USENIX Sec'20](papers/pancake.pdf), [OSDI'22](papers/shortstack.pdf), [OSDI'25](papers/weave.pdf)
* Understanding access pattern vulnerabilities: [USENIX Sec'24](papers/length-leakage.pdf), [USENIX Sec'25](papers/fit.pdf)

</div>

<div class="content-box" markdown="1">

**Systems for AI:** Today’s AI serving systems waste substantial time and resources because they treat requests as independent and unpredictable, even though real workloads contain rich recurring structure in both arrival patterns and prompt content. We are building cloud AI serving platforms that treat workload structure as a first-class systems primitive:

* Scheduling for low-latency, high-throughput AI inference: [NSDI'23](papers/shepherd.pdf), [MobiSys'26](papers/timelyllm.pdf)
* Caching attention state across prompts for low-latency inference: [MLSys'24](papers/promptcache.pdf)

</div>

<div class="content-box" markdown="1">

**Storage and processing stacks for automated data:** Emerging applications that rely on automated data sources --- ranging from smart vehicles to brain implants --- require processing, storing, and serving massive volumes of semantically rich data. We are developing systems for efficient ingestion of data without compromising query and processing performance by exploiting properties specific to machine-generated data:

* High-throughput compressed storage high-dimensional data: [EuroSys'24](papers/trinity.pdf)
* Distributed system for scalable Brain-Computer Interfacing (BCI): [ISCA'23](papers/scalo.pdf), [MICRO Top Picks'23](papers/scalo-toppicks.pdf)
* Distributed monitoring & diagnosis for high speed networks: [NSDI'19](papers/confluo.pdf)

</div>

<div class="content-box" markdown="1">

**Serverless Systems:** Serverless analytics workloads increasingly demand fine-grained, rapidly changing compute and memory resources, but existing cloud systems manage them too coarsely, forcing a tradeoff between performance and utilization under bursty, time-varying demand. We are building a serverless analytics stack that treats elasticity and workload-aware multiplexing as first-class primitives:

* Position papers: [UC Berkeley Tech Report](papers/berkeley-view-serverless.pdf), [SIGMOD'20](https://dl.acm.org/doi/10.1145/3318464.3383130), [CACM'21](papers/serverless-next.pdf)
* Enabling fast and cost-effective analytics over serverless functions: [NSDI'21](papers/caerus.pdf), [EuroSys'22](papers/jiffy.pdf)

</div>

<div class="content-box" markdown="1">

**(Past) Queries on compressed data:** As datasets grow beyond DRAM capacity, maintaining interactive query performance becomes difficult because spilling to slower secondary storage increases latency and lowers throughput. We developed systems that address this challenge using a fundamentally new approach: enabling rich query execution directly on compressed data, reducing the need to fully decompress or rely on large DRAM footprints.

* Enabling queries on compressed data: [NSDI'15](papers/succinct.pdf), [SIGMOD'17](papers/zipg.pdf), [Thesis](papers/thesis.pdf)
* Dynamic storage-performance tradeoff in data stores: [NSDI'16](papers/blowfish.pdf)

</div>

# Teaching

<div class="content-box" markdown="1">

**Operating Systems:**

* [Spring 2024](https://courses.yale.edu/?details&srcdb=202401&crn=28089), [Spring 2025](https://courses.yale.edu/?details&srcdb=202501&crn=22577), [Spring 2026](https://courses.yale.edu/?details&srcdb=202601&crn=21079)

</div>

<div class="content-box" markdown="1">

**Computer Networks:**

* [Spring 2020](https://courses.yale.edu/?details&srcdb=202001&crn=20035), [Spring 2021](https://courses.yale.edu/?details&srcdb=202101&crn=21996), [Spring 2022](https://courses.yale.edu/?details&srcdb=202201&crn=20912)

</div>

<div class="content-box" markdown="1">

**Big Data Systems:**

* [Fall 2020](https://courses.yale.edu/?details&srcdb=202003&crn=12353), [Fall 2021](https://courses.yale.edu/?details&srcdb=202103&crn=11454). [Fall 2023](https://courses.yale.edu/?details&srcdb=202303&crn=17222), [Fall 2025](https://courses.yale.edu/?details&srcdb=202503&crn=10165)

</div>

# Service

<div class="content-box" markdown="1">

**Program Committees:**

* 2026: EuroSys, SOSP
* 2025: NSDI
* 2024: OSDI, SOSP, EuroSys
* 2023: CoNEXT (Poster Co-Chair), NSDI, EuroSys
* 2022: NSDI, HotNets, EuroSys
* 2021: JSys, NSDI
* 2020: SIGCOMM (Poster/Demo, SRC), ASPLOS (EPC), NSDI

</div>
