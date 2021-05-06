export default {"abi":{"ABI version":2,"header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"setDemiurgeAddress","inputs":[{"name":"addr","type":"address"}],"outputs":[]},{"name":"getDemiurge","inputs":[],"outputs":[{"name":"addr","type":"address"}]},{"name":"getDebotInfo","id":"0xDEB","inputs":[],"outputs":[{"name":"name","type":"bytes"},{"name":"version","type":"bytes"},{"name":"publisher","type":"bytes"},{"name":"key","type":"bytes"},{"name":"author","type":"bytes"},{"name":"support","type":"address"},{"name":"hello","type":"bytes"},{"name":"language","type":"bytes"},{"name":"dabi","type":"bytes"},{"name":"icon","type":"bytes"}]},{"name":"getRequiredInterfaces","inputs":[],"outputs":[{"name":"interfaces","type":"uint256[]"}]},{"name":"start","inputs":[],"outputs":[]},{"name":"askMultisig","inputs":[{"name":"index","type":"uint32"}],"outputs":[]},{"name":"saveMultisig","inputs":[{"name":"value","type":"address"}],"outputs":[]},{"name":"voteForProposal","inputs":[{"name":"index","type":"uint32"}],"outputs":[]},{"name":"attachPadawan","inputs":[{"name":"index","type":"uint32"}],"outputs":[]},{"name":"createPadawan","inputs":[{"name":"index","type":"uint32"}],"outputs":[]},{"name":"createPadawan2","inputs":[],"outputs":[]},{"name":"createProposal","inputs":[{"name":"index","type":"uint32"}],"outputs":[]},{"name":"createProposal2","inputs":[],"outputs":[]},{"name":"createProposal3","inputs":[],"outputs":[]},{"name":"onSuccess","inputs":[{"name":"transId","type":"uint64"}],"outputs":[]},{"name":"enterNewPadawanPubkey","inputs":[{"name":"value","type":"bytes"}],"outputs":[]},{"name":"enterStart","inputs":[{"name":"value","type":"int256"}],"outputs":[]},{"name":"enterEnd","inputs":[{"name":"value","type":"int256"}],"outputs":[]},{"name":"enterProposalTitle","inputs":[{"name":"value","type":"bytes"}],"outputs":[]},{"name":"enterSetCode","inputs":[{"name":"index","type":"uint32"}],"outputs":[]},{"name":"enterReserve","inputs":[{"name":"index","type":"uint32"}],"outputs":[]},{"name":"enterSetOwner","inputs":[{"name":"index","type":"uint32"}],"outputs":[]},{"name":"enterSetRootOwner","inputs":[{"name":"index","type":"uint32"}],"outputs":[]},{"name":"enterReserveName","inputs":[{"name":"value","type":"bytes"}],"outputs":[]},{"name":"enterReserveTs","inputs":[{"name":"value","type":"int256"}],"outputs":[]},{"name":"enterSetOwnerName","inputs":[{"name":"value","type":"bytes"}],"outputs":[]},{"name":"enterSetOwnerOwner","inputs":[{"name":"value","type":"address"}],"outputs":[]},{"name":"enterSetOwnerTs","inputs":[{"name":"value","type":"int256"}],"outputs":[]},{"name":"enterSetRootOwnerPubkey","inputs":[{"name":"value","type":"bytes"}],"outputs":[]},{"name":"enterSetRootOwnerComment","inputs":[{"name":"value","type":"bytes"}],"outputs":[]},{"name":"viewAllProposals","inputs":[{"name":"index","type":"uint32"}],"outputs":[]},{"name":"setProposalData","inputs":[{"components":[{"name":"id","type":"uint32"},{"name":"state","type":"uint8"},{"name":"ownerAddress","type":"address"},{"name":"addr","type":"address"},{"name":"ts","type":"uint32"}],"name":"proposals","type":"map(uint32,tuple)"}],"outputs":[]},{"name":"setProposalInfo","inputs":[{"components":[{"name":"id","type":"uint32"},{"name":"start","type":"uint32"},{"name":"end","type":"uint32"},{"name":"title","type":"bytes"},{"name":"ts","type":"uint32"},{"name":"proposalType","type":"uint8"},{"name":"specific","type":"cell"}],"name":"proposals","type":"map(uint32,tuple)"}],"outputs":[]},{"name":"setPadawan","inputs":[{"components":[{"name":"id","type":"uint32"},{"name":"state","type":"uint8"},{"name":"ownerAddress","type":"address"},{"name":"addr","type":"address"},{"name":"ts","type":"uint32"}],"name":"proposalData","type":"tuple"}],"outputs":[]},{"name":"setDemiBalance","inputs":[{"name":"nanotokens","type":"uint128"}],"outputs":[]},{"name":"onSuccessfulDeploy","inputs":[],"outputs":[]},{"name":"updateDemi","inputs":[{"name":"addr","type":"address"}],"outputs":[]},{"name":"onSuccessfulSet","inputs":[],"outputs":[]},{"name":"onError","inputs":[{"name":"sdkError","type":"uint32"},{"name":"exitCode","type":"uint32"}],"outputs":[]},{"name":"retrySetAddress","inputs":[{"name":"value","type":"bool"}],"outputs":[]},{"name":"upgrade","inputs":[{"name":"state","type":"cell"}],"outputs":[]},{"name":"getDebotOptions","inputs":[],"outputs":[{"name":"options","type":"uint8"},{"name":"debotAbi","type":"bytes"},{"name":"targetAbi","type":"bytes"},{"name":"targetAddr","type":"address"}]},{"name":"setABI","inputs":[{"name":"dabi","type":"bytes"}],"outputs":[]},{"name":"setPadawanABI","inputs":[{"name":"sabi","type":"bytes"}],"outputs":[]},{"name":"setDemiurgeABI","inputs":[{"name":"sabi","type":"bytes"}],"outputs":[]},{"name":"setProposalABI","inputs":[{"name":"sabi","type":"bytes"}],"outputs":[]},{"name":"setPadawanImage","inputs":[{"name":"image","type":"cell"}],"outputs":[]},{"name":"setProposalImage","inputs":[{"name":"image","type":"cell"}],"outputs":[]},{"name":"setDemiurgeImage","inputs":[{"name":"image","type":"cell"}],"outputs":[]},{"name":"queryABI","inputs":[{"name":"kind","type":"uint8"}],"outputs":[]},{"name":"queryImage","inputs":[{"name":"kind","type":"uint8"}],"outputs":[]},{"name":"abis","inputs":[],"outputs":[{"name":"abis","type":"map(uint8,bytes)"}]},{"name":"images","inputs":[],"outputs":[{"name":"images","type":"map(uint8,cell)"}]}],"data":[],"events":[]},"image":"te6ccgEC7QEAKdcAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAhD0pCCK7VP0oAYEAQr0pCD0oQUAAAIBIAoHAQL/CAL+f40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhpIds80wABjh2BAgDXGCD5AQHTAAGU0/8DAZMC+ELiIPhl+RDyqJXTAAHyeuLTPwGOHfhDIbkgnzAg+COBA+iogggbd0Cgud6TIPhj4PI02DDTHwH4I7zyuSsJARTTHwHbPPhHbvJ8DwIC3Q4LAcNHHwAW34am34a3D4bG34bW34bm34b40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+HGAwB/I0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhycPhzcPh0cPh1bfh2bfh3bfh4cHBwyMlwbwX4eXDIyW8C+HrIyXBvAvh7yMmNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwbwP4fHDIyQ0BFG8C+H3bPPgP8gDmAT9HAi0NMD+kAw+GmpOADcIccA3CHTHyHdAds8+Edu8nyA8EWCCCEBoIaLi7joDgIIIQPoa8jbuOgOAgghBdd4w5u46A4CCCEH9CC5a7joDgn2I2EARYIIIQaLVfP7uOgOAgghBzM6yfu46A4CCCEHsxy5W7joDgIIIQf0ILlruOgOApHBURAzwgghB97NDbuuMCIIIQfptIkrrjAiCCEH9CC5a64wITEj0BVts8+ErIi9wAAAAAAAAAAAAAAAAgzxbPgc+Bz5P6bSJKIQH0AMlw+wB/+GfrA4Qw+EFu4wDR2zwkwP+OLCbQ0wH6QDAxyM+HIM6AYM9Az4HPgc+T97NDbiTPCwcjzxQizxQhzxbJcPsA3l8E4wB/+GfrFOYA/nDIycjJjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+E1us5b4TSBu8n+SyMniM/hObrOW+E4gbvJ/ksjJ4jL4T26zlvhPIG7yf44kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE4jH4TDQDPCCCEHULtIK64wIgghB1WHkTuuMCIIIQezHLlbrjAhoYFgMgMPhBbuMA0x/R2zzbPH/4Z+sX5gAUIDD4WXNvVPh5MAMgMPhBbuMA9ATR2zzbPH/4Z+sZ5gAIIPh3MAMuMPhBbuMA+kGV1NHQ+kDf0ds82zx/+GfrG+YEVCD4cYIQBZwNb8htbwLIjQSTXVsdGlzaWcgYWRkcmVzczogg2zzbPCPbPN7d04cDPCCCEGmr0Tu64wIgghBs4rSLuuMCIIIQczOsn7rjAiclHQMcMPhBbuMA0ds84wB/+GfrHuYCFvhZbxRyuo6AjoDiIx8CFvhZbxRzuo6AjoDiIiABEvhZbxR0uo6A3iEB9MjPkLC1Cw74WW8Rzwsf+FlvEs8LH/hZbxPPFPhdbyJYIs8L/yHPFGwhyW34UcjPiSXAghA6h8rezwsfghBIaxf5zwsfcs8LB8+Dz4PPg8jPhoDPE850z0DPgc+DyM+DgQIAz0AibpLPgZbPgyLPC//i+CPPCz9wzwsfJAH8yM+R+grBEvhZbxHPCx/4WW8Szwsf+FlvE88U+FxvI1UCI88UIs8WIc8Lf2wxyW34UcjPiSXAghA6h8rezwsfghBIaxf5zwsfcs8LB8+Dz4PPg8jPhoDPE850z0DPgc+DyM+DgQIAz0AibpLPgZbPgyLPC//i+CPPCz9wzwsfJAH0yM+RGDnOPvhZbxHPCx/4WW8Szwsf+FlvE88U+FtvIlgizxQhzwsfbCHJbfhRyM+JJcCCEDqHyt7PCx+CEEhrF/nPCx9yzwsHz4PPg8+DyM+GgM8TznTPQM+Bz4PIz4OBAgDPQCJuks+Bls+DIs8L/+L4I88LP3DPCx8kAEzPkEx2CzbI+FDPFoIQstBeAM8Lf3DPCgBwzwoAJM8Uzc3JcPsAWwMuMPhBbuMA+kGV1NHQ+kDf0ds82zx/+GfrJuYBRiD4cIIQBZwNb40EURlcGxveSBzdWNjZWVkZWQugyM7J2zww3wMeMPhBbuMA1NHbPNs8f/hn6yjmADr4QvhFIG6SMHDeuvLgZPgAIPhLcgFYWXj0F/hrMAM8IIIQY8kr0rrjAiCCEGaJhE+64wIgghBotV8/uuMCMzEqAnow+EFu4wD4RvJzcfhm0fgA+ACNCGAFYWUNUc72IzXqRgK+sTmp9oRgy8HdFKvPzNmpjT1JzET4cNs8f/hnK+YCGu1E0CDXScIBjoCOgOIvLAHA9AVt+Gpt+Gtw+Gxt+G1t+G5t+G+NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4cI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhxLQH8jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+HJw+HNw+HRw+HVt+HZt+Hdt+HhwcHDIyXBvBfh5cMjJbwL4esjJcG8C+HvIyY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBvA/h8cMjJLgA0bwL4fXABgED0DvK91wv/+GJw+GNw+GZ/+GEB/tP/0z/TANXV9ATV0x/TH9Mf1NcLB28F+HnV0wfXTG8C+HrVMdTXCx9vAvh7+Hj0BAEgbpPQ10zf+G30BAEgbpPQ10zf+G76QNP/03/VMdT6QNcLf28D+Hz4dPhz+HLV9AQBIG6U0PpAMN/4b/QE1dP/10xvAvh99AX4d/h29AQwAED0BNMH+kD6QNcLH/h1+HH4cPhs+Gv4an/4Yfhm+GP4YgMeMPhBbuMA1NHbPNs8f/hn6zLmABD4WSFvU/h5MAMgMPhBbuMA0x/R2zzbPH/4Z+s05gJgIDD4UY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMcFjoCOgOIwTzUBioIQUaFDYYvUVudGVyIHB1YmtleTqMjOyXDbPPgoyM+FiM6NBA5iWgAAAAAAAAAAAAAAAAABzxbPgc+Bz5El1Q1GyXD7ALoEWCCCEEhrF/m7joDgIIIQUaFDYbuOgOAgghBa4rUUu46A4CCCEF13jDm7joDgVUY8NwIoIIIQXD3aJ7rjAiCCEF13jDm64wI6OAMeMPhBbuMA1NHbPNs8f/hn6znmADb4QvhFIG6SMHDeuvLgZPgAcfhMAbH4bCD4bTADHjD4QW7jANTR2zzbPH/4Z+s75gA6+EL4RSBukjBw3rry4GT4ACD4S3ABWFl49Bf4azAEUCCCEFMnUm+64wIgghBVDkXGuuMCIIIQWGQtCrrjAiCCEFritRS64wJEQj89AzAw+EFu4wDXDP+V1NHQ0v/f0ds82zx/+GfrPuYAFiC1H/hbAW9R+HswA3gw+EFu4wDR2zwhwP+OJyPQ0wH6QDAxyM+HIM6AYM9Az4HPgc+TYZC0KiFvIgLLH/QAyXD7AN4w4wB/+GfrQOYB/nBtbwJ0bYLwh5ZTY2buIYUttW3MtgvFZFmLYYyGX8UMixq3QLuhKOPIy/9wWIAg9EOC8KwaTT7OojLkl4PfSiOoGCPNyjIF3FjNIMTbJZwlYFtIyMv/cViAIPRDgvDX7RvY5iMIcRFvRSLljfCpPFUgxW9K3iPvPYkZqYRlO8hBAGzL/3JYgCD0Q4LwFmU+rzTJIUZxIPJoXUJf+WPbXLtapnamKi4zv8P2gorIy/9zWIAg9ENvAjEDLjD4QW7jAPpBldTR0PpA39HbPNs8f/hn60PmABD4XCFvUfh8MANuMPhBbuMA0ds8IcD/jiIj0NMB+kAwMcjPhyDOgGDPQM+Bz4HPk0ydSb4hzxbJcPsA3jDjAH/4Z+tF5gBOjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+FAxBFAgghBJdUNRuuMCIIIQTFdbQbrjAiCCEEzMoGm64wIgghBRoUNhuuMCUlBJRwMeMPhBbuMA1NHbPNs8f/hn60jmAiKLIweIyM7JIds82zwB+HMwMJWSAyAw+EFu4wDTH9HbPNs8f/hn60rmAmAgMfhRjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwWOgI6A4jBPSwKighA/cJwijQ1RW50ZXIgdW5peHRpbWUgd2hlbiB2b3RpbmcgZm9yIHByb3Bvc2FsIHNob3VsZCBzdGFydDqDIzsn4I4IQ/////9s8ghAxB3CJuUwD1I0QkVudGVyIGR1cmF0aW9uIG9mIHZvdGluZyBwZXJpb2QgZm9yIGNvbnRlc3QgcHJvcG9zYWwgKGluIHNlY29uZHMpOoMjOyXGCCeEzgNs8ghBmiYRPi8RW50ZXIgdGl0bGU6jIzslw2zy5uk0B/o0FFNlbGVjdCBQcm9wb3NhbCBUeXBlgyM7JyMl0bYt1NldENvZGWMjOycjJghBMV1tBbwNvI8gjzxQizxQhzwsfbDFwWIAg9EOLdSZXNlcnZljIzsnIyYIQEBmaUG8DbyPII88UIs8UIc8LH2wxcViAIPRDi4U2V0T3duZXKMhOAf7OycjJghB7McuVbwNvI8gjzxQizxQhzwsfbDFyWIAg9EOLxTZXRSb290T3duZXKMjOycjJghAaCGi4bwNvI8gjzxQizxQhzwsfbDFzWIAg9ENvAts8+CjIz4WIzo0EDmJaAAAAAAAAAAAAAAAAAAHPFs+Bz4HPkC9qfcLJcPsAzwFeghAFnA1vjQhWW91IG5lZWQgdG8gYXR0YWNoIG11bHRpc2lnIGZpcnN0gyM7J2zzfAyAw+EFu4wDTH9HbPNs8f/hn61HmABQgMPhZcW9U+HkwAxww+EFu4wDR2zzjAH/4Z+tT5gH+yM+RRjGZLvhTzwv/yW34UcjPiSXAghA6h8rezwsfghBIaxf5zwsfcs8LB8+Dz4PPg8jPhoDPE850z0DPgc+DyM+DgQIAz0AibpLPgZbPgyLPC//i+CPPCz9wzwsfz5BMdgs2yPhQzxaCELLQXgDPC39wzwoAcM8KACTPFM3NyVQACHD7AFsEUCCCED9wnCK64wIgghBGhp1zuuMCIIIQRosCMLrjAiCCEEhrF/m64wJgXlxWAyQw+EFu4wDTH9Mf0ds82zx/+GfrV+YESnDIbW8CyI0EkZhaWxlZC4gU2RrIGVycm9yIINs82zwkcHBw2zze3YhYBDDbPIvC4gRXhpdCBjb2RlII2zzbPCNwcHDd3t1ZBBLbPNs8ixLo2zyI3d5aBEzbPNs82zz4VY0FURvIHlvdSB3YW50IHRvIHJldHJ5P4MjOyds8W93S31sArI0IZwizKfV5pkkKM4kHk0LqEv/LHtrl2tUztTFRcZ3+H7QUVCDIz4WIzo0EDmJaAAAAAAAAAAAAAAAAAAHPFs+Bz4HPkQ0kM8ojzwsfIs8UyXD7ADBbAx4w+EFu4wDU0ds82zx/+GfrXeYAEPhcIW9Q+HwwAx4w+EFu4wDU0ds82zx/+GfrX+YAOvhC+EUgbpIwcN668uBk+AAg+EtxAVhZePQX+GswAzAw+EFu4wDXDP+V1NHQ0v/f0ds82zx/+GfrYeYAFiC1H/hZAW9R+HkwBFggghAg1ztCu46A4CCCEDEHcIm7joDgIIIQOofK3ruOgOAgghA+hryNu46A4I+BaGMCKCCCED5IipK64wIgghA+hryNuuMCZmQDIDD4QW7jANMH0ds84wB/+GfrZeYAZiD4Snj0D5LIyd/4SXDIz4WAygBzz0DOgG3PQM+Bz4HPkCSXjMIizwsHIc8UyYBA+wAwMAISMNHbPOMAf/hnZ+YAom34KMjPiSXAghBs4rSLzwsfcM8LH3LPCwfPg8+Dz4PIz4aAzxPOdM9Az4Fyz0AhbpLPgZnywEDPgyHPC//icM8LP3DPCx/PkUydSb7JcPsAMARQIIIQMmchOLrjAiCCEDaUVnK64wIgghA4S94/uuMCIIIQOofK3rrjAn9ubGkDIDD4QW7jANM/0ds82zx/+GfrauYEaIIQBZwNb8htbwLIjQcVHJhbnNhY3Rpb24gc3VjY2VlZGVkLiB0eElkPYNs82zwjcHBw2zze3YhrAw7bPNs82zww3dLfAyAw+EFu4wDTH9HbPNs8f/hn623mATwgMIIQUaFDYYvUVudGVyIHB1YmtleTqMjOyXDbPDC6AyAw+EFu4wDTH9HbPNs8f/hn62/mA84gMXCNBJMaXN0IG9mIHByb3Bvc2FsczqDIzsnbPPhWIIAg9IZvoY4QAdMf0wf6QPpA1wsfbwVvAt4gbpJtbZNvIiHikyBus46A6F8EghAFnA1vi9QmFjayB0byBzdGFydIyM7J2zww33DfAXQiIPhXgCD0Dp/TH9Mf0x/U0x/TB9dMbwebcHBwyMlwcMjJbwfiIfhWgCD0Dp3TH9MH+kD6QNcLH28FcQTyjk1wcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBvBeKL8ic29mdCBtYWpvcml0eSKMjOychtbwLIi0CklEII2zzbPCVwcHDbPN7diHIEHts8izLiAijbPNs8JG8T0N3e3XMEJNs82zyLoiClN0YXR1czogjbPN7d3nQEHNs8I28RyMmOgNgx0Ns83X3edQQs2zyLgKU3RhcnQ6II2zzbPCRvEXBwcN3e3XYEHts82zyLcsIEVuZDogjbPIjd3ncEYNs8JG8ScHBw2zzbPI0IQpUb3RhbCB2b3RlczogMjEwMDAwMDAsIG9wdGlvbnM6IIN2I3XgEENs82zwi0Ns83t3eeQQq2zyLoKQWRkcmVzczogjbPNs8I28T3d7degQq2zyLoKY3JlYXRvcjogjbPNs8I28S097dewQS2zyLEKjbPNs8097dfAJg2zxwIds8XwQwICSAIPR8b6GOEAHTH9MH+kD6QNcLH28FbwLeIG6RMZZvIjMgNDHi0t8B6iFxu5uLNOZXeMjOyTHbMOAhcrqei2Vm90aW5njIzskx2zDgIXO6nYtUVuZGVkjIzskx2zDgIXS6notlBhc3NlZIyM7JMdsw4CF1up6LZGYWlsZWSMjOyTHbMOAhdrqOEYuUZpbmFsaXplZIyM7JMdsw4CF3un4ARo4Ti7RGlzdHJpYnV0ZWSMjOyTHbMOCLd1bmtub3dujIzskxAyAw+EFu4wDTH9HbPNs8f/hn64DmAUwgMIIQdQu0go0FVR5cGUgTXVsdGlzaWcgYWRkcmVzc4MjOyds8MLcEUCCCECGYjlu64wIgghAja5RvuuMCIIIQK/MwdrrjAiCCEDEHcIm64wKNi4SCAzAw+EFu4wDXDP+V1NHQ0v/f0ds82zx/+Gfrg+YAJPhZbxEhoLT/tR/4WQFvUvh5MAMwMPhBbuMA1w1/ldTR0NN/39HbPNs8f/hn64XmBFAg+HRwyG1vAsiNBJEZW1pdXJnZSBiYWxhbmNlOiCDbPNs8I3BwcNs83t2IhgQm2zyLsgbmFub3Rva2Vuc42zzbPN3e3YcCCts82zww0t8CdCTPNasCyMhwI5kwfygzITmAfzTfJZKAMJKAIOIllymALc8LBzreJKU1JJl/Mik0IjqAfzXfKHrbPCnbiQHkjlNTkbkglDApwn/f8tBCU5GhUwe7jhkgllPDzwsHPeRTcKE4J5l/NSw3JT2AfzjfjiEnllPDzwsHPeR/NSw3JT1TB6GWU8PPCwc95IB/IaEooDjiMN5TFruOFyGOEyuAMCJvEKDPCwc8IG8RIG7yfzHkigCMjjYmjhMrgDAibxCgzwsHPCBvESBu8n8x5H80KzYkPFMWoY4TK4AwIm8QoM8LBzwgbxEgbvJ/MeTiI7OSKzaSKzXiXzVswwMeMPhBbuMA1NHbPNs8f/hn64zmADr4QvhFIG6SMHDeuvLgZPgAIPhKcQFYWXj0F/hqMAIWMNIA0ds84wB/+GeO5gAQlSCS2zDh2DAEUCCCEB21lTe64wIgghAfPtuKuuMCIIIQH18IKrrjAiCCECDXO0K64wKdm5mQAx4w+EFu4wDU0ds82zx/+GfrkeYCLIsjB4jIzskh2zzbPAH4XQFvUPh9MDCVkgEOcHCOgNhsEpMBxiLQINdJwQiWcHBsI1gw4F8g0wcyIMAtcCPXSVMilTAggBC+3pkk0wfTBzcBNTLeIrMglDAgeL7elSTTBzYy3iPAMCCUMCHAeN4jlSbTBzgw3iCXJtMH0wc5W95wfyjXSasCI5QA/I5QII5MKdMHOyOnEDQggDC+IJUwIIA5u96WIKbQJKA0ji0ggEG+IJUwIIBGu96WIKbJJKA0jhcggGG+IJUwIIBmu96WIKapJKA0knAz4uLiMOSOHyCOGynTBzsgwTAglDAgwjnfknAz3iOnCjSm0COgM+TiJpMiozPeXyJswgQ2Ids8ItDIcF3bPAI2MzFfJF3bPAE2NJQicddGmN7dlgISjoDoXyTbPGxxl9ICKCLVATQzXds8AjYzMV8kXds8ATY03t0AYMhtbwIh0JUg10rDAI4XINUBMshtbwJfIG8QJM8Wb1AxI29RMzHoyFMBzxYxUyBsQgMcMPhBbuMA0ds82zx/+GfrmuYBLoIQBZwNb4ulN1Y2NlZWRlZC6MjOyds83wMeMPhBbuMA1NHbPNs8f/hn65zmADr4QvhFIG6SMHDeuvLgZPgAIPhKcAFYWXj0F/hqMAMuMPhBbuMA+kGV1NHQ+kDf0ds82zx/+GfrnuYAKPhC+EUgbpIwcN668uBk+AAg+HAwBFggghAIssFHu46A4CCCEAvan3C7joDgIIIQFsT66ruOgOAgghAaCGi4u46A4MKvpqACKCCCEBcjDDq64wIgghAaCGi4uuMCo6EDIDD4QW7jANMf0ds82zx/+GfrouYAFCAw+Fl0b1T4eTADHjD4QW7jANTR2zzbPH/4Z+uk5gJK+EUgbpIwcN74Qrry4GQg0NQw+ADbPPgPIPsEINDtHu1T2zwwMOalAATwAgRQIIIQDqvCirrjAiCCEBAZmlC64wIgghAT+RYOuuMCIIIQFsT66rrjAq2rqacDIDD4QW7jAPQE0ds82zx/+GfrqOYACCD4djADIDD4QW7jANMH0ds84wB/+GfrquYAZiD4S3j0D5LIyd/4SXDIz4WAygBzz0DOgG3PQM+Bz4HPkNGLu7IizwsHIc8UyYBA+wAwMAMgMPhBbuMA0x/R2zzbPH/4Z+us5gAUIDD4WXJvVPh5MAMeMPhBbuMA1NHbPNs8f/hn667mABD4XSFvUfh9MARQIIIQCjfgxLrjAiCCEApfBNe64wIgghALHervuuMCIIIQC9qfcLrjAsC+vLADHDD4QW7jANHbPNs8f/hn67HmAmr4WW8UcbqOgI6A4vgoyM+FiM6NBA5iWgAAAAAAAAAAAAAAAAABzxbPgc+Bz5HMzrJ+yXD7ALuyAhb4WW8UcrqOgI6A4rizAhb4WW8Uc7qOgI6A4ra0ARL4WW8UdLqOgN61Am6CECDXO0KL1FbnRlciBwdWJrZXk6jIzslw2zyCEA6rwoqL5FbnRlciBjb21tZW50OoyM7JcNs8uroDrIIQRosCMIu0VudGVyIG5hbWU6jIzslw2zyCEFUORcaLxFbnRlciBvd25lcjqMjOyds8ghB/QguWi/RW50ZXIgdW5peHRpbWU6jIzsn4I4IQ/////9s8ure5AKyNCGcOv2jexzEYQ4iLeikXLG+FSeKpBit6VvEfeexIzUwjKdwgyM+FiM6NBA5iWgAAAAAAAAAAAAAAAAABzxbPgc+Bz5CENoAWI88LHyLPFMlw+wAwWwJ6ghALHervi7RW50ZXIgbmFtZTqMjOyXDbPIIQWuK1FIv0VudGVyIHVuaXh0aW1lOoyM7J+COCEP/////bPLq5AL6NCGcOLUqsWTMldr7h8wkaG2qieJ//NNWHEsoJekY2jkLEIAwgyM+FiM6NBA5iWgAAAAAAAAAAAAAAAAABzxbPgc+Bz5ED3oc6Jc8LHyTPFCPPCv8izwr/yXD7ADBfBAC2jQhnDDyymxs3cQwpbatuZbBeKyLMWwxkMv4oZFjVugXdCUccIMjPhYjOjQQOYloAAAAAAAAAAAAAAAAAAc8Wz4HPgc+Q5VfcviTPCx8jzxQizwoAyXD7ADBfAwFqghAFnA1vjQnRGVCb3QgZG9lc24ndCBzdXBwb3J0IFNldENvZGUgUHJvcG9zYWxzgyM7J2zzfAx4w+EFu4wDU0ds82zx/+GfrveYAEPhbIW9Q+HswA2Yw+EFu4wDTH9MH+kGV1NHQ+kDf+kGV1NHQ+kDf1w0fldTR0NMf31VAbwUB0ds82zx/+Gfrv+YADCBvE/hyMAMeMPhBbuMA1NHbPNs8f/hn68HmADr4QvhFIG6SMHDeuvLgZPgAIPhKcgFYWXj0F/hqMARIIIEN67rjAiCCC+p0W7rjAiCCEAWcDW+64wIgghAIssFHuuMC5eTHwwMgMPhBbuMA0x/R2zzbPH/4Z+vE5gJiIDD4Uo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMcFs46AjoDiMNDFAvpwjQYUGFkYXdhbiBkb2Vzbid0IGF0dGFjaGVkgyM7J2zyNBdXaGF0IGRvIHlvdSB3YW50IHRvIGRvP4MjOycjJcm2NBZBdHRhY2ggZXhpc3RlZCBQYWRhd2FugyM7JyMmCEDhL3j9vA28jyCPPFCLPFCHPCx9sMXBYgCD0Q9/GAWyL5DcmVhdGUgUGFkYXdhboyM7JyMmCEGPJK9JvA28jyCPPFCLPFCHPCx9sMXFYgCD0Q28C2zzPAxww+EFu4wDR2zzbPH/4Z+vI5gRM2zz4U46A3oIQK/MwdvhQ2zxwi/RGVtaXVyZ2UgRGVib3QujIzsnj4eDJBEbbPHDIbW8CyI0EkN1cnJlbnQgRGVtaXVyZ2U6IINs82zz4UN/e3coEUts82zzbPHDIbW8CyI0GkN1cnJlbnQgTXVsdGlzaWcgYWRkcmVzczogg09LfywQQ2zzbPPhR2zze3dPMBP7bPNs8+FKNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBY6A340F1doYXQgZG8geW91IHdhbnQgdG8gZG8/gyM7JyMl0bYv0F0dGFjaCBNdWx0aXNpZ4yM7JyMmCEDJnIThvA28jyCPPFCLPFCHPCx9sMXBY0t/QzQH+gCD0Q4vlZpZXcgUHJvcG9zYWxzjIzsnIyYIQNpRWcm8DbyPII88UIs8UIc8LH2wxcViAIPRDi/Q3JlYXRlIFByb3Bvc2FsjIzsnIyYIQTMygaW8DbyPII88UIs8UIc8LH2wxcliAIPRDjQRVm90ZSBmb3IgUHJvcG9zYWyDIzs4BSMnIyYIQCLLBR28DbyPII88UIs8UIc8LH2wxc1iAIPRDbwLbPM8AvI0IZw1g0mn2dRGXJLwe+lEdQMEeblGQLuLGaQYm2SzhKwLaRCDIz4WIzo0EDmJaAAAAAAAAAAAAAAAAAAHPFs+Bz4HPkaYFGOYkzxQjzxQibyICyx/0AMlw+wAwXwMERHDIbW8CyI0EUN1cnJlbnQgUGFkYXdhbjogg2zzbPPhS2zze3dPRAgjbPNs80t8ARCCVIm8RbrOOFVMibxAizW9QMzAhbxAibxEgbvJ/M+jJbCEESCDbPMjIcFNk2zwCNTMxJ18z2zwBOTcmzzUgwgiXJ4A6zwsHONzW3dQDLo6A4lN0gEB/f3DbPAI2NDIoXzTbPGyS1dfdASTIIIA6zwsHMV8pIn/bPAE7OTDdAR5ctgu1/3BwfyXBANs8bCPXAnYlzzWrAsjIcCOZMH8pMyE6gH803yaSgDCSgCDiJZcqgC3PCwc73iSlNSSZfzIqNCI7gH813ymAENs8KtvYAbKOU1OhuSCUMCrCf9/y0EVToaFTB7uOGSCWU9PPCwc+5FNwoTgnmX81LTclPoB/ON+OISeWU9PPCwc+5H81LTclPlMHoZZT088LBz7kgH8hoSigOOIw3lMWu9kBYI4uIY4qIG8QIMEKmS2AMCKgzwsHPp9T2ZKAV5KAN+IioM8LBz7iIW8RIG7yfzIw5NoA6I5kJo4qIG8QIMEKmS2AMCKgzwsHPp9T2ZKAV5KAN+IioM8LBz7iIW8RIG7yfzIw5H80LDYkPVMWoY4qIG8QIMEKmS2AMCKgzwsHPp9T2ZKAV5KAN+IioM8LBz7iIW8RIG7yfzIw5OIjs5IsNpIsNeJfNWzTAI5wcG1vAo49IG9RI44ScG1vAnBvUCFvUSAycSJsI1gw4ZMjwwCOFSGkMnBtbwJfJKkMATYiAW9QMgFvUeggbxEgbvJ/MdhsIgAqIPpCIG8QwwLydSBvEiFvE9cL/2wiAELIbW8CyI4XIpRfJWwi4chtbwImb1Elb1BTBGwjWDDYbEIAaiHPNab5IddLIJYjcCLXMTTeyFMjuyCVXybPFjeOEF8l1xg3U3DPFjhTJs8WMzDiJl8is2xzAKyNCGcMPLKbGzdxDCltq25lsF4rIsxbDGQy/ihkWNW6Bd0JRxwgyM+FiM6NBA5iWgAAAAAAAAAAAAAAAAABzxbPgc+Bz5AzmScKI88LHyLPFMlw+wAwWwCsjQhnDH4yKnyAOWT4+2mYnXCwR7J6UDMGNXT6FjRbU88VDeJcIMjPhYjOjQQOYloAAAAAAAAAAAAAAAAAAc8Wz4HPgc+QANrTziPPCx8izxbJcPsAMFsBBNs84gCM+FDIz4klwIIQCl8E188LH4IQSGsX+c8LH3LPCwfPg8+Bz4HIz4aAzxPOdM9Az4Fyz0D4I88LP8+R/8JQvvhTzwv/yXD7AADw+FDIz4klwIIQFsT66s8LH3DPCx9yzwsHz4PPgc+ByM+GgM8TznTPQM+Bcs9A+CPPCz/PkKfIxDLJcPsA+FDIz4klwIIQdVh5E88LH3DPCx9yzwsHz4PPgc+ByM+GgM8TznTPQM+Bcs9A+CPPCz/PkWmzztLJcPsAAVbbPPhLyIvcAAAAAAAAAAAAAAAAIM8Wz4HPgc+SD6nRbiEB9ADJcPsAf/hn6wOyMPhBbuMA0ds8KsD/jkMs0NMB+kAwMcjPhyDOgGDPQM+Bz4PIz5AAADeuK88UKs8UKc8UyCnPFCjPFCfPFibPFMgmzxQlzxQkzxTNzc3JcPsA3l8K4wB/+Gfr6OYB8PhCyMv/+EPPCz/4Rs8LAMjI+Fj4Wfha+FteMPQAAW8lyCXPCx8kzwsfI88LHyLPFCHPCwdsUc0BbyLIIs8LByHPFGwhzQFvIsgizxQhzwsfbCHN+E34TvhS+FP4VPhcXmDPEQEgbrOXyMwBz4PPEZMwz4HiASBus+cA4JfIzAHPg88RkzDPgeLOy//LfwFvI8gjzxQizxYhzwt/bDHNyPhP+Fb4XfhXXjABIG6zl8jOAc+DzxGTMM+B4vQAAW8iyCLPC/8hzxRsIc30APhK+Ev4TPhQ+FH4VV5wzxHPEfQA9ADLB87Oyx/J7VQBwsjJyMnIycjJyMmNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATIycjJyMnIyYvkRlbWl1cmdlIERlYm90jIzsk6i1MS42LjCMjOyTmLZSU3F1YWSMjOyTjpAdaNDNEZXBsb3kgU01WIHN5c3RlbSBhbmQgY3JlYXRlIHBlcnNvbmFsIHZvdGluZyBkZWJvdC6DIzsk3i2UlNxdWFkjIzsk2jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAENeoAaI0G0hlbGxvLCBpIGFtIERlbWl1cmdlIERlYm90LoMjOyTSLJlboyM7JM/hNIG7yfzLIyTEB/O1E0NP/0z/TANXV9ATV0x/TH9Mf1NcLB28F+HnV0wfXTG8C+HrVMdTXCx9vAvh7+Hj0BAEgbpPQ10zf+G30BAEgbpPQ10zf+G76QNP/03/VMdT6QNcLf28D+Hz4dPhz+HLV9AQBIG6U0PpAMN/4b/QE1dP/10xvAvh99AX4d+wASPh29AT0BNMH+kD6QNcLH/h1+HH4cPhs+Gv4an/4Yfhm+GP4Yg=="}