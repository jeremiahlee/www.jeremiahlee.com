---
date: 2020-09-28T19:00:00+02:00
title: "What is LongFi and HNT?"
excerpt: "LongFi is foundational technology for realizing the potential of smart IoT devices."
excerptImage: preview-wide.jpg
tags:
  - "posts"
  - "technology"
---

<iframe class="mb-4" src="https://cinnamon.video/embed?v=418561001596651468" width="640" height="360" frameborder="0" allow="monetization; accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I first heard about LoRa (**Lo**ng **Ra**nge) a few years ago while working at Fitbit. It is a networking technology that enables smart electronic devices to connect to the Internet without having to be near Wi-Fi, connect through your phone, or subscribe to a cellular carrier.

Imagine small, inexpensive, low-power sensors attached to all sorts of stuff people want to monitor: pet collars, wild fire detectors, air-quality sensors, farm/home irrigation devices, etc. The rental scooter company <a href="https://techcrunch.com/2019/06/12/helium-network/?ref=JeremiahLee">Lime uses LoRa</a> in the US to track scooter rides and locations. <a href="https://www.sfchronicle.com/business/article/What-are-Helium-founders-breathing-A-cheaper-13999551.php?ref=JeremiahLee">Nestle</a> monitors office water coolers to know when they need refills. LoRa allows these types of devices to be online.

LoRa is similar to Wi-Fi, but with 200 times the range. Like Wi-Fi, LoRa uses license-free radio frequency bands, so anyone can create a network or add a device to the network.

LoRa is similar to 4G or 5G cellular networks, but does not require licensing radio spectrum to operate a network or a cellular service contract to add a device to the network.

The biggest technical differences between LoRa and Wi-Fi/4G/5G are power consumption and data speed. LoRa uses less power to transmit data, but operates at much slower speed (max 0.3 Kbps). That speed is too slow to browse the Web with any degree of satisfaction, but it is fast enough for many kinds of smart devices.

## LoRa network protocol + payment protocol = LongFi

Let’s say you have a smart device you want to connect to the Internet. If it used 4/5G, you would need a SIM card and subscription contract with a cellular company. If it used Wi-Fi, you would need a known nearby network name and password to connect it. To use LoRa, you simply attach payment with your data request.

LongFi is a LoRa <abbr title="Wide Area Network">WAN</abbr> created by <a href="https://www.helium.com/?ref=JeremiahLee">Helium Systems</a> and formed by a global mesh of routers operated by common people. Devices using LoRa do not need Wi-Fi-like network credential or cellular-like service contracts. They simply find the closest LongFi router and make a data request with electronic payment attached.

The LongFi router fulfills the data request by securely proxying it to the Internet and receives most of the payment for doing so. Some of the payment is reserved for other devices verifying the transaction and for Helium’s operations.

Due to the tiny amount of monetary value involved with each data request, this is one of the few good uses for cryptocurrency. LongFi uses <a href="https://www.helium.com/earn?ref=JeremiahLee">Helium tokens (HNT)</a>, specifically designed for this high-transaction, low-power use case.

**LongFi removes the most significant barrier to deploying IoT devices: connectivity. I think it has the potential to be a foundational technology for realizing the potential of smart devices.**

I operate 2 LongFi routers from Helium in Nacka, Stockholm, Sverige.

## Further reading

<a href="https://blog.helium.com/helium-ecosystem-health-a-closer-look-at-iot-lorawan-depin-and-5g-usage-on-the-network-f74465b474a6">Helium ecosystem health: a closer look at IoT, LoRaWAN, DePIN, and 5G usage on the network</a>
